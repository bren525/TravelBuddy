
/*
 * GET home page.
 */
var models = require('../models');
var Trip = models.Trip;

exports.index = function(req, res){
  res.render('index', {
    title: 'Travel Buddy',
  });
};
exports.addTrip = function(req,res){
	console.log(req.body);
	var newTrip = new Trip(req.body.start, 'Providence', 'Boston', new Date('January 24, 2014 12:00:00'))
	global.alltrips.push(newTrip);
	res.redirect("/list",{
    title: 'Possible Buddies',
    alltrips: global.alltrips,
  });
};