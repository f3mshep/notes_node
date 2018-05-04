console.log('starting notes.js')

module.exports.addNote = () => {
  console.log("Add note ran");
  return 'New Note';
};

module.exports.add = (a, b) => (
  a + b
)