'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRecipe = exports.getRecipes = exports.createRecipe = undefined;

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

const updateRecipe = exports.updateRecipe = async (req, res) => {
  const { recipeId } = req.params;
  const { title, description } = req.body;

  console.log({ title, description, recipeId });

  if (!recipeId) {
    return res.status(400).json({ error: true, message: 'You need to provide a recipe id' });
  }

  const recipe = await _model2.default.findOneAndUpdate({
    _id: recipeId }, { $set: { title, description } });

  if (!recipe) {
    return res.status(400).json({ error: true, message: "Recipe doesn't exist" });
  }

  try {
    const updatedRecipe = await _model2.default.findById(recipeId);

    return res.status(200).json({
      error: {
        on: false,
        message: ''
      },
      recipe: updatedRecipe
    });
  } catch (err) {
    return res.status(400).json({ error: true, message: 'Can not update recipes' });
  }
};