const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    
    // minlength: 3
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true
  },
  pincode:{
    type: String,
    required: true,
    length:6
  },
  items:[
  ]
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;