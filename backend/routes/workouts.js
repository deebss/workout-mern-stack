const express = require('express');
const Workout = require('../models/workoutModel');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ msg: 'GET all workouts' });
});

router.get('/:id', (req, res) => {
    res.json({ msg: 'GET a single workout' });
});

router.post('/', async (req, res) => {
    const { title, load, reps } = req.body;

    try {
        const workout = await Workout.create({ title, load, reps });
        res.status(200).json(workout);
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: e.message });
    }
});

router.delete('/:id', (req, res) => {
    res.json({ msg: 'DELETE a single workout' })
})

router.patch('/:id', (req, res) => {
    res.json({ msg: 'PATCH a single workout' });
});

module.exports = router;