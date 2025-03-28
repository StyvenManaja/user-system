const jwt = require('jsonwebtoken');
const tokenGenerator = require('../utils/tokenGenerator');

const refreshToken = (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(refreshToken == null) { return res.json(401).json({ message: 'No token found' }) };
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY, (error, decoded) => {
            if(error) { return res.status(403).json({ message: 'Invalid or expired token' }) };
            const newToken = tokenGenerator.generateAccessToken(decoded._id, decoded.name);
            res.json({ newToken });
        })
    } catch (error) {
        throw new Error('Internal server error : ', error);
    }
}

const logout = (req, res) => {
    res.clearCookie('refreshToken', { httpOnly: true, secure: true, sameSite: 'Strict' });
    res.json({ message: 'User logged out successfully.' });
}

module.exports = { refreshToken, logout };