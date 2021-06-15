// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});



app.get("/api/:date?", function(req, res){
  // if no parameter passed, create date object for .now()
  if (!req.params.date) {
    var date = Date.now();
    var utcDate = new Date(date);
    res.json({
      "unix": date,
      "utc": utcDate.toUTCString()
    })
  }
  var date = new Date();
  // check if parameter is unix date format i.e. 15199849351
  if (/^\d*\d$/.test(req.params.date)) {
    //special case to handle 0 as a parameter to avoid error
    if(req.params.date == '0') {
      date = new Date(0);
      res.json({
        "unix": 0,
        "utc" : date.toUTCString()
      })
    }
    else date.setTime(req.params.date);
  } 
  // create new Date if param is date-time format i.e. 2010-10-15
  else{
    date = new Date(req.params.date);
  }
  if (!date.getTime()) res.json({"error": "Invalid date"});
  res.json({
    "unix" : date.getTime(),
    "utc" : date.toGMTString()
  })
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

