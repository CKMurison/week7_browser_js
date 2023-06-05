console.log('The notes app is running')

const notesView = require('./notesView')
const notesModel = require('./notesModel');
const notesClient = require('./notesClient')

const client = new notesClient();
const model = new notesModel();

const view = new notesView(model, client);
view.displayNotes(['This item should be displayed', 'This one too'])

console.log(view.displayNotesFromApi());

