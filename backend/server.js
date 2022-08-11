require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
app.use('/api/workouts', workoutRoutes);

// Connect to the DB
mongoose.connect(process.env.DB_URI)
.then(() => {
    const port = process.env.PORT
    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    });
})
.catch((e) => {
    console.log(e)
});
