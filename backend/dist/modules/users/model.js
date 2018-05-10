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

exports.default = _mongoose2.default.model('User', UserSchema);