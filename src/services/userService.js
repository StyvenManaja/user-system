const User = require('../models/user');
const tokenGenerator = require('../utils/tokenGenerator');
const userRepository = require('../repositories/userRepository');

const registerUser = async (name, email, password) => {
    let user = await userRepository.registerUser(name, email, password);

    let accessToken = tokenGenerator.generateAccessToken(user._id, user.name);
    let refreshToken = tokenGenerator.generateRefreshToken(user._id, user.name);

    return {
        name: user.name,
        email: user.email,
        accessToken,
        refreshToken
    }
}

const loginUser = async (email, password) => {
    const user = await userRepository.findUser(email);
    if(user && (await user.matchPassword(password))) {
        let accessToken = tokenGenerator.generateAccessToken(user._id, user.name);
        let refreshToken = tokenGenerator.generateRefreshToken(user._id, user.name);

        return {
            id: user._id,
            name: user.name,
            accessToken,
            refreshToken
        }
    } else {
        return null;
    }
}

module.exports = { registerUser, loginUser};