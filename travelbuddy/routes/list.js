exports.index = function(req, res){
  res.render('list', {
    alltrips: global.alltrips
  });
};