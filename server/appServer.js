const mongoose = require("mongoose")
const express = require("express")
const { connectDB } = require("./connectDB.js")
const { populatePokemons } = require("./populatePokemons.js")
const { getTypes } = require("./getTypes.js")
const { handleErr } = require("./errorHandler.js")
const { asyncWrapper } = require("./asyncWrapper.js")
const {
  PokemonBadRequest, // might use later
  PokemonNotFoundError,
  PokemonDbError,
  PokemonDuplicateError,
  PokemonBadRequestMissingID,
  PokemonBadRequestMissingAfter, // might use later
  PokemonNoSuchRouteError,
  PokemonInvalidQuery
} = require("./error.js")

const dotenv = require("dotenv")
dotenv.config();

const app = express()
var pokeModel = null;
const userModel = require("./userModel.js")

const start = asyncWrapper(async () => {
  await connectDB();
  const pokeSchema = await getTypes();
  pokeModel = await populatePokemons(pokeSchema);

  app.listen(process.env.APP_SERVER_PORT, (err) => {
    if (err)
      throw new PokemonDbError(err)
    else
      console.log(`Phew! Server is running on port: ${process.env.APP_SERVER_PORT}`);
  })
})
start()

const auth = (req, res, next) => {
  const token = req.header('auth-token')
  if (!token) {
    throw new PokemonBadRequest("Access denied")
  }
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET)
    next()
  } catch (err) {
    throw new PokemonBadRequest("Invalid token")
  }
}


app.use(auth) // All routes after this line SHOULD be protected

// http://localhost:5000/api/v1/pokemons/?count=2&after=10
app.get('/api/v1/pokemons', asyncWrapper(async (req, res) => {
  if (req.query["count"] < 0 || req.query["after"] < 0)
    throw new PokemonInvalidQuery();
  if (!req.query["count"])
    req.query["count"] = 10
  if (!req.query["after"])
    req.query["after"] = 0

  const docs = await pokeModel.find({})
    .sort({ "id": 1 })
    .skip(req.query["after"])
    .limit(req.query["count"])
  res.json({
    request: "GET /api/v1/pokemons",
    msg: "Pokemons Found Successfully!",
    pokeInfo: docs
  })
}))

app.get('/api/v1/pokemon/:id', asyncWrapper(async (req, res) => {
  const { id } = req.params
  const doc = await pokeModel.find({ "id": id })
  if (doc.length != 0)
    res.json({
      request: "GET /api/v1/pokemon/:id",
      msg: "Pokemon Found Successfully!",
      pokeInfo: doc
    })
  else throw new PokemonNotFoundError();
}))

app.use(express.json())

app.post('/api/v1/pokemon/', asyncWrapper(async (req, res) => {

  if (!req.body.id) throw new PokemonBadRequestMissingID()
  const poke = await pokeModel.find({ "id": req.body.id })
  if (poke.length != 0) throw new PokemonDuplicateError()
  const doc = await pokeModel.create(req.body)
  res.json({
    request: "POST /api/v1/pokemon/",
    msg: "Pokemon Added Successfully!",
    pokeInfo: doc
  })
}))

app.delete('/api/v1/pokemon/:id', asyncWrapper(async (req, res) => {
  const doc = await pokeModel.findOneAndRemove({ id: req.params.id })
  if (doc)
    res.json({
      request: "DELETE /api/v1/pokemon/:id",
      msg: "Pokemon Deleted Successfully!",
      pokeInfo: doc
    })
  else throw new PokemonNotFoundError();
}))

app.put('/api/v1/pokemon/:id', async (req, res) => {
  const selection = { id: req.params.id }
  const update = req.body
  const options = {
    new: true,
    runValidators: true,
    overwrite: true
  }
  const doc = await pokeModel.findOneAndUpdate(selection, update, options)
  if (doc)
    res.json({
      request: "PUT /api/v1/pokemon/:id",
      msg: "Pokemon Updated Successfully!",
      pokeInfo: doc
    })
  else throw new PokemonNotFoundError()
})

app.patch('/api/v1/pokemon/:id', asyncWrapper(async (req, res) => {
  const selection = { id: req.params.id }
  const update = req.body
  const options = {
    new: true,
    runValidators: true
  }
  const doc = await pokeModel.findOneAndUpdate(selection, update, options)
  if (doc)
    res.json({
      request: "PATCH /api/v1/pokemon/:id",
      msg: "Pokemon Updated Successfully!",
      pokeInfo: doc
    })
  else throw new PokemonNotFoundError();
}))

app.get("*", (req, res) => {
  throw new PokemonNoSuchRouteError();
})

app.use(handleErr)