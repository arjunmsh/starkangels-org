var connect = require('connect')
var http = require('http')

var app =connect()

var compression = require('compression')
app.use(compression())
var cookieSession = require('cookie-session')

app.use(cookieSession({
      keys:['secret1','secret2'] }))

var bodyParser =require('body-parser');

app.use(bodyParser.urlencoded())
app.use(function(req,res){ 
res.end('Hello from connect'); })

http.createServer(app).listen(3000)
