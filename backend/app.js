// import packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const { mongoURI } = require('./config/config')

// import routes
const newsRoutes = require('./routes/newsRoutes');
const UserRoutes = require('./routes/UserRoutes');
const queriesRoutes = require('./routes/QueriesRoutes');


// db
mongoose.connect(
    mongoURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    },
    (err) => err ? console.log('Error conntecting to DB: ', err) : console.log('DB Connected'))

// init app
const app = express();

// middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/user', UserRoutes)
app.use('/api', newsRoutes);
app.use('/api/query', queriesRoutes);

// add news routes

app.get('/', (req, res) => {
    res.send("Update24x7 Backend is working...")
})



// export

module.exports = app;