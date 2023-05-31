class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
    this.buttonElRemover = document.querySelector('#hide-message-button');

    this.buttonElRemover.addEventListener('click', () => {
      this.hideMessage();
    });
  }

  displayMessage() {
    const messageElement = document.querySelector('#message-input').value; 

    const newElement = document.createElement('div');
    newElement.id = 'message';
    newElement.innerText = messageElement;

    document.querySelector('#message-input').value = ''

    document.querySelector('#main-container').append(newElement);
  }
  
  hideMessage() {
    const newElement = document.querySelector('div#message');
    newElement.remove();
  };
};

module.exports = MessageView;