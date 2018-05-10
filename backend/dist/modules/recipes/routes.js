'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _controller = require('./controller');

var RecipesController = _interopRequireWildcard(_controller);

var _requireJwtAuth = require('../../utils/requireJwtAuth');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const routes = new _express.Router();

routes.post('/recipes', RecipesController.createRecipe);
routes.get('/recipes', _requireJwtAuth.requireJwtAuth, RecipesController.getRecipes);

exports.default = routes;