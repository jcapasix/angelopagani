var express = require('express');
var app = express();

var json = {
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "778N4TU227.com.everis.miclaroApp",
        "paths": [ "/claro/*" ]
      },
      {
        "appID": "778N4TU227.io.github.jcapasix.udeep",
        "paths": [ "/udeep/*" ]
      }
    ]
  }
}

app.get('/', function (req, res) {
  res.send('udeep: Universal Links');
});

app.get('/.well-known/apple-app-site-association', function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(json));
  //res.send('POST request to the homepage');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 5000!');
});


