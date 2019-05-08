var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs')

var https = require('https');
// var port = 10443;

// var p_key = fs.readFileSync('/home/bitnami/config/privkey.pem');
// var cert = fs.readFileSync('/home/bitnami/config/cert.pem')

app.use(express.static(path.join(__dirname, '../client/build')));


// https.createServer({
// 	key:p_key,
// 	cert:cert
// }, app).listen(port, () => console.log('Listening on port', port));


app.listen(3000)