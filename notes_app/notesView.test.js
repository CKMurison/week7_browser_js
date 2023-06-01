/**
 * @jest-environment jsdom
 */

const notesView = require('./notesView');
const notesModel = require('./notesModel');
const fs = require('fs');

describe('notesModel view', () => {
  it('Should display one item on the page', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const note = new notesView();
    note.displayItems(['This is a test Note item!']);
    const notesItemElement = document.querySelectorAll('div.notes-item');
    expect(notesItemElement.length).toBe(1);
    expect(notesItemElement[0].innerText).toBe('This is a test Note item!');
  });
  it('adds a new note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model);
      // 1. Fill the input
    const input = document.querySelector('#add-note-input');
    input.value = 'My new amazing test note';

    // 2. Click the button
    const button = document.querySelector('#add-note-btn');
    button.click();

    // 3. The note should be on the page
    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('My new amazing test note');
  });
});