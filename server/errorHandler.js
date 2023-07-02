const { mongoose } = require('mongoose')

handleErr = (err, req, res, next) => {
  if (err.pokeErrorCode)
    res.status(err.pokeErrorCode)
  else
    res.status(501)
  res.send(err.message)
  // so your errors shine ✨
  console.log("\x1b[32m¸.·✩·.¸¸.·¯⍣✩ ### ✩⍣¯·.¸¸.·✩·.¸\x1b[0m");
  console.log("\x1b[33m" + err + "\x1b[0m");
  console.log("\x1b[32m¸.·✩·.¸¸.·¯⍣✩ ### ✩⍣¯·.¸¸.·✩·.¸\x1b[0m");
}

module.exports = { handleErr }