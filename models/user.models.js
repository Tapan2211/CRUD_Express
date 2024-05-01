const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true},
    lastname: { type: String, required: true},
    age: { type : Number, required: true},
    address: { type: String, required: true},
    publishAt: { type: Date, default: "" }
}, {
    timestamps: true
})

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;