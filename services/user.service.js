const UserModel = require('../models/user.models');

const createUserDoc = async (userBody) => {
    const userDoc = new UserModel(userBody);
    const result = await userDoc.save();
    return result;
}

const findAllUser = async () => {
    
    // const users = await UserModel.find({}).sort({ createdAt: -1 });
    // const usersWithImageUrl = users.map(user => {
    //     // const imageUrl = `${process.env.BASE_URL}/uploads/${user.image}`;
    //     const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.body.image}`;
    //     // console.log("NEW_URL",imageUrl)
    //     return { ...user.toObject(), imageUrl };
    // });
    // return usersWithImageUrl;

    try {
        const users = await UserModel.find({}).sort({ createdAt: -1 });
        const usersWithImageUrl = users.map(user => {
            const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${user.image}`;
            return { ...user.toObject(), imageUrl };
        });

        return usersWithImageUrl;
    } catch (error) {
        throw error;
    }
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