const chalk = require("chalk");
const yargs = require("yargs");
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
yargs.parse()
//console.log(yargs.argv)
