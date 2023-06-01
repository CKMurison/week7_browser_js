class notesView {
   constructor(model) {
      this.model = model;
      this.mainContainerEl = document.querySelector('#main-container');
  
      document.querySelector('#add-note-btn').addEventListener('click', () => {
        const newNote = document.querySelector('#add-note-input').value;
        this.addNewNote(newNote);
      });
    }
  
    addNewNote(newNote) {
      this.model.addNote(newNote);
      this.displayNotes();
    }

   displayItems(noteItems) {
    noteItems.forEach((noteItem) => {
     const newElement = document.createElement('div');
     newElement.className = 'notes-item';
     newElement.innerText = noteItem

     document.querySelector('#main-container').append(newElement);
    });
   };
};

module.exports = notesView;