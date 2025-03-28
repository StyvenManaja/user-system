const jwt = require('jsonwebtoken');

const authentication = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) { return res.status(401).json({ message: 'Token not found' }) };
    jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (error, decoded) => {
        if(error) { return res.status(403).json({ message: 'Expires or invalid token.' }) };
        req._id = decoded._id;
        req.name = decoded.name;
        next();
    })
}

module.exports = authentication;