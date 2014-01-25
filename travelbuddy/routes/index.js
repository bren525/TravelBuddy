
/*
 * GET home page.
 */
var models = require('../models');
var Trip = models.Trip;

exports.index = function(req, res){
  res.render('index', {
    title: 'Fare Share',
  });
};
exports.addTrip = function(req,res){
	//user, transporation, school, start_location, end_location, datetime
	var d = new Date();
	var monthdayyear = req.body.date.split("/");
	d.setMonth(monthdayyear[0]);
	d.setDate(monthdayyear[1]);
	d.setYear(monthdayyear[2]);
	console.log(req.body.ampm);
	if(req.body.ampm=="pm"){
		d.setHours(parseInt(req.body.hours)+12);
	}else{
		d.setHours(req.body.hours);
	}
	d.setMinutes(req.body.minutes);
	d.setSeconds(0);
	d.setMilliseconds(0);
	var newTrip = new Trip(req.body.user, req.body.transportation ,req.body.school, req.body.location1, req.body.location2, d)
	global.alltrips.push(newTrip);
	res.redirect("/");	
};