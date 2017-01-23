
// We are linking our routes to a series of "data" sources in the friend.js

var friends = require("../data/friends.js");


//routes

module.exports = function(app) {
  // API GET Requests
 


  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests

// This is what Node will run when the website sends a post to the server
app.post('/api/friends', function(req, res){
    // Need 2 arrays for friends scores and the difference between friends scores - user score
    var friendsScores = [];
    var difference = [];
    
    var newFriendScore = eval(req.body.scores.toString().replace(/,/g,'+'));
    
    for (var i=0; i<friends.length; i++) {
      
      friendsScores[i] = eval(friends[i].scores.toString().replace(/,/g,'+'));
    }
    
    for (var i=0; i<friendsScores.length; i++) {
      difference[i] = Math.abs(newFriendScore-friendsScores[i]);
    }
    
    Array.prototype.min = function() {
        return Math.min.apply(null, this);
      };
    
     for (var i=0; i<difference.length; i++) {
      if (difference.min() == difference[i]) {
        res.json(friends[i]);
        return (match);
    
      }
    }
  })
};