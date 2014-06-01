var sys = require('sys');
var exec = require('child_process').exec;

var num = process.argv[2];
var text = process.argv[3];

function puts(error, stdout, stderr) { sys.puts(stdout); }

var command = "/usr/bin/gammu --sendsms TEXT " + num + " -len " +
        text.length + " -text \"" + text + "\"";

console.log(command);

//exec(command, puts);