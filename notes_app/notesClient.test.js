const notesClient = require('./notesClient');

require('jest-fetch-mock').enableMocks()

describe('notesClient', () => {
  it('calls a fetch and loads the notes', (done) => {
  const client = new notesClient();
  fetch.mockResponseOnce(JSON.stringify({
    notes: ['note']
    }));

    client.loadNotes((returnedData) => {
      expect(returnedData.notes).toEqual(['note']);
  
      done();
    });
  });
});