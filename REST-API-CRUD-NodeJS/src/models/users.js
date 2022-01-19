const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    fullName: {type: String, maxLength: 255},
    age: {type: Number},
    address: {type: String, maxLength: 255},
    avatarUrl: {type: String, maxLength: 255},
})

module.exports = mongoose.model('User', User);