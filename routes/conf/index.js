exports.index = function(req, res){
	res.send('Index for conf routes.')
};
exports.list = function(req, res){
  var etcdjs = require('nodejs-etcd');
  var etcd = new etcdjs({
    url: 'http://172.17.0.68:4001'
  });
  function fetchNodeDetails(nPath, cb){
    etcd.read({
      'key': nPath,},
      function(err, res, body){
        if (err) cb(err)
        tmpN = JSON.parse(body)
        n = {
          url: tmpN.url,
          n1: tmpN.node
        }
        cb(null, n)
      }
    );
  };
  etcd.read({
    'key': '/lb/instance',},
    function (err, list, body) {
      if(err) res.send(500, err);
      eData = JSON.parse(body)
      confList = new Array()
      console.log(eData.node.nodes[0])
      for (var n=0; n < eData.node.nodes.length; n++) {
        confList.push(eData.node.nodes[n].key)
      }
      console.log(confList)
      async.map(confList, fetchNodeDetails, function(err, results){
        if (err) res.send(500, err)
	console.log(results)
        res.render('list', { items: results})  
        //testing
      });
    }
  )
}

