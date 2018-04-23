//Load Data
var friendsData = require("../data/friends");

// Routing
module.exports = function(app) {

	// Display friends api
	app.get("/api/friends", function (req, res) {
	  return res.json(friendsData);
	});

	// Post Survey
	app.post("/api/friends", function(req, res) {
		//A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
		if (friendsData.length < 5) {
    	  friendsData.push(req.body);
    	  res.json(true);
    	}
    	else {
    	  waitListData.push(req.body);
    	  res.json(false);
    	}
	});
};