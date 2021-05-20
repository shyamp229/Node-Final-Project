// import packages
const http = require('http');
const app = require('./app');
const express = require('express');
const chatApp = express();

// init app
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

const CHAT_PORT = process.env.CHAT_PORT || 3050;
const chatServer = http.createServer(chatApp)
let io = require("socket.io")(server);

// listen
server.listen(PORT, (err) => {
    if (!err) {
        console.log('Server Started : ' + PORT)
    } else {
        console.log('Error in server: ', err)
    }
})


io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("message", (msg) => {
        //console.log(msg);
        socket.broadcast.emit("message-broadcast", msg);
    });
});

chatServer.listen(CHAT_PORT, () => {
    console.log("Chat Server is listening on port: " + CHAT_PORT);
})