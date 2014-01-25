exports.index = function(req, res){
  res.render('list', {
    title: 'Travel Buddy',
    alltrips: global.alltrips,
    taxitrips: global.alltrips,
    publictrips: global.alltrips
  });
};