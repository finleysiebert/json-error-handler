var message = (function(){
	"using strict";

	return {
		new: function(type, title, message) {
			if(typeof error === 'function') {
				error(error);
			} else {
				
				var messagevals = {
					"type" : type,
					"title" : title,
					"message" : message
				}

				return messagevals;
			}
		},
		send: function(message) {

			if(message.type === 'succes') {

				$('.alert-success').fadeIn(300).html("<b>" + message.title + "</b>: " + message.message).delay(3000).fadeOut(300);

			} else if(message.type === 'warning'){

				$('.alert-warning').fadeIn(300).html("<b>" + message.title + "</b>: " + message.message).delay(3000).fadeOut(300);

			} else if(message.type === 'error') {

				$('.alert-danger').fadeIn(300).html("<b>" + message.title + "</b>: " + message.message).delay(3000).fadeOut(300);

			} else {
				var error = {
					"error": "no_message_type"
				}
				return error;
			}
		}
	}

}());