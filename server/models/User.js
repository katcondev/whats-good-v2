const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const dateFormat = require('../utils/dateFormat');


const businessSchema = require('./Business');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    address: {
      type: String,
      required: false
    },
    city: {
      type: String,
      required: false
    },
    zip: {
      type: String,
      required: false
    },
    starsGiven: {
      type: String,
      required: false
    },
    starsAssoc: {
      type: String,
      required: false
    },
    affiliation: {
      type: String,
      required: true
    },
    ethnicity: {
      type: String,
      required: false
    },
    orientation: {
      type: String,
      required: false
    },
    phone: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    
    savedBusinesses: [businessSchema],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


userSchema.virtual('businessCount').get(function () {
  return this.savedBusinesses.length;
});

const User = model('User', userSchema);

module.exports = User;
