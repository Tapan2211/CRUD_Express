const { json } = require('express');
const UserModel = require('../models/user.models');

const createNewUser = async (req, res) => {
    try {
        const newUserDoc = UserModel(req.body);
        const data = await newUserDoc.save();
        console.log('BlogList :- ', newUserDoc);
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getAllUser = async (req, res) =>{
    try {
        const data = await UserModel.find(({}));
        console.log('USERLIST', data);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Could not fetch user list' })
    }
}

const updateUserById = async (req, res) =>{
    try {
        const { id } = req.params;
        const result = await UserModel.findOneAndUpdate({
            _id:id
        }, req.body, { new: true})
        res.json(result);
    } catch (error) {
        return res.json(error);
    }
}

const deleteUserById = async (req, res) => {
    try {
        const documentUserId = req.params.id;
        const result = await UserModel.findOneAndDelete({ _id: documentUserId });
        res.json(result);
    } catch (error) {
        return res.json(error)
    }
}
 
module.exports = {
    createNewUser,
    getAllUser,
    updateUserById,
    deleteUserById
}