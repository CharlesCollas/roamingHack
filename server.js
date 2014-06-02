// le gestion des routes
var restify = require('restify');

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

		var res = from + "\n";
		var res += to + "\n";
		var res += text + "\n";

		var exec = require('child_process').exec;
		exec("./send.js 0613508170 " + res , puts);


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
