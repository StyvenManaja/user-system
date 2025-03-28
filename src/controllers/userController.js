const userService = require('../services/userService');

const registerUser = async (req, res) => {
    try {
        let userData = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        let user = await userService.registerUser(userData, res);
        if(!user) { return res.status(400).json({ message: 'Error on registering user.' }) };
        res.json({ user: user });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
        throw new Error('Server error : ', error);
    }
}

const loginUser = async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await userService.loginUser(email, password, res);
        if(!user) { return res.status(400).json({ message: 'Invalid credentials.' }) };
        res.json({ user: user });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
        throw new Error('Server error : ', error);
    }
}

module.exports = { registerUser, loginUser };