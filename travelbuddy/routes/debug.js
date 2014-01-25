exports.index = function(req, res){
  res.render('debug', {
    title: 'Debug -- View All Trips',
    alltrips: global.alltrips,
  });
};
