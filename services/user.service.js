const UserModel = require('../models/user.models');

const createUserDoc = async (userBody) => {
    const userDoc = new UserModel(userBody);
    const result = await userDoc.save();
    return result;
}

const findAllUser = async () => {
    const users = await UserModel.find({}).sort({ createdAt: -1 });
    return users;
}

const userUpdateById = async (id, updateData) => {
    const result = await UserModel.findOneAndUpdate({
        _id: id
    }, updateData, { new: true });
    return result;
}

const userDeleteById = async (id) => {
    const result = await UserModel.findOneAndDelete({ _id: id });
    return result;
}

module.exports = {
    createUserDoc,
    findAllUser,
    userUpdateById,
    userDeleteById
}