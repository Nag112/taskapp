const fs = require('fs')
function getNotes() {
  return "Your notes.....";
}
function saveNotes() {
  return "notes saved";
}
function readNote(){
    debugger
    return fs.readFileSync('./notes.txt').toString()     
}
module.exports = {getNotes,readNote};
