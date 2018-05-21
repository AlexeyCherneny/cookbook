'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UserSchema = new _mongoose.Schema({
  email: {
    type: String,
    unique: true
  },
  fullName: String,
  avatar: String,
  categories: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }],
  providerData: {
    uid: String,
    provider: String
  }
}, { timestamps: true });

UserSchema.statics.findOrCreate = async function (args) {
  try {
    const user = await this.findOne({ email: args.email, fullName: args.fullName });

    if (!user) {
      return await this.create(args);
    }

    return user;
  } catch (err) {
    return err;
  }
};

UserSchema.statics.addCategory = async function (id, args) {
  const Category = _mongoose2.default.model('Category');

  const category = await new Category(Object.assign({}, args, { user: id }));

  const user = await this.findByIdAndUpdate(id, {
    $push: { categories: category.id }
  });

  return {
    category: await category.save(),
    user: user._id
  };
};

UserSchema.statics.deleteCategory = async function (userId, args) {
  let user = await this.findByIdAndUpdate(userId, {
    $pull: { categories: { $in: [args.categoryId] } }
  });

  await user.save();

  user = await this.findById(userId);

  return {
    user,
    categoryIds: user.categories,
    categoryId: args.categoryId
  };
};

exports.default = _mongoose2.default.model('User', UserSchema);