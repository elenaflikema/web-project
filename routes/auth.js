const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const { registerValidation, loginValidation } = require('../authValidation');


router.post('/register', async (req, res) => {

    const { error } = registerValidation(req.body);

    if (error) {
        res.status(400).send(error.details[0].message);
    }

    //checking if the user is already in the database

    const emailExist = await User.findOne({email: req.body.email});

    if (emailExist) {
        res.status(400).send('Email already exists');
    }

    //hash password
    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(req.body.password,salt);

    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        await user.save();
        res.status(201).json({user: user._id});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


router.post('/login', async (req, res) => {

    const { error } = loginValidation(req.body);

    if (error) {
        res.status(400).send(error.details[0].message);
    }

    //checking if the user is already in the database

    const user = await User.findOne({email: req.body.email});

    if (!user) {
        res.status(400).send("Email or password is wrong");
    }

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) {
        return res.status(400).send('Invalid password')
    }

    // create and assign token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
    res.send('Logged in')
});


module.exports = router;