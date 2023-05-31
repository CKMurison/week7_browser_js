class notesView {
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