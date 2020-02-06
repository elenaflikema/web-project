require('dotenv').config();

const express = require('express');
//const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

const  mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true});

mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));


app.use(express.json());

const subscribersRouter = require('./routes/subscribers');
app.use('/subscribers', subscribersRouter)

const authRouter = require('./routes/auth');
app.use('/auth', authRouter)

app.listen(port, () => console.log(`Listening on port ${port}`));

