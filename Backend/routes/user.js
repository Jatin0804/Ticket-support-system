const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require("../models/User");

const router = express.Router();

router.post('/register', async(req, res) => {
    const { username, email, password } = req.body;
    try{
        const newUser = new User({
            username, 
            email, 
            password,
        });
        await newUser.save();
        res.status(201).json({
            message: "User registered Successfully."
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

router.post('/login', async(req, res) => {
    const { email, password } = req.body;
    try{
        const user = await User.findOne({ email });
        if (!user)
            return res.json(404).json({
                error: "User Not found."
        });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status.json({
                error: "Invalid Credentials."
        });

        const token = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        }, process.env.JWT_SECRET);

        res.json({
            token, 
            user: {
                id: user._id,
                username: user.username,
                isAdmin: user.isAdmin,
            }
        });
    } catch (err) {
        res.status(500).json({
            error: error.message
        });
    }
});

module.exports = router;