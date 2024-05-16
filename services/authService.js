const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const loginModel = require('../models/login.models');

const generateToken = async (user) => {
    const token = jwt.sign({userID: user._id}, process.env.JWT_SECRET, { expiresIn : '5m'});
    console.log("CREATED_TOKEN", token);
    return token;
}       

const login = async (email, password) => {
    const user = await loginModel.findOne({ email });
    if(!user){
        throw new Error('Invalid username or password');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
        throw new Error('Invalid username or password');
    }

    const token = await generateToken(user);
    return token;
}

module.exports = {
    login
}