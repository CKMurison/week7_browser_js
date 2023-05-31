/**
 * @jest-environment jsdom
 */

const notesView = require('./notesView');
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
});