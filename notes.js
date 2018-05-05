const fs = require("fs");

console.log("starting notes.js");

let notes

const fetchNotes = () => {
  try {
    let notesString = fs.readFileSync("notes-data.json");
    return JSON.parse(notesString);
  } catch (error) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

let addNote = (title, body) => {
  notes = fetchNotes();
  let note = {
    title,
    body
  }

  let duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

let getAll = () => {
  console.log('Getting all notes');
}

let readNote = (title) => {
  console.log(`Reading note ${title}`)

}

let removeNote = (title) => {
  console.log(`Removing note ${title}`)
  notes = fetchNotes();
  filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  let message = filteredNotes.length === notes.length ? "Error: no matching note found" : "Note successfully deleted"
  console.log(message)
}

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
};