class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
  }

  displayMessage() {
    const newElement = document.createElement('div');
    newElement.id = 'message';
    newElement.innerText = 'This message is displayed by Javascript';
    document.querySelector('#main-container').append(newElement);
  }
}

module.exports = MessageView;