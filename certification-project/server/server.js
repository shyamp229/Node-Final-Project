const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dbName = require("./config/config").mongoURI;
console.log(dbName);
const router = express.Router();

const users = require("./routes/users");

const news = require("./routes/news");

const queries = require("./routes/queries");

console.log("hello from server");

const app = express(); // server for rest api purpose.
const chatApp = express();
var http = require("http").createServer(chatApp);
var io = require("socket.io")(http);
// we can apply the middleware
app.use(cors());
app.use(bodyParser.json());
// connect to mongodb

mongoose
  .connect(dbName)
  .then(() => console.log("Mongodb Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello from rest");
});

// use the routes

app.use("/api/users", users);

console.log("hello");
app.use("/api/news", news);

app.use("/api/queries", queries);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

//app.get('/', (req, res) => res.send('hello!'))
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("message", (msg) => {
    //console.log(msg);
    socket.broadcast.emit("message-broadcast", msg);
  });
});

http.listen(3050, () => {
  console.log("Chat listening on *:3050");
});
