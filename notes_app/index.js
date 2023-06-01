console.log('The notes app is running')

const notesView = require('./notesView')
const notesModel = require('./notesModel');
const model = new notesModel();

const view = new notesView(model);
view.displayNotes(['This item should be displayed', 'This one too'])

