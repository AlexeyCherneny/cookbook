'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteCategoryRecipe = exports.updateCategory = exports.getCategoryRecipes = exports.createCategoryRecipe = exports.createCategory = undefined;

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

var _recipes = require('../recipes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createCategory = exports.createCategory = async (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Title must be provided' });
  } else if (typeof title !== 'string') {
    return res.status(400).json({ error: 'Title must be a string' });
  } else if (title.length < 4) {
    return res.status(400).json({ error: 'Title must be at least 4 characters long' });
  }

  const category = new _model2.default({ title });

  try {
    return res.status(201).json({ error: false, group: await category.save() });
  } catch (err) {
    return res.status(400).json({ error: true, message: 'Category couldnt be created' });
  }
};

const createCategoryRecipe = exports.createCategoryRecipe = async (req, res) => {
  const { title, description } = req.body;
  const { categoryId } = req.params;

  if (!title) {
    return res.status(400).json({ error: 'Title must be provided' });
  } else if (typeof title !== 'string') {
    return res.status(400).json({ error: 'Title must be a string' });
  } else if (title.length < 5) {
    return res.status(400).json({ error: 'Title must be at least 5 characters long' });
  }

  if (!description) {
    return res.status(400).json({ error: 'Description must be provided' });
  } else if (typeof description !== 'string') {
    return res.status(400).json({ error: 'Description must be a string' });
  } else if (description.length < 5) {
    return res.status(400).json({ error: 'Description must be at least 5 characters long' });
  }

  if (!categoryId) {
    return res.status(400).json({ error: 'Category id must be a provided' });
  }

  try {
    const { category, recipe } = await _model2.default.addRecipe(categoryId, {
      title,
      description
    });
    return res.status(201).json({ error: false, category, recipe });
  } catch (err) {
    return res.status(400).json({ error: true, message: 'Recipe can not be created' });
  }
};

const getCategoryRecipes = exports.getCategoryRecipes = async (req, res) => {
  const { categoryId } = req.params;
  if (!categoryId) {
    return res.status(400).json({ error: true, message: 'You need to provide a category id' });
  }

  const category = await _model2.default.findById(categoryId);

  if (!category) {
    return res.status(400).json({ error: true, message: "Category doesn't exist" });
  }

  try {
    return res.status(200).json({
      error: false,
      recipes: await _recipes.Recipe.find({ category: categoryId }).populate('category', 'title')
    });
  } catch (err) {
    return res.status(400).json({ error: true, message: 'Can not fetch category recipes' });
  }
};

const updateCategory = exports.updateCategory = async (req, res) => {
  const { categoryId } = req.params;
  const { title } = req.body;

  if (!categoryId) {
    return res.status(400).json({ error: true, message: 'You need to provide a category id' });
  }

  const category = await _model2.default.findOneAndUpdate({
    _id: categoryId }, { $set: { title } });

  if (!category) {
    return res.status(400).json({ error: true, message: "Category doesn't exist" });
  }

  try {
    const updatedCategory = await _model2.default.findById(categoryId);

    return res.status(200).json({
      error: {
        on: false,
        message: ''
      },
      category: updatedCategory
    });
  } catch (err) {
    return res.status(400).json({ error: true, message: 'Can not fetch category recipes' });
  }
};

const deleteCategoryRecipe = exports.deleteCategoryRecipe = async (req, res) => {
  const { categoryId } = req.params;
  const { recipeId } = req.body;

  if (!categoryId) {
    return res.status(400).json({ error: 'Category id must be provided' });
  }
  if (!recipeId) {
    return res.status(400).json({ error: 'Recipe id must be provided' });
  }

  try {
    const response = await _model2.default.removeRecipe(categoryId, { recipeId });

    return res.status(200).json(Object.assign({}, response));
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with user categories' });
  }
};