var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var template = require("consolidate");
var path = require('path');
var url = require('url');
var request = require('request');

var port = 8080;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "views")))
app.engine ("handlebars", template.handlebars);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.get("/", function(req, res) {
  res.render("translate" ,{
    title: "Node.js << part(1)  >>"
  });
});

app.post("/", function(req, res) {
  if(!req.body.translate || req.body.translate == " ") {
    res.render("translate", {
      title: "Empty Data"
    });
  };
  var YAndexApi = url.format({
    protocol: "https",
    hostname: "translate.yandex.net",
    pathname: "api/v1.5/tr.json/translate",
    query: {
      key: "trnsl.1.1.20190525T193442Z.fd8990a032b058b2.01a1a04c4e88cffcda4bb58e7263c6939465fae9",
      text: req.body.translate,
      lang: req.body.lang
    }
  })

    request.get({url: YAndexApi, json:true}, function (error, response, json) {
      var data = {};
      if(error || json.code != 200) {
        this.data = {
          title: "error",
          error: json.message
        }
      } else {
        data = {
          dataText: "Your Text: " +req.body.translate,
          dataTrans: "Translate: " + json.text
        };
      }

      res.render("translate", {
        response: data
      })
    })
  });


app.listen(port);
console.log("server running on localhost:"+port);
