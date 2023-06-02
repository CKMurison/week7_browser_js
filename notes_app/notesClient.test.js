const notesClient = require('./notesClient');

require('jest-fetch-mock').enableMocks()

describe('notesClient', () => {
  it('calls a fetch and loads the notes', (done) => {
  const client = new notesClient();
  fetch.mockResponseOnce(JSON.stringify({
    name: 'notes',
    description: 'Notes from the notes app'
    }));

    client.loadNotes('notes', (getNotes) => {
      expect(loadNotes.description).toBe('Notes from the notes app')

      done();
    });
  });
});
