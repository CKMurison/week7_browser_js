const notesModel = require('./notesModel')

describe('notes model', () => {
  it('should return an empty array', () => {
  const notes = new notesModel
  expect(notes.getNotes()).toEqual([])
  });
  it('should add a new item to the list', () => {
    const notes = new notesModel
    notes.addNote('Get Crayons')
    expect(notes.getNotes()).toEqual(['Get Crayons'])
  });
  it('should reset the list of notes', () => {
    const notes = new notesModel
    notes.addNote('Get Crayons')
    notes.reset()
    expect(notes.getNotes()).toEqual([])
  });
});