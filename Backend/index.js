// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const mainRouter = require("./routes/index");

// dotenv.config();
// const app = express();
// app.use(express.json());

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })  .then(() => console.log("MongoDB connected."))
//     .catch(err => console.log(err));

// app.use("/api", mainRouter);

// app.listen(5000, () => {
//     console.log("Server running on port 5000");
// });

const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/tickets', require('./routes/tickets'));
app.use('/api/admin', require('./routes/admin'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});