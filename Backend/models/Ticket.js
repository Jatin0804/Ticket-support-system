const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String, 
        required: true,
    },
    status: {
        type: String, 
        default: 'Open',
    },
    resolutionComment: {
        type: String,
    },
});

module.exports = mongoose.model('Ticket', TicketSchema);