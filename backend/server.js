// import packages
const http = require('http');
const app = require('./app');

// init app
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);


// listen
server.listen(PORT, (err) => {
    if (!err) {
        console.log('Server Started : ' + PORT)
    } else {
        console.log('Error in server: ', err)
    }
})

