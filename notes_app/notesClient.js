class notesClient {
  loadNotes(callback) {
    fetch('file:///Users/cameronmurison/week7_browser_js/notes_app/index.html')
    .then(response => response.json())
    .then(data => {
      callback(data)
    });
  }
}

module.exports = notesClient;