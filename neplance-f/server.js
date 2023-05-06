const { json } = require("express");

const app = require("express")();

app.use(json());

const http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", function (socket) {
  console.log("a user connected");
  socket.on("disconnect", function () {
    console.log("user disconnected");
  });
  socket.on("chat-room", function (room) {
    socket.join(room);
    console.log("joined room", room);
  });
  socket.on("chat-leave", function (room) {
    socket.leave(room);
    console.log("left room", room);
  });
  socket.on("chat-message", async function (msg, room, callback) {
    console.log("room: " + room);
    console.log("message: " + JSON.stringify(msg));
    io.to(room).emit("receive-message", msg, room);
    callback(msg);
  });
});

http.listen(3001, function () {
  console.log("listening on *:300");
});
