'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _controller = require('./controller');

var RecipesController = _interopRequireWildcard(_controller);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// import { requireJwtAuth } from '../../utils/requireJwtAuth';

const routes = new _express.Router();

routes.post('/recipes', RecipesController.createRecipe);
routes.get('/recipes', RecipesController.getRecipes);
routes.post('/recipes/:recipeId/update', RecipesController.updateRecipe);

exports.default = routes;