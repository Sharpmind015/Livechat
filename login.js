// UI vars
const loginForm = document.getElementById("login-form");
const loginInput = document.getElementById("login-input");

//helper function to compose element
const dCreateElement = (
  element,
  className,
  textContent,
  parentElement,
  attribute,
  attributeValue
) => {
  const el = document.createElement(element);
  if (className) el.classList.add(className);
  if (textContent) el.textContent = textContent;
  if (parentElement) parentElement.appendChild(el);
  if (attribute) el.setAttribute(attribute, attributeValue);
  return el;
};

// Username variable
let user;
//login form submit
loginForm.addEventListener("submit", e => {
  e.preventDefault();
  user = loginInput.value;
  //writes the chat UI to the page
  document.body.innerHTML = `<div class="main-container">
    <header class="header">
      <h2><span class="heading">ZuriChat</span><span class="dot">.</span></h2>
      <a href="#down" class="code">
        <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true">
          <path fill-rule="evenodd" fill="#9c27b0" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
      </a>
    </header>
    <section id="message-container" class="message-container">
      <p class="welcome-message">Send a mesage😀</p>
      <div class="messages" id="messages">
      </div>
    </section>
    <form id="send-container" class="message-form">
      <div class="input-container">
        <textarea placeholder="Start a message" name="" id="message-input" cols="0" rows="0" class="message-input"></textarea>
      </div>
      <button disabled="true" type="submit" id="send-button" class="send-btn"><svg fill="#9c27b0" viewBox="0 0 24 24" class="r-13gxpu9 r-4qtqp9 r-yyyyoo r-1q142lx r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"><g><path d="M21.13 11.358L3.614 2.108c-.29-.152-.64-.102-.873.126-.23.226-.293.577-.15.868l4.362 8.92-4.362 8.92c-.143.292-.08.643.15.868.145.14.333.212.523.212.12 0 .24-.028.35-.087l17.517-9.25c.245-.13.4-.386.4-.664s-.155-.532-.4-.662zM4.948 4.51l12.804 6.762H8.255l-3.307-6.76zm3.307 8.26h9.498L4.948 19.535l3.307-6.763z"></path></g></svg></button>
    </form>
    <section id="down"></section>
  </div>`;
  //composes a script tag
  const script = dCreateElement(
    "script",
    null,
    null,
    document.head,
    "src",
    "script.js"
  );
  script.defer = true;
});
