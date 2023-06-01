(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var notesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(text) {
          this.notes.push(text);
        }
        reset() {
          this.notes = [];
        }
      };
      module.exports = notesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var notesModel2 = require_notesModel();
      var notesView2 = class {
        constructor(model2) {
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
          document.querySelector("#add-note-btn").addEventListener("click", () => {
            const newNote = document.querySelector("#add-note-input").value;
            this.addNewNote(newNote);
          });
        }
        addNewNote(newNote) {
          this.model.addNote(newNote);
          this.displayNotes();
        }
        displayItems(noteItems) {
          noteItems.forEach((noteItem) => {
            const newElement = document.createElement("div");
            newElement.className = "notes-item";
            newElement.innerText = noteItem;
            document.querySelector("#main-container").append(newElement);
          });
        }
      };
      module.exports = notesView2;
    }
  });

  // index.js
  console.log("The notes app is running");
  var notesView = require_notesView();
  var notesModel = require_notesModel();
  var model = new notesModel();
  model.addNote("This is a test note");
  console.log(model.getNotes());
  var view = new notesView();
  view.displayItems(["This item should be displayed", "This one too"]);
})();
