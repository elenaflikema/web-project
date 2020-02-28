const express = require('express');
const router = express.Router();
const User = require('../models/user');


const Joi = require('@hapi/joi');

const validationSchema = {
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
};


router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    try {
        const newUser = await user.save();
        res.status(201).json({user: newUser});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router;