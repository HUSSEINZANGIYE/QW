$(function () {
	function openHelpBox ($el) {
		var pos = $el.offset(),
			type = $el.data('help'),
			$box = $('#help');

		// Don't append to already-appended content
		$box.find('#help-content').empty();

		var cvvHtml = '<p>The <strong>3 digits</strong> on the back<br>of your credit card.</p>';
		cvvHtml += '<div class="card">';
		cvvHtml += '  <div class="card-stripe"></div>';
		cvvHtml += '  <div class="card-row">';
		cvvHtml += '    <div class="card-signature"></div>';
		cvvHtml += '    <div class="card-cvv">123</div>';
		cvvHtml += '  </div>';
		cvvHtml += '</div>';

		// Insert the help box content based on which one we need
		$box.find('#help-content').append(cvvHtml);

		// Now that we inserted content, get the total height of the box
		var boxHeight = $('#help').outerHeight();
		var inputHeight = $('input').first().outerHeight();

		// Display and position
		$box.addClass('open');
		$box.css({
			'top': (pos.top - boxHeight - inputHeight - 35) + 'px'
		});

		// Scroll to top of help box
		$('html, body').animate({
			scrollTop: $box.offset().top
		}, 500);
	}

	function submitForm () {
		$('#wrapper').addClass('sending');
		$('#pay').text('Sending...');
	}

	// Open help box on "?" click
	$('.help-icon').on('click', function (e) {
		e.stopPropagation();
		openHelpBox($(this));
	});

	// Close help box on "X" click
	$('.close').on('click', function () {
		$(this).parent().removeClass('open');
	});

	// Close help box when clicking outside
	$('html').on('click', function () {
		$('#help').removeClass('open');
	});

	$('#help').on('click', function (e) {
		e.stopPropagation();
	});

	$('input, select').on('focus', function (e) {
		var err_msg_span = $( "span.error-msg" );
		if($(this).parent().hasClass('field')) {
			$(this).parent().removeClass('input-error').find(err_msg_span).text('');
		} else {
			$(this).parent().parent().removeClass('input-error').find(err_msg_span).text('');
		}
	});

	/*
	 Roy's Custom Solution that hopefully works for all devices, even androids
	 */
	if(!no_mask) {
		$('#expiry').on('keyup', handleExpiration).on('keydown', handleExpiration).on('blur', function (e) {
			var expire = $(this).val().replace(/\//g, '').replace(/ /g, '');
			var err_msg_span = $( "span.error-msg" );

			if(expire.length == 0) {
				$("#expire_field").addClass('input-error').find(err_msg_span).text('Required expiry date.');
				return;
			} else if(expire.length != 4) {
				$("#expire_field").addClass('input-error').find(err_msg_span).text('Invalid expiry date.');
				return;
			}

			var month = parseInt(expire.substring(0,2));
			var year = parseInt(expire.substring(2,2));
			var currDate = new Date();
			var curr_year = currDate.getYear();
			var curr_month = currDate.getMonth();

			if(month > 12 || month < 1) {
				$("#expire_field").addClass('input-error').find(err_msg_span).text('Invalid expiry date.');
				$("#pay").attr('disabled',true);
			} else if(year == curr_year && month < curr_month) {
				$("#expire_field").addClass('input-error').find(err_msg_span).text('Invalid expiry date.');
				$("#pay").attr('disabled',true);
			} else if(year < curr_year) {
				$("#expire_field").addClass('input-error').find(err_msg_span).text('Invalid expiry date.');
				$("#pay").attr('disabled',true);
			}
		}).on('focus', function (e) {
			var err_msg_span = $( "span.error-msg" );
			$("#expire_field").removeClass('input-error').find(err_msg_span).text('');
			$("#pay").attr('disabled',false);
		});
		$('#ccnum').on('keyup', function (e) {
			var code = e.keyCode || e.which;
			if ($(this).val().length == 4 && code != 8) {
				$(this).val($(this).val() + ' ');
			} else if ($(this).val().length == 9 && code != 8) {
				$(this).val($(this).val() + ' ');
			} else if ($(this).val().length == 14 && code != 8) {
				$(this).val($(this).val() + ' ');
			}
		}).on('focus', function (e) {
			var err_msg_span = $( "span.error-msg" );
			$("#ccnum_field").removeClass('input-error').find(err_msg_span).text('');
		});
	}else{
		$("#card_month").on('keyup',function() {
			if($(this).val().length >= 2) {
				$("#card_year").focus();
			}
		});
	}

	function handleExpiration(e) {
        var code = e.keyCode || e.which;
        var value = $(this).val();

        value = value.replace('../../https@', '/');
        if (value.length == 2 && code != 8 && value.indexOf('/') != 2) {
            value = value + '/';
        }

        var slashParts = value.split('/');
        if (slashParts.length > 2) {
            value = slashParts.shift() + '/' + slashParts.shift() + slashParts.join('');
        }

        $(this).val(value);
	}
	
	Template.submit(submitForm);
});