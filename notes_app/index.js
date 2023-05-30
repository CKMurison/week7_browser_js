console.log('The notes app is running')

const notesModel = require('./notesModel');
const model = new notesModel();
model.addNote("Help I need some fish!")
console.log(model.getNotes());