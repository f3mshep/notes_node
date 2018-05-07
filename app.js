console.log('Starting app.js');

const fs = require('fs');
const notes = require('./notes.js');

const _ = require('lodash');
const yargs = require('yargs');
const noteObject = {
    title:{
      describe: 'Title of Note',
      demand: true,
      alias: 't'
    },
    body: {
      describe: 'Body of note',
      demand: true,
      alias: 'b'
    }
  }

const argv = yargs
  .command("add", "Add a new Note", noteObject)
  .command("list", "List all notes")
  .command("read", "read a note", { title: noteObject.title })
  .command("remove", "remove a note by title", { title: noteObject.title })
  .help().argv;

let command = argv._[0];
let note

if (command === 'add'){
  note = notes.addNote(argv.title, argv.body);
  if (note){
    console.log("Note successfully added.")
  }
  else{
    console.log("Error: Duplicate note added.")
  }
}
else if (command === 'list'){
  notes.getAll()
}
else if (command === 'read'){
  notes.readNote(argv.title)
}
else if (command == 'remove'){
  notes.removeNote(argv.title)
}
else{
  console.log('U wot m8');
}
