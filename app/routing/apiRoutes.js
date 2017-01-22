
// We are linking our routes to a series of "data" sources in the friend.js

var friends = require("../data/friends.js");


//routes

module.exports = function(app) {
  // API GET Requests
 


  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests


app.post('/api/friends', function(req, res){
  var newFriend = req.body;
  friends.push(newFriend);
  res.json(match(newFriend));
});

//clear functionnnnnsssssssss

app.post("/api/clear", function() {
  // Empty out the arrays of data duh
  friends = [];

  console.log(friends);
});

};
// somewhat supposed to match with score 
function match(newFriend){

    var lowestDiff = 50;
    var match;
    var diff = 0;

  			for( var i in friends){
          for(var j in newFriend.scores){

  				diff += Math.abs(parseInt(newFriend.scores[j]) - parseInt(friends[i].scores[j]));
  			}if(diff <= lowestDiff){
  				lowestDiff = diff;
  				match = friends[i];
  			}
      }
      console.log(match);
      return match;
  }