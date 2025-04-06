const userService = require('../services/userService');

const registerUser = async (req, res) => {
    try {
        let { name, email, password } = req.body;
        let user = await userService.registerUser(name, email, password);

        if(!user) { return res.status(400).json({ message: 'Error on registering user.' }) };

        res.cookie('refreshToken', user.refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        res.json({
            user: {
                username: user.name,
                email: user.email,

        },
            token: user.accessToken
        });
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const loginUser = async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await userService.loginUser(email, password);
        if(!user) { return res.status(400).json({ message: 'Invalid credentials.' }) };

        res.cookie('refreshToken', user.refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        res.json({
            user: {
                username: user.name,
                email: user.email,

        },
            token: user.accessToken
        });
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { registerUser, loginUser };