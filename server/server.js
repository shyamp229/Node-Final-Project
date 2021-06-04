const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dbName = require("./config/config").mongoURI;


const users = require("./routes/users");

const news = require("./routes/news");

const queries = require("./routes/queries");



const app = express(); // server for rest api purpose.
const chatApp = express();
var http = require("http").createServer(chatApp);
let io = require("socket.io");
// we can apply the middleware


app.use(cors());
app.use(bodyParser.json());
// connect to mongodb

mongoose
  .connect(dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  })
  .then(() => console.log("Mongodb Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello from rest");
});

// use the routes
app.use("/api/users", users);
app.use("/api/news", news);
app.use("/api/queries", queries);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});


// Set up socket.io
io = require('socket.io')(http);

// Handle socket traffic
io.on('connection', (socket) => {

  socket.on('join', (data) => {

    socket.join(data.room);
    io.emit('new user joined', { user: data.user, message: 'has joined  room.' });
  });
  socket.on('leave', (data) => {
    io.emit('left room', {user:data.user, message:'has left room.'});
    socket.leave(data.room);
  });

 socket.on('message',(data) => {
    io.in(data.room).emit('new message', {user:data.user, message:data.message});
  })
});

http.listen(3050, () => {
  console.log("Chat listening on *:3050");
});
