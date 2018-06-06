'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _controller = require('./controller');

var UserController = _interopRequireWildcard(_controller);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const routes = new _express.Router();

routes.post('/users/auth0', UserController.loginWithAuth0);
routes.post('/users/:userId/categories', UserController.createUserCategory);
routes.get('/users/:userId/categories', UserController.getUserCategories);
routes.delete('/users/:userId/categories', UserController.deleteUserCategory);
routes.get('/users/:userId', UserController.getUserInfo);

exports.default = routes;