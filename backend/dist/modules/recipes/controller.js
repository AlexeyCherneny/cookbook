'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRecipes = exports.createRecipe = undefined;

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createRecipe = exports.createRecipe = async (req, res) => {
  const { title, description } = req.body;
  const newRecipe = new _model2.default({ title, description });

  try {
    return res.status(201).json({ recipe: await newRecipe.save() });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with recipe' });
  }
};

const getRecipes = exports.getRecipes = async (req, res) => {
  try {
    return res.status(200).json({ recipes: await _model2.default.find({}) });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with Recipes' });
  }
};