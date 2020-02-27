const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
  name: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
  abonne: Boolean,
  admin: Boolean,
});


//Pre Save Hook. Used to hash the password
userSchema.pre('save', function (next) {

  //Generate Salt Value
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    //Use this salt value to hash password
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      this.password = hash;
      next();
    });

  });
});
//Custom method to check the password correct when login
userSchema.methods.isPasswordMatch = function(plainPassword, hashed, callback) {
  bcrypt.compare(plainPassword, hashed, (err, isMatch) => {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
}
const User = mongoose.model('User', userSchema);

module.exports = User;