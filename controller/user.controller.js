const { json } = require('express');
// const UserModel = require('../models/user.models');
const {
    createUserDoc,
    findAllUser,
    userUpdateById,
    userDeleteById
 } = require('../services/user.service');

//Old way without use service class method
// const createNewUser = async (req, res) => {
//     try {
//         const newUserDoc = UserModel(req.body);
//         const data = await newUserDoc.save();
//         return res.status(200).json({message: 'Successfully create new user', data});
//     } catch (error) {
//         return res.status(500).json(error);
//     }
// }

//New way create service class method 


const createNewUser = async (req, res) => {
    try {
        const data = await createUserDoc(req.body);
        const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.body.image}`;
        data.image = imageUrl; 
        console.log("imageUrl", imageUrl)
        console.log("CREATEUSER", data)
        return res.status(200).json({ message: 'Successfully create new user', data });
    } catch (error) {
        console.log("ERROR:-", error)
        return res.status(500).json(error);
    }

}

const getAllUser = async (req, res) => {

    try {
        const users = await findAllUser(req.baseUrl); // Pass base URL or complete image URL here
        const usersWithImageUrl = users.map(user => {
            const image = `${req.protocol}://${req.get('host')}/uploads/${user.image}`;
            return { ...user.toObject(), image};
        });
        return res.status(200).json(usersWithImageUrl);
    } catch (error) {
        return res.status(500).json({ message: 'Could not fetch user list', error });
    }
}

const updateUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await userUpdateById(id, req.body);
        return res.status(200).json({message : 'Successfully update', result});
    } catch (error) {
        return res.json(error);
    }
}

const deleteUserById = async (req, res) => {
    try {
        const documentUserId = req.params.id;
        // const result = await UserModel.findOneAndDelete({ _id: documentUserId });
        const result = await userDeleteById(documentUserId);
        return res.status(200).json({message : 'Successfully delete', result});
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