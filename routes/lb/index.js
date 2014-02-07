
/*
 * GET home page.
 */

exports.add = function(req, res){
  //check for existing
  var data = {'name': req.name,
	      'node': req.node,
	      'url': req.url}
  var etcd = require('etcd');
  function setConf(cdata, callback){
    etcd.configure({
      host: '172.18.4.36',
      port: 4001
    });
//    etcd.set('/lb/instance/' + data.name + '/node', data.node, function (err) {
//      if (err) throw err;
//    }
//    etcd.set('/lb/instance/' + data.name + '/url', data.node, function (err) {
//      if (err) throw err;
//    }
      etcd.set('test', 'ping', function(err){
        if (err) {
	  res.send(err)
        } else {
	  res.redirect('/list')
	}
      });
    }
};
