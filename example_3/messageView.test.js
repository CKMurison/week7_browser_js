/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button and displays the users messagek', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    const inputEl = document.querySelector('#message-input')

    inputEl.value = 'This is a test message'

    buttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('#message').innerText).toEqual('This is a test message')
  });
  it('removes an element after the click for cleanings button is clicked', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();
    
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    const buttonElRemover = document.querySelector('#hide-message-button');
    buttonElRemover.click();
   
    expect(document.querySelector('#message')).toBeNull();
  });
});