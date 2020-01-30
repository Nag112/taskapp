const chalk = require("chalk");
const yargs = require("yargs");
const notes = require('./notes')
//console.log(chalk.bold.green("Success!"));
yargs.command({
  command: 'remove',

  describe: "remove a note",
  builder: {
    title: {
      describe:'note title',
      demandOption:true,
      type:'string'
    }
  },
  handler: function(e) {
    console.log("arguments",e.$0);
  }
});
yargs.command({
  command:'read',
  describe:'Reads the notes',
  builder:{
    title:{
      describe:'note title',
      demandOption:true,
      type:'string'
    },
    body:{
      describe:'its just a body'
    }
  },
  handler:()=>console.log(notes.readNote())

})
yargs.parse()
//console.log(yargs.argv)
