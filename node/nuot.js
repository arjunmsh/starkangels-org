var http = require('http');
var nuodb = require('db-nuodb'); 
new nuodb.Database({ hostname: 'localhost', user: 'quickstart', password: 'quickstart', database: 'test', schema: 'test' }).connect(function(error) { if (error) { return console.log("CONNECTION ERROR: " + error); } else {  console.log('Hey'); } });
http.createServer().listen(8000);
