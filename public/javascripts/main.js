$('#btn-lb-add').on('click', function (e) {
	var lbNode = $('#txt-lb-node').val()
	var lbURL = $('#txt-lb-url').val()
	var lbName = $('#txt-lb-name').val()
	var lbMethod = $('#slt-lb-method').val()
	var lbDetails = {action: 'lb-add',
			name: lbName,
			node: lbNode,
			method: lbMethod,
			url: lbURL
	}
	console.log(lbDetails)
	$.ajax({
		url: ('lb/add/' + lbDetails.name + '/' + lbDetails.node + '/' + encodeURIComponent(lbDetails.url)),
		type: 'GET',
		success: function(data) {
			console.log('Success')
		}
	});
});
		
