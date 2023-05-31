console.log('The notes app is running')

const notesView = require('./notesView')
const notesModel = require('./notesModel');
const model = new notesModel();

model.addNote("This is a test note")
console.log(model.getNotes());

const view = new notesView();
view.displayItems(['This item should be displayed', 'This one too'])