const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, email, password , isAdmin } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user){
        return res.status(400).json({
            msg: "User already exists."
        });
    }

    let newUser = {}
    if (isAdmin){
      newUser = await User.create({ username, email, password , isAdmin });
    }
    else{
      newUser = await User.create({ username, email, password });
    }

    // const newUser = new User({
    //   username,
    //   email,
    //   password,
    // });
    // await newUser.save();

    const token = jwt.sign({
        id: newUser._id,
        isAdmin: newUser.isAdmin,
    }, process.env.JWT_SECRET);

    // res.status(201).json({
    //   message: "User registered Successfully.",
    // });

    res.status(201).json({
        token
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.json(404).json({
        error: "User Not found.",
      });

    const isMatch = await user.matchPassword(password);
    if (!isMatch)
      return res.status.json({
        error: "Invalid Credentials.",
      });

    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET
    );

    // res.json({
    //   token,
    //   user: {
    //     id: user._id,
    //     username: user.username,
    //     isAdmin: user.isAdmin,
    //   },
    // });

    res.json({
        token
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

router.put('/profile', auth, async (req, res) => {
    const { username, email } = req.body;
    try{
        let user = await User.findById(req.user.id);
        if(!user){
            return res.status(404).json({
                msg: "User not found"
            });
        }

        user.username = username || user.username;
        user.email = email || user.email;
        await user.save();

        res.json({
            msg: "Profile Updated Successfully."
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

module.exports = router;
