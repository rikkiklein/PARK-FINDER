var express     = require('express');
var cors        = require('cors');
var bodyParser  = require('body-parser');
var request     = require('request');
var app         = express();

const baseUrl = 'https://data.cityofnewyork.us/resource/w7a6-9xrz.json';

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {

 request({
   url: baseUrl,
   method: 'GET',
   callback: function(error, response, body) {
     res.send(body);
   }
 })
});


app.listen(3000, function(){
 console.log('listen to events on a "port".')
});
