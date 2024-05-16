const { required } = require('joi');
const mongoose = require('mongoose');
const validator = require('validator');

const loginSchema = new mongoose.Schema({
    email:{
        type: String, 
        required:true,
        maxLength: 50,
        validate: (value)=> validator.isEmail(value)
    },
    password:{
        type: String, 
        required: true
    }
});

module.exports = mongoose.model('User1', loginSchema);