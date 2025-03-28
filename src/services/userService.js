const User = require('../models/user');
const tokenGenerator = require('../utils/tokenGenerator');

const registerUser = async (userData, res) => {
    try {
        const user = await User.create({
            name: userData.name,
            email: userData.email,
            password: userData.password
        })

        let accessToken = tokenGenerator.generateAccessToken(user._id, user.name);
        let refreshToken = tokenGenerator.generateRefreshToken(user._id, user.name);

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return newUser = {
            name: user.name,
            email: user.email,
            accessToken
        }
    } catch (error) {
        throw new Error('Error on registering user : ', error);
    }
}

const loginUser = async (email, password, res) => {
    try {
        const user = await User.findOne({ email });
        if(user && (await user.matchPassword(password))) {
            let accessToken = tokenGenerator.generateAccessToken(user._id, user.name);
            let refreshToken = tokenGenerator.generateRefreshToken(user._id, user.name);

            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'Strict',
                maxAge: 7 * 24 * 60 * 60 * 1000
            });

            return userLoggedIn = {
                id: user._id,
                name: user.name,
                accessToken
            }
        } else { return null };
    } catch (error) {
        throw new Error('Error on trying to log user : ', error);
    }
}

module.exports = { registerUser, loginUser};