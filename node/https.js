var fs = require('fs'),
    https = require('https');

var privateKey = fs.readFileSync('../my_key.pem').toString('ascii');
var certificate = fs.readFileSync('../my_cert.pem').toString('ascii');
var options = {
key: privateKey,
cert: certificate
};
https.createServer(options, function (req,res){
res.end('hello https'); }).listen(3000);
