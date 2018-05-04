console.log('Starting app.js');

const fs = require('fs');
const notes = require('./notes.js');
const os = require('os');
const _ = require('lodash');
let user = os.userInfo();

let res = notes.addNote();

let adder = notes.add;
console.log(adder(3,5));


// fs.appendFile("greetings.txt", `Hello, ${user.username}! You are ${notes.age}.`, err => {
//   if (err) {
//     console.log("unable to write to file!");
//   }
// });

