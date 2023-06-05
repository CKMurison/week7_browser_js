/**
 * @jest-environment jsdom
 */

const notesView = require('./notesView');
const notesModel = require('./notesModel');
const notesClient = require('./notesClient')
const fs = require('fs');

describe('notesModel view', () => {
  it('Should display one item on the page', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    
    const modelDouble = {notes: ['This is a test Note item!'], getNotes : () => {return modelDouble.notes}}

    const note = new notesView(modelDouble);

    note.displayNotes(['This is a test Note item!']);
    const notesItemElement = document.querySelectorAll('div.notes-item');
    
    expect(notesItemElement.length).toBe(1);
    expect(notesItemElement[0].innerText).toBe('This is a test Note item!');
  });
  it('adds a new note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    
    const model = new notesModel();
    const view = new notesView(model);
      // 1. Fill the input
    const input = document.querySelector('#add-note-input');
    input.value = 'My new amazing test note';

    // 2. Click the button
    const button = document.querySelector('#add-note-btn');
    button.click();

    // 3. The note should be on the page
    expect(document.querySelectorAll('div.notes-item').length).toEqual(1);
    expect(document.querySelectorAll('div.notes-item')[0].innerText).toEqual('My new amazing test note');
  });
  it('Clears the list of previous notes before adding another', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new notesModel();
    const view = new notesView(model);
    
    model.addNote('Hi');
    model.addNote('Hey!');
        
    view.displayNotes();
    view.clearNotes();
    view.displayNotes();
    
    expect(document.querySelectorAll('div.notes-item').length).toEqual(2);
  });
   it('displayes the note from the API', () => {
    const model = new notesModel();
    const client = new notesClient();
    const notes = new notesView(model, client);

    client.loadNotes((callback) => {
      callback(['note 1'])
    });
    
    notes.displayNotesFromApi()
    expect(document.querySelectorAll('div.note').length).toEqual(1)
  });
});