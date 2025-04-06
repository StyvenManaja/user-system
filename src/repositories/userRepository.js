const User = require('../models/user');

const registerUser = async (name, email, password) => {
    try {
        const user = await User.create({
            name: name,
            email: email,
            password: password
        })
        return user;
    } catch (error) {
        throw new Error('An error occured when registering the user : ', error);
    }
}

const findUser = async (email,) => {
    try {
        return await User.findOne({email});
    } catch (error) {
        throw new Error('An error occured on finding user : ', error);
    }
}

module.exports = { registerUser, findUser };