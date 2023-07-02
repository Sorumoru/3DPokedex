class PokemonBadRequest extends Error {
  constructor(message) {
    super(message);
    this.name = 'PokemonBadRequest';
    this.message = "Error - bad request: check the API doc please."
    this.pokeErrorCode = 400;
  }
}

class PokemonNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'PokemonNotFoundError';
    this.message = "Error - pokemon was not found: check your request please."
    this.pokeErrorCode = 400;
  }
}

class PokemonDbError extends Error {
  constructor(message) {
    super(message);
    this.name = 'PokemonDbError';
    this.message = "Error - database error: contact API owners for more info please."
    this.pokeErrorCode = 500;
  }
}

class PokemonDuplicateError extends PokemonBadRequest {
  constructor(message) {
    super(message);
    this.name = 'PokemonDuplicateError';
    this.message = "Error - pokemon duplication error: the pokemon has already been inserted."
    this.pokeErrorCode = 400;
  }
}

class PokemonBadRequestMissingID extends PokemonBadRequest {
  constructor(message) {
    super(message);
    this.name = 'PokemonBadRequestMissingID';
    this.message = "Error - bad request: check the API doc please."
    this.pokeErrorCode = 400;
  }
}

class PokemonBadRequestMissingAfter extends PokemonBadRequest {
  constructor(message) {
    super(message);
    this.name = 'PokemonBadRequestMissingAfter';
    this.message = "Error - bad request: check the API doc please."
    this.pokeErrorCode = 400;
  }
}

class PokemonNoSuchRouteError extends PokemonBadRequest {
  constructor(message) {
    super(message);
    this.name = 'PokemonNoSuchRouteError';
    this.message = "Error - accessing invalid route: what are you doing here? Get out please."
    this.pokeErrorCode = 400;
  }
}

class PokemonInvalidQuery extends PokemonBadRequest {
  constructor(message) {
    super(message);
    this.name = 'PokemonInvalidQuery';
    this.message = "Error - inputting invalid query: query you typed is not valid, check queries please."
  }
}

module.exports = {
  PokemonBadRequest,
  PokemonNotFoundError,
  PokemonDbError,
  PokemonDuplicateError,
  PokemonBadRequestMissingID,
  PokemonBadRequestMissingAfter,
  PokemonNoSuchRouteError,
  PokemonInvalidQuery
};