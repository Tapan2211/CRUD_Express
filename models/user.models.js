const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true},
    lastname: { type: String, required: true},
    email:{
        type: String,
        required: true,
        maxLength: 50,
        validate: (value)=> validator.isEmail(value)
    },
    age: { type : Number, required: true},
    address: { type: String, required: true},
    image:{type:String},
    publishAt: { type: Date, default: Date.now }
}, {
    timestamps: true
})

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;