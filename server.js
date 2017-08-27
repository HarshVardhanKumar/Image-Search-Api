// server.js
// where your node app starts

// init project
var express = require('express');
var app = express() ;
var mongo = require('mongodb').MongoClient ;
var mongourl = 'mongodb://'+process.env.DBUS+":"+process.env.DWORD+"@ds153113.mlab.com:53113/"+process.env.DBNAME;
var GoogleSearch = require('google-search') ;

var googlesearch = new GoogleSearch({
  key: process.env.API_KEY+"" ,
  cx: process.env.CX+""
}) ;

const GoogleImages = require('google-images');
const client = new GoogleImages(process.env.CX, process.env.API_KEY);

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/search/:q", function (request, res) {
  var searchstring = request.params.q ;
  googlesearch.build({
                      q: searchstring,
                      num: 10, // Number of search results to return between 1 and 10, inclusive 
                     }, 
                     function(error, respons) {
                            res.send(respons) ;
                     });
});

app.get("/image/:q\?(offset=:of)?", function(req, res) {
  var searchstring = req.params.q ;
  var offset = req.params.of ;
  var object = [] ;
  var page = Math.floor(offset/10)+1;
  var result = [] ;
  mongo.connect(mongourl, function(err, db) {
    var collection = db.collection('search') ;
    collection.insert({searchString: searchstring, when: new Date().toDateString()}, function(err, data) {
      if(err) {
        res.end("connectionerror")
      }
      db.close() ;
    })
  })
  client.search(searchstring, {page: page}).then(function(images) {
    for(var i = 0 ; i<images.length ; i++) {
      var object = {} ;
      object.imageurl = images[i]["url"] ;
      object.altText = images[i]["description"] ;
      object.pageurl = images[i]["parentPage"] ;
      
      result.push(object) ;
    }
    res.jsonp(result) ;
  }) ;
});

app.get("/latest", function(req, res) {
  mongo.connect(mongourl, function(err, db) {
    var collection = db.collection('search') ;
    collection.find({},{_id:0, searchString:1, when: 1}).toArray(function(err, docs) {
      res.jsonp(docs) ;
      db.close() ;
    })
  })
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
