const express = require('express');
const Ticket = require("../models/Ticket");
const User = require('../models/User');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

const router = express.Router();

router.get('/tickets', [auth, admin], async (req, res) => {
    try{
        const tickets = await Ticket.find().populate('userId', 'username email');
        res.json(tickets);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

router.put('/resolve/:id', [auth, admin], async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id);
        if(!ticket){
            return res.status(404).json({
                msg: "Ticket not found"
            });
        }

        ticket.status = 'Resolved';
        ticket.resolutionComment = req.body.resolutionComment;
        await ticket.save();

        res.json({
            msg: "Ticket resolved successfully."
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

router.get('/users', [auth, admin], async (req, res) => {
    try{
        const users = await User.find().select('-passsowrd');
        res.json(users);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

module.exports = router;