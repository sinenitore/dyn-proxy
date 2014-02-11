
/*
 * GET home page.
 */

exports.add = function(req, res){
  //check for existing
  var data = {'name': req.params.name,
	      'node': req.params.node,
	      'url': req.params.url}
  console.log(data)
  var etcdjs = require('nodejs-etcd');
  var etcd = new etcdjs({
    url: 'http://172.17.0.68:4001'
  });
  console.log(etcd)
  function setConf(cdata, callback){
    data.count = 0
    etcd.write({
      key: '/lb/instance/' + data.name + '/node',
      value: data.node,},
      function (err, resp, body) {
        if (err) data.err += err;
	data.count++
        if (data.count = 2) callback(data)
      });
    etcd.write({
      key: '/lb/instance/' + data.name + '/url', 
      value: data.node,},
      function (err, resp, body) {
        if (err) data.err += err;
        data.count++
	if (data.count = 2) callback(data)
      });
    };
  setConf(data, function(data){
    console.log(data)
    res.send(data)
  });
};
