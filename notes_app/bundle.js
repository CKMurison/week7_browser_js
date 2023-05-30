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

  // index.js
  console.log("The notes app is running");
  var notesModel = require_notesModel();
  var model = new notesModel();
  model.addNote("Help I need some fish!");
  console.log(model.getNotes());
})();
