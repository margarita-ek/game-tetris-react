const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
require("dotenv").config();

const generateAccessToken = (id) => {
    const payload = {id}
    return jwt.sign(payload, process.env.JWTSecret, {expiresIn: "24h"} )
}

class authController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: "Registration error", errors })
            }       
            const { username, email, password } = req.body;
            const candidate = await User.findOne({ email })
            if (candidate) {
                return res.status(400).json({message: "User with this e-mail already exists"})
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const user = new User({ username, email, password: hashPassword })
            await user.save();
            return res.status(200).json({ message: "User successfully registered", status: 200 })
        } catch (e) {
            console.log(e)
            res.status(400).json({ message: 'Registration error' })
        }
    }
    
    async login(req, res) { 
        try {
            const { username, email, password } = req.body
            const user = await User.findOne({ email })
            if (!user) { 
                return res.status(400).json({ message: "E-mail not found" })
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) { 
                return res.status(400).json({ message: "Wrong data" })
            }
            const token = generateAccessToken(user._id)
            const userEmail = user.email
            const userId = user._id
            const userName = user.username
            return res.status(200).json({ token, userEmail, userId, userName })
        } catch (e) { 
            console.log(e)
            res.status(400).json({ message: "Login error" })
        }
    }
}

module.exports = new authController()