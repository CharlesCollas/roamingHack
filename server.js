// le gestion des routes
var restify = require('restify');

var server = restify.createServer({
	name: 'MyServer',
	version: '1.0.0'
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.post('/lol', function (req, res, next) {
	console.log(req.params);
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