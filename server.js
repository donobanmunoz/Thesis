var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var template = require("consolidate");
var path = require('path');
var url = require('url');

var port = 8080;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "views")))
app.engine ("handlebars", template.hanlderbars);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.get("/", function(req, res) {
  res.render("translate" ,{
    title: "Node.js << part(1)  >>"
  });
});

app.listen(port);
console.log("server running on localhost:"+port);
