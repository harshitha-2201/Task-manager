const User = require('../models/auth');
const jwt = require('jsonwebtoken');



//register api
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('Email is already registered');
        }

        // Create and save a new user
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).send('User registered successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error registering a new user');
    }
};


//Login api
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).send('Invalid email or password');
        }

        // Check if the password is correct
        if (user.password !== password) {
            return res.status(401).send('Invalid email or password');
        }

        // Generate a JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error logging in user');
    }
};




module.exports = {
    registerUser,
    loginUser,
    
};
