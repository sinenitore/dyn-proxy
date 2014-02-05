
/*
 * GET home page.
 */

exports.lb_add = function(req, res){
  //check for existing
  var data = {'name': req.name,
	      'node': req.node,
	      'url': req.url}
  
  //res.render('add', req.result);
  res.json(data)
};
