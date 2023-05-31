(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // messageView.js
  var require_messageView = __commonJS({
    "messageView.js"(exports, module) {
      var MessageView2 = class {
        constructor() {
          this.buttonEl = document.querySelector("#show-message-button");
          this.buttonEl.addEventListener("click", () => {
            this.displayMessage();
          });
          this.buttonElRemover = document.querySelector("#hide-message-button");
          this.buttonElRemover.addEventListener("click", () => {
            this.hideMessage();
          });
        }
        displayMessage() {
          const newElement = document.createElement("div");
          newElement.id = "message";
          newElement.innerText = "This message is displayed by Javascript";
          document.querySelector("#main-container").append(newElement);
        }
        hideMessage() {
          const newElement = document.querySelector("div#message");
          newElement.remove();
        }
      };
      module.exports = MessageView2;
    }
  });

  // index.js
  var MessageView = require_messageView();
  var view = new MessageView();
})();
