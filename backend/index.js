require('dotenv').config(); // Load environment variables from .env file into 'express'

const express = require('express'); // Import Express.js
const mongoose = require('mongoose'); // Import Mongoose for MongoDB interaction

const PORT = process.env.PORT || 3003; // Define the port to run the server on
const uri = process.env.MONGO_URL; // MongoDB connection string from environment variables

const app = express(); // Create an Express application
mongoose.connect(uri,{}) // Connect to MongoDB

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3003');
});