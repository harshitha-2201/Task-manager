const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const taskRoutes =  require('./routes/taskRoutes')
const cors = require('cors');


// Load environment variables from .env file
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGOURL)
.then(() => {
    console.log('Mongoose connected successfully');
})
.catch((err) => { 
    console.error('Error connecting to MongoDB:', err);
});

app.use('/api', authRoutes);
app.use('/api', taskRoutes);



const PORT = process.env.PORT || 3000; // Default to 3000 if PORT is not found in .env
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
