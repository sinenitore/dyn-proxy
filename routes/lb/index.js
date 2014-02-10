
/*
 * GET home page.
 */

exports.add = function(req, res){
  //check for existing
  var data = {'name': req.params.name,
	      'node': req.params.node,
	      'url': req.params.url}
  console.log(data)
  var etcd = require('etcd');
  etcd.configure({
    host: '172.18.4.36',
    port: 4001
  });
  console.log(etcd)
//  function setConf(cdata, callback){
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
//  }
};
