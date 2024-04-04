require('dotenv').config({pat: '.env'});

// Constants
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./router/routes');

// Database Methods
mongoose.connect(process.env.DBKEY, {useUnifiedTopology: true});
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', () => {
  console.log('Connected to database');
});

// Server configuration
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

// Server start
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});