// path routes for the html pages do be called from the local server on PORT 9000!!!!!

var path = require('path');

module.exports = function (app){

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
};