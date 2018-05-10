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
  recipes: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Recipe'
  }]
}, { timestamps: true, usePushEach: true });

CategorySchema.statics.addCategory = async function (id, args) {
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

exports.default = _mongoose2.default.model('Category', CategorySchema);