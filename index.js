var express = require('express')
var app = express()

//serve static assets
app.use('/css', express.static(__dirname + '/dist/css'));
app.use('/js', express.static(__dirname + '/dist/js'));
app.use('/lib', express.static(__dirname + '/dist/lib'));

//routes
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
})

//start server
app.listen(3000)
console.log("Server started on port 3000");