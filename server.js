var restify = require('restify');
// var exec = require('child_process').exec;

var server = restify.createServer({
	name: 'MyServer',
	version: '1.0.0'
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.post('/takeoff', function (req, res, next) {
	console.log(req.params);
	
	var from = "";
	var to = "";
	var text = "";
	
	var result = from + "\n" + to + "\n" + text + "\n";
	
	function puts(error, stdout, stderr) { sys.puts(stdout); }
	
	var command = "/usr/bin/gammu --sendsms TEXT 0613508170 -len " + result.length + " -text \"" + result + "\"";
	console.log(command);

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
