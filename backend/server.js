require('dotenv').config();
const express = require('express');
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

const port = process.env.PORT
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});