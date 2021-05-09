const io = require("socket.io")(3000, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true
  }
});
io.on("connection", socket => {
  socket.on("send-chat-message", message => {
    socket.broadcast.emit("chat-message", message);
  });
});
