const chalk = require("chalk");
const yargs = require("yargs");
const notes = require('./notes')
const fs = require('fs')
const request = require('request')
const url='https://api.darksky.net/forecast/c8102cab7e4b7628ae6a8da173491ada/37.8267,-122.4233'
//console.log(chalk.bold.green("Success!"));
yargs.command({
  command: 'remove',
  describe: "remove a note",
  builder: {
    title: {
      describe:'note title',
      demandOption:false,
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
      demandOption:false,
      type:'string'
    },
    body:{
      describe:'its just a body'
    }
  },
  handler:()=>console.log(notes.readNote())

})
yargs.parse()
request({url},(err,res)=>{
  fs.writeFileSync('new.txt',JSON.stringify(res))
})
//console.log(yargs.argv)
