console.log('starting notes.js')

let addNote = (title, body) => {
  console.log('Adding note\n', title, body);
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