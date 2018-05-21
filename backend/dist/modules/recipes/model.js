'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RecipeSchema = new _mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: [5, '5 characters long at least']
  },
  description: {
    type: String,
    required: true,
    minLength: [5, '20 characters long at least']
  },
  category: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }
}, { timestamps: true, usePushEach: true });

RecipeSchema.statics.removeRecipe = async function (recipeId) {
  console.log('RecipeId: ', recipeId);
  await this.deleteOne(recipeId);
};

exports.default = _mongoose2.default.model('Recipe', RecipeSchema);