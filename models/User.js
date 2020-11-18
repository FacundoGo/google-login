const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  githubId: String,
  googleId: String,
  avatar: String,
  name: String
},
{
  timestamps: {createdAt: "created_at", updatedAt: "updated_at"}
});

const User = mongoose.model('User', userSchema);
module.exports = User;