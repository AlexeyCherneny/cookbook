'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginWithAuth0 = undefined;

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

var _createToken = require('./utils/createToken');

var _facebookAuth = require('./utils/facebookAuth');

var _googleAuth = require('./utils/googleAuth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const loginWithAuth0 = exports.loginWithAuth0 = async (req, res) => {
  console.log('----------------------------');
  console.log(req.body);
  console.log('----------------------------');
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

  console.log('----------------------------');
  console.log(req.user);
  console.log('----------------------------');

  return res.status(200).json({
    success: true,
    user: {
      id: user._id,
      token: `JWT ${(0, _createToken.createToken)(user)}`
    }
  });
};