'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUserCategory = exports.getUserCategories = exports.createUserCategory = exports.loginWithAuth0 = undefined;

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

var _createToken = require('./utils/createToken');

var _facebookAuth = require('./utils/facebookAuth');

var _googleAuth = require('./utils/googleAuth');

var _model3 = require('../categories/model');

var _model4 = _interopRequireDefault(_model3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const loginWithAuth0 = exports.loginWithAuth0 = async (req, res) => {
  const { provider, token } = req.body;

  let userInfo;

  try {
    if (provider === 'google') {
      userInfo = await (0, _googleAuth.googleAuth)(token);
    } else {
      userInfo = await (0, _facebookAuth.facebookAuth)(token);
    }
  } catch (err) {
    return res.status(400).json({ error: true, errorMessage: err.mesage });
  }

  const user = await _model2.default.findOrCreate(userInfo);

  return res.status(200).json({
    success: true,
    user: {
      id: user._id,
      token: `JWT ${(0, _createToken.createToken)(user)}`
    }
  });
};

const createUserCategory = exports.createUserCategory = async (req, res) => {
  const { title } = req.body;
  const { userId } = req.params;

  if (!title) {
    return res.status(400).json({ error: 'Title must be provided' });
  } else if (typeof title !== 'string') {
    return res.status(400).json({ error: 'Title must be a string' });
  } else if (title.length < 5) {
    return res.status(400).json({ error: 'Title must be at least 5 characters long' });
  }

  if (!userId) {
    return res.status(400).json({ error: 'User id must be a provided' });
  }

  try {
    const { user, category } = await _model2.default.addCategory(userId, {
      title
    });

    return res.status(201).json({ error: false, user, category });
  } catch (err) {
    return res.status(400).json({ error: true, message: 'Category can not be created' });
  }
};

const getUserCategories = exports.getUserCategories = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({ error: 'User id must be provided' });
  }

  try {
    const user = await _model2.default.findById(userId);
    const categoryIds = user.categories;

    const categories = await _model4.default.find({ _id: { $in: categoryIds } });

    return res.status(200).json({ categories });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with user categories' });
  }
};

const deleteUserCategory = exports.deleteUserCategory = async (req, res) => {
  const { userId } = req.params;
  const { categoryId } = req.body;

  if (!userId) {
    return res.status(400).json({ error: 'User id must be provided' });
  }
  if (!categoryId) {
    return res.status(400).json({ error: 'Category id must be provided' });
  }

  try {
    const response = await _model2.default.deleteCategory(userId, { categoryId });

    return res.status(200).json({ categoryId: response.categoryId, categoryIds: response.categoryIds });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with user categories' });
  }
};