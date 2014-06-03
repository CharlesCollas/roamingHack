var restify = require('restify');
var sys = require('sys');
var exec = require('child_process').exec;

var server = restify.createServer({
	name: 'MyServer',
	version: '1.0.0'
});

function puts(error, stdout, stderr) { sys.puts(stdout); }

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.post('/takeoff', function (req, res, next) {
	console.log(req.params);
	
	var from = req.params.from;
	var to = req.params.to;
	var text = req.params.text;
	
	var result = "from : " + from + "\n" + "to : " + to + "\n" + text + "\n";
	
	var command = "/usr/bin/gammu --sendsms TEXT 0613508170 -len " + result.length + " -text \"" + result + "\"";
	
	console.log(command);
	exec(command, puts);

    	res.send(200);
    	return next();
});

server.get('/', function (req, res, next) {
	console.log('GET /');
    	res.send(200);
    	return next();
});

server.listen(4242, function() {
  	console.log('%s started listening',  server.name);
});
