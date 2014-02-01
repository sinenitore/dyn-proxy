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
	url: ("lb/action.html"),
	json: JSON.stringify(lbDetails),
	type: POST,
  	contentType: 'application/json; charset=UTF-8',
	success: function(data) {
		console.log('Success')
	}
})
		
