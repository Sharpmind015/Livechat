// UI vars
const messageInput = document.getElementById("message-input");
const messageForm = document.getElementById("send-container");
const sendButton = document.getElementById("send-button");
const messages = document.getElementById("messages");

//connects to socket.io
const socket = io("http://localhost:3000", {
  transports: ["websocket", "polling", "flashsocket"]
});

//listens to any chat-message event emitted
socket.on("chat-message", data => {
  // composes UI for received chats
  const message = dCreateElement("p", "received-chat", null, messages);
  dCreateElement("span", "sender", data.name, message);
  dCreateElement("span", "chat", data.message, message);
  //scrolls down to the latest chat
  window.location.href = "#down";
});

//listens to typing in message input
messageInput.addEventListener("input", e => {
  //checks if input value is empty, disables the send button if empty
  if (/\S/g.test(messageInput.value)) {
    sendButton.removeAttribute("disabled");
  } else {
    sendButton.setAttribute("disabled", true);
  }
});

// form submit
messageForm.addEventListener("submit", e => {
  e.preventDefault();
  const message = messageInput.value;
  // composes sent messages UI
  const messageContainer = dCreateElement("p", "sent-chat", null, messages);
  dCreateElement("span", "chat", message, messageContainer);
  // emits the message to the server
  socket.emit("send-chat-message", {
    message: message,
    name: user[0].toLocaleUpperCase()
  });
  //makes input value empty
  messageInput.value = "";
  //scrolls down to the latest chat
  window.location.href = "#down";
});
