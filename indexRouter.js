var server = require("./serverRouter");
var router = require("./router");
 
server.start(router.route);
