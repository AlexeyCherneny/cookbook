'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CategorySchema = new _mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLegth: [4, 'Title must be at least 4 caracters long']
  },
  user: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  recipes: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Recipe'
  }]
}, { timestamps: true, usePushEach: true });

CategorySchema.statics.addRecipe = async function (id, args) {
  const Recipe = _mongoose2.default.model('Recipe');

  const recipe = await new Recipe(Object.assign({}, args, { category: id }));

  const category = await this.findByIdAndUpdate(id, {
    $push: { recipes: recipe.id }
  });

  return {
    recipe: await recipe.save(),
    category
  };
};

CategorySchema.statics.removeRecipe = async function (categoryId, args) {
  const category = await this.findByIdAndUpdate(categoryId, {
    $pull: { recipes: { $in: [args.recipeId] } }
  });

  await category.save();

  const updatedCategory = await this.findById(categoryId);
  console.log('Output after delete: ', {
    updatedCategory,
    recipeIds: updatedCategory.recipes,
    recipeId: args.recipeId
  });

  return {
    updatedCategory,
    recipeIds: updatedCategory.recipes,
    recipeId: args.recipeId
  };
};

exports.default = _mongoose2.default.model('Category', CategorySchema);