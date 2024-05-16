const authService = require('../services/authService');

const login = async (req, res, next) => {
    const { email, password }  = req.body;
    try {
        const token = await authService.login(email, password);
        return res.json(token);
    } catch (error) {
        return res.status(400).json({ message : error });
    }
}

module.exports = {
    login
}