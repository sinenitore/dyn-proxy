$('#btn-lb-add').on('click', function (e) {
	var lbNode = $('#txt-lb-node').text()
	var lbURL = $('#txt-lb-url').text()
	var lbMethod = $('#slt-lb-method').value
	var lbDetails = {'action': 'lb-add',
			'node': lbNode,
			'method': lbMethod,
    			'url': lbURL
	}
}
$.ajax({
	url: ("lb/add/" + lbDetails.name + "/" + lbDetails.node + "/" + encodeURIComponent(lbDetails.url)),
	type: GET,
	success: function(data) {
		console.log('Success')
	}
})
		
