// import packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// import routes
const newsRoutes = require('./routes/newsRoutes');

// db
mongoose.connect(
    'mongodb://localhost:27017/NodeProject',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    },
    (err) => err ? console.log('Error conntecting to DB: ', err) : console.log('DB Connected'))



// init app
const app = express();
const PORT = process.env.PORT || 3000;


// middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/news', newsRoutes);
//app.use('/users', usersRoutes);




// export

module.exports = app;