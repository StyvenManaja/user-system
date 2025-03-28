const jwt = require('jsonwebtoken');

const generateAccessToken = (_id, name) => {
    return jwt.sign({ _id, name }, process.env.ACCESS_TOKEN_KEY, { expiresIn: '25s' });
}

const generateRefreshToken = (_id, name) => {
    return jwt.sign({ _id, name }, process.env.REFRESH_TOKEN_KEY, { expiresIn: '1d' });
}

module.exports = { generateAccessToken, generateRefreshToken };