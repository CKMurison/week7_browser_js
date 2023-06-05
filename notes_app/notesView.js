class notesView {
   constructor(model, client) {
      this.model = model;
      this.client = client;
      this.mainContainerEl = document.querySelector('#main-container');
  
      document.querySelector('#add-note-btn').addEventListener('click', () => {
        const newNote = document.querySelector('#add-note-input').value;
        this.addNewNote(newNote);
      });
    }
  
   addNewNote(newNote) {
      if(document.querySelector('.notes-item')) {
      this.clearNotes(); 
      } document.querySelector('#add-note-input').value = ''
      this.model.addNote(newNote);
      this.displayNotes();
    }

   displayNotes() {

      this.model.getNotes().forEach((noteItem) => {
      const newElement = document.createElement('div');
      newElement.className = 'notes-item';
      newElement.innerText = noteItem

      document.querySelector('#main-container').append(newElement);
    });
   };

   clearNotes() {
      document.querySelectorAll('.notes-item').forEach(element => {
        element.remove();
      });
    }

    displayNotesFromApi() {
      this.client.loadNotes((data) => {
      this.model.notes = data
      this.displayNotes();
      });
    }
};

module.exports = notesView;