var //fs 		= require('fs'),
    http 	= require('http'),
    express	= require('express'),
    app 	= express();

/*var privateKey = fs.readFileSync('../my_key.pem').toString('ascii');
var certificate = fs.readFileSync('../my_cert.pem').toString('ascii');
var options = {
	key: privateKey,
	cert: certificate
};*/
http.createServer(app).listen(3000);

app.set('view engine' , 'jade');
app.set('views','./views');

app.get('/',function(req,res){ 
 	res.render('hello');
});

app.get('/test',function(req,res){ 
 	res.send('hello');
});


