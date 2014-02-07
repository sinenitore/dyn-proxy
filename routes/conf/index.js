exports.index = function(req, res){
	res.send('Index for conf routes.')
};

exports.list = function(req, res){
  var etcd = require('etcd');
  etcd.configure({
    host: '172.18.4.36',
    port: 4001
  });
  etcd.list(path, parseList)
  function parseList(err, list) {
    if(err) res.send(500, err);
    res.render('list', { items: list}) 
  };
}

