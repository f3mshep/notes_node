const fs = require("fs");

console.log("starting notes.js");

let addNote = (title, body) => {
  console.log('Adding note\n', title, body);
  let notes;
  let note = {
    title,
    body
  }
  try {
    let notesString = fs.readFileSync("notes-data.json");
    notes = JSON.parse(notesString);
  } catch (error) {

  }

  let duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0){
    notes.push(note)
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
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
}

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
};