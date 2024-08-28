const express = require('express');
const Ticket = require("../models/Ticket");
const auth = require("../middleware/auth");

const router = express.Router();

router.post('/submit', auth, async (req, res) => {
    const { title, description, category } = req.body;
    try{
        const newTicket = new Ticket({
            userId: req.user.id,
            title,
            description,
            category,
        });
        await newTicket.save();
        res.status(201).json(newTicket);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

router.get('/my-tickets', auth, async (req, res) => {
    try{
        const tickets = await Ticket.find({
            userId: req.user.id
        });
        res.json(tickets);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

module.exports = router;