$(window).load(function()
{
	$(window).trigger('hashchange');
	$('#emailWay').html('<a href="mailto:support@buylike.ir">support@buylike.ir</a>');
	$('#telWay').html('<div style="direction:rtl">۳۸۷۶۰۴۴۱ (۰۵۱)</div>');

});
$(document).on('click','#buyMemberbutton',function()
{
	var top = $('.pckg.member').offset().top - 50;
	$('body,html').animate({ scrollTop: top }, "slow");
});
$(document).on('click','#buyViewTgbutton',function()
{
	var top = $('.pckg.view_tg').offset().top - 50;
	$('body,html').animate({ scrollTop: top }, "slow");
});
$(document).on('click','.buylikebutton',function()
{
	var top = $('.LIKE_VIEW').offset().top;
	$('body').animate({ scrollTop: top }, "slow");
	$('#likepackages').click();
});
$(document).on('click','.buyFlbutton',function()
{
	var top = $('.pckg.fl').offset().top - 50;
	$('body,html').animate({ scrollTop: top }, "slow");
});
$(document).on('click','.link-next',function()
{
	var top = $('.link-next').offset().top +50;
	$('body,html').animate({ scrollTop: top }, "slow");
});
$(document).on('click','.buyCMbutton',function()
{
	var top = $('.pckg.cm').offset().top - 50;
	$('body,html').animate({ scrollTop: top }, "slow");
});
$(document).on('click','.buyViewbutton',function()
{
	var top = $('.LIKE_VIEW').offset().top;
	$('body,html').animate({ scrollTop: top }, "slow");
	$('#viewpackages').click();
});
$(document).on('click','.accordion-head',function()
{
	$(this).parent().toggleClass('active');
	$('p',$(this).next()).slideToggle();
});
$(document).on('click','.package-foot a',function()
{
	showOrderPopUp($(this).attr("data-package"));
});

$(document).on('click','#closePopUP,.close2,#overlay',function()
{
	$('#popup,#popup_fl,#popup_cm,#popup_login,#popup_view,#popup_member,#popup_view_tg').fadeOut(function()
	{
		$('#overlay').fadeOut();
	});
});

function showOrderPopUp(packages)
{
	$('#overlay').fadeIn(function()
	{
		if(typeof $('#pck').attr('data-price') !== typeof undefined && $('#pck').attr('data-price') !== false && packages==5) {
			$('#pck').text($('#pck').attr('data-price'));
		}else {
			$('#pck').text(products[packages].like);
		}
		if(typeof $('#pricePck').attr('data-price') !== typeof undefined && $('#pricePck').attr('data-price') !== false && packages==5)
			$('#pricePck').text($('#pricePck').attr('data-price'));
		else
			$('#pricePck').text(products[packages].price);

		//$('#pricePck,#pck').removeAttr('data-price');

		$('#packForm').val(packages);
		if(typeof localStorage['email'] !=='undefined') $('#emailPay').val(localStorage['email']);
		$('#popup').fadeIn();
	});
}
function showOrderPopUpView(packages)
{
	$('#overlay').fadeIn(function()
	{
		if(typeof $('#pck_view').attr('data-price') !== typeof undefined && $('#pck_view').attr('data-price') !== false&& packages==12) {
			$('#pck_view').text($('#pck_view').attr('data-price'));
		}else {
			$('#pck_view').text(products[packages].like);
		}

		if(typeof $('#pricePck_view').attr('data-price') !== typeof undefined && $('#pricePck_view').attr('data-price') !== false && packages==12)
			$('#pricePck_view').text($('#pricePck_view').attr('data-price'));
		else
			$('#pricePck_view').text(products[packages].price);


		//$('#pricePck_view,#pck_view').removeAttr('data-price');

		$('#packForm_view').val(packages);
		if(typeof localStorage['email'] !=='undefined') $('#emailPay_view').val(localStorage['email']);
		$('#popup_view').fadeIn();
	});
}
$(document).on('click','.pckg_cm-foot a',function()
{
	showOrderPopUpCM($(this).attr("data-package"));
});
$(document).on('click','.pckg_view-foot a',function()
{
	showOrderPopUpView($(this).attr("data-package"));
});
$(document).on('click','.pckg-foot a',function()
{
	showOrderPopUpFl($(this).attr("data-package"));
});

function showOrderPopUpFl(packages)
{
	$('#overlay').fadeIn(function()
	{
		//$('#pck_fl').text(products[packages].like);
		//$('#pricePck_fl').text(products[packages].price);
		$('#packForm_fl').val(packages);
		if(typeof localStorage['email'] !=='undefined') $('#emailPay_fl').val(localStorage['email']);
		$('#popup_fl').fadeIn();
	});
}
function showOrderPopUpCM(packages)
{
	$('#overlay').fadeIn(function()
	{
		$('#pck_cm').text(products[packages].like);
		$('#pricePck_cm').text(products[packages].price);
		$('#packForm_cm').val(packages);
		if(typeof localStorage['email'] !=='undefined') $('#emailPay_cm').val(localStorage['email']);
		$('#popup_cm').fadeIn();

		/*
		$('input:text[value=]','.formPay_cm ol').each(function(i,index)
		{
			$(this).val(i);
		});
		*/

	});
}

$(document).on('click','#pay',function(e)
{
	e.preventDefault();
	$('#contactUs #result').html('').css('color','green');

	if(!$('#rules-like').is(":checked"))
	{
		alert('شما باید فوانین را مطالعه کنید.');
	}else
	{
		$('.need').removeClass('need');
		$('#pay').attr('disabled','disabled');

		if(!validateURL($('#urlPay').val()))
		{
			$('#urlPay').addClass('need');
			$('#pay').removeAttr('disabled');
			alert('آدرس عکس معتبر نیست لطفا راهنما را مطالعه فرمایید.');
		}else
		{
			if($('#urlPay').val() !== '' && $('#emailPay').val() !== '' )
			{

				if(validate_email($('#emailPay').val()))
				{
					localStorage.setItem("email", $('#emailPay').val());
					$('.formPay').submit();
					$('#pay').removeAttr('disabled');
					$('.close2').click();
				}else
				{
					$('#emailPay').addClass('need');
					$('#pay').removeAttr('disabled');
					alert('ایمیل شما معتبر نیست');
				}
			}else
			{
				if($('#urlPay').val() == '') $('#urlPay').addClass('need');
				if($('#emailPay').val() == '') $('#emailPay').addClass('need');
				$('#contactUs #result').html('لطفا موارد خواسته شده را وارد کنید').css('color','red');
				$('#pay').removeAttr('disabled');
			}
		}

	}

});
$(document).on('click','#pay_view',function(e)
{
	e.preventDefault();
	$('#contactUs #result').html('').css('color','green');

	if(!$('#rules-view').is(":checked"))
	{
		alert('شما باید فوانین را مطالعه کنید.');
	}else
	{
		$('.need').removeClass('need');
		$('#pay_view').attr('disabled','disabled');

		if(!validateURL($('#urlPay_view').val()))
		{
			$('#urlPay_view').addClass('need');
			$('#pay_view').removeAttr('disabled');
			alert('آدرس عکس معتبر نیست لطفا راهنما را مطالعه فرمایید.');
		}else
		{
			if($('#emailPay_view').val() !== '' && $('#emailPay_view').val() !== '' )
			{

				if(validate_email($('#emailPay_view').val()))
				{
					localStorage.setItem("email", $('#emailPay_view').val());
					$('.formPay_view').submit();
					$('#pay_view').removeAttr('disabled');
					$('.close2').click();
				}else
				{
					$('#emailPay_view').addClass('need');
					$('#pay_view').removeAttr('disabled');
					alert('ایمیل شما معتبر نیست');
				}
			}else
			{
				if($('#urlPay_view').val() == '') $('#urlPay_view').addClass('need');
				if($('#emailPay_view').val() == '') $('#emailPay_view').addClass('need');
				$('#contactUs #result').html('لطفا موارد خواسته شده را وارد کنید').css('color','red');
				$('#pay_view').removeAttr('disabled');
			}
		}

	}

});
$(document).on('click','#pay_cm',function(e)
{
	e.preventDefault();
	$('#contactUs #result').html('').css('color','green');
	$('.need').removeClass('need');
	$('#pay_cm').attr('disabled','disabled');
	var lengthEmptyCm = $('input:text[value=]','.formPay_cm ol').length;
	var tekrari = 0;
	var tekrari_arr = [];
	var matches = false;
	var matches2 = false;
	var limit = false;
	var limit_err = false;
	var matches2_err = false;
	var matches_err = false;
	var error='';
	if(!$('#rules-cm').is(":checked"))
	{
		error+='شما باید فوانین را مطالعه کنید.'+"\n";
	}
	$('input:text[value!=]','.formPay_cm ol').each(function(i,index)
	{
		var thisCm = $(this).val().trim();
		if(tekrari_arr[thisCm] == 1)
		{
			$(this).addClass('need');
			if(tekrari==0) error+='در بین کامنت های شما کامنت تکراری وجود دارد.'+"\n";
			tekrari = 1;
		}
		tekrari_arr[thisCm] = 1;

		matches = thisCm.match('@');
		if(matches) $(this).addClass('need');
		if(matches && !matches_err)
		{
			error+='استفاده ازحرف @ در کامنت مجاز نیست.'+"\n";
			matches_err = true;
		}

		matches2 = thisCm.match('#');
		if(matches2) $(this).addClass('need');

		if(matches2 && !matches2_err)
		{
			if(!matches && matches2) error+='استفاده ازحرف # در کامنت مجاز نیست.'+"\n";
			matches2_err=true;
		}

		limit = thisCm.length > 40;
		if(limit) $(this).addClass('need');
		if(limit && !limit_err){
			error+='تعداد حروف کامنت باید زیر ۴۰ حرف باشد.'+"\n";
			limit_err =true;
		}


	});

	if(error)
	{
		alert(error);
		$('#pay_cm').removeAttr('disabled');
	}else
	{
		if($('#urlPay_cm').val() !== '' && $('#emailPay_cm').val() !== '' && lengthEmptyCm == 0)
		{

			if(validate_email($('#emailPay_cm').val()))
			{
				localStorage.setItem("email", $('#emailPay_cm').val());
				$('.formPay_cm').submit();
				$('#pay_cm').removeAttr('disabled');
				$('.close2').click();
			}else
			{
				$('#emailPay_cm').addClass('need');
				$('#pay').removeAttr('disabled');
				alert('ایمیل شما معتبر نیست');
			}
		}else
		{
			$('input:text[value=]','.formPay_cm ol').addClass('need');
			if($('#urlPay_cm').val() == '') $('#urlPay_cm').addClass('need');
			if($('#emailPay_cm').val() == '') $('#emailPay_cm').addClass('need');
			alert('لطفا موارد خواسته شده را وارد کنید');
			$('#pay_cm').removeAttr('disabled');
		}
	}
});
$(document).on('click','#pay_fl',function(e)
{
	e.preventDefault();
	$('#contactUs #result').html('').css('color','green');

	if(!$('#rules-fl').is(":checked"))
	{
		alert('شما باید فوانین را مطالعه کنید.');
	}else
	{
		$('.need').removeClass('need');
		$('#pay_fl').attr('disabled','disabled');
		if($('#urlPay_fl').val() !== '' && $('#emailPay_fl').val() !== '' )
		{

				if(validate_email($('#emailPay_fl').val()))
				{
					localStorage.setItem("email", $('#emailPay_fl').val());
					$('.formPay_fl').submit();
					$('#pay_fl').removeAttr('disabled');
					$('.close2').click();
				}else
				{
					$('#emailPay_fl').addClass('need');
					$('#pay_fl').removeAttr('disabled');
					alert('ایمیل شما معتبر نیست');
				}


		}else
		{
			if($('#urlPay_fl').val() == '') $('#urlPay_fl').addClass('need');
			if($('#emailPay_fl').val() == '') $('#emailPay_fl').addClass('need');
			$('#contactUs #result').html('لطفا موارد خواسته شده را وارد کنید').css('color','red');
			$('#pay_fl').removeAttr('disabled');
		}
	}

});

/* member */
$(document).on('click','.pckg_member-foot a',function()
{
	showOrderPopUpMember($(this).attr("data-package"));
});

function showOrderPopUpMember(packages)
{
	$('#overlay').fadeIn(function()
	{
		$('#packForm_member').val(packages);
		if(typeof localStorage['email'] !=='undefined') $('#emailPay_member').val(localStorage['email']);
		$('#popup_member').fadeIn();
	});
}
$(document).on('click','#pay_member',function(e)
{
	e.preventDefault();
	$('#contactUs #result').html('').css('color','green');

	if(!$('#rules-member').is(":checked"))
	{
		alert('شما باید فوانین را مطالعه کنید.');
	}else
	{
		$('.need').removeClass('need');
		$('#pay_member').attr('disabled','disabled');
		if($('#urlPay_member').val() !== '' && $('#emailPay_member').val() !== '' )
		{
			if($('#urlPay_member').val().match(' ') || $('#urlPay_member').val().match('/'))
			{
				if($('#urlPay_member').val() == '') $('#urlPay_member').addClass('need');
				if($('#emailPay_member').val() == '') $('#emailPay_member').addClass('need');
				$('#pay_member').removeAttr('disabled');
				alert('لطفا آدرس کانال صحیح نیست لطفا راهنما را مشاهده فرمایید').css('color','red');
			}else
			{
				if($('#urlPay_member').val().match('joinchat'))
				{
					if($('#urlPay_member').val() == '') $('#urlPay_member').addClass('need');
					if($('#emailPay_member').val() == '') $('#emailPay_member').addClass('need');
					$('#pay_member').removeAttr('disabled');
					alert('لطفا آدرس عمومی کانال را وارد کنید برای اینکار لطفا راهنما را مشاهده فرمایید').css('color','red');
				}else
				{
					if(validate_email($('#emailPay_member').val()))
					{
						localStorage.setItem("email", $('#emailPay_member').val());
						$('.formPay_member').submit();
						$('#pay_member').removeAttr('disabled');
						$('.close2').click();
					}else
					{
						$('#emailPay_member').addClass('need');
						$('#pay_member').removeAttr('disabled');
						alert('ایمیل شما معتبر نیست');
					}
				}
			}


		}else
		{
			if($('#urlPay_member').val() == '') $('#urlPay_member').addClass('need');
			if($('#emailPay_member').val() == '') $('#emailPay_member').addClass('need');
			$('#contactUs #result').html('لطفا موارد خواسته شده را وارد کنید').css('color','red');
			$('#pay_member').removeAttr('disabled');
		}
	}

});
$(document).on('change','.membercombo',function(e)
{
	var $value = $(this).val();
	$('.membercombo').val(member_pcks[$value].count);
	$('#packForm_val_member').val(member_pcks[$value].count);
	$('.freemem').text(member_pcks[$value].count/2);

	//$('#pck_fl').text(products[packages].like);
	//$('#pricePck_fl').text(products[packages].price);
	$('#member_oldPrice').text(formatNumber(member_pcks[$value].Fprice));
	$('#member_newPrice,#pricePck_member').text(formatNumber(member_pcks[$value].price));
});
/* member */
/* view */
$(document).on('click','.pckg_view_tg-foot a',function()
{
	showOrderPopUpview_tg($(this).attr("data-package"));
});

function showOrderPopUpview_tg(packages)
{
	$('#overlay').fadeIn(function()
	{
		$('#packForm_view_tg').val(packages);
		if(typeof localStorage['email'] !=='undefined') $('#emailPay_view_tg').val(localStorage['email']);
		$('#popup_view_tg').fadeIn();
	});
}
$(document).on('click','#pay_view_tg',function(e)
{
	e.preventDefault();
	$('#contactUs #result').html('').css('color','green');

	if(!$('#rules-view_tg').is(":checked"))
	{
		alert('شما باید فوانین را مطالعه کنید.');
	}else
	{
		$('.need').removeClass('need');
		$('#pay_view_tg').attr('disabled','disabled');
		if($('#urlPay_view_tg').val() !== '' && $('#emailPay_view_tg').val() !== '' )
		{
			if($('#urlPay_view_tg').val().match(' ') || $('#urlPay_view_tg').val().match('/'))
			{
				if($('#urlPay_view_tg').val() == '') $('#urlPay_view_tg').addClass('need');
				if($('#emailPay_view_tg').val() == '') $('#emailPay_view_tg').addClass('need');
				$('#pay_view_tg').removeAttr('disabled');
				alert('لطفا آدرس کانال صحیح نیست لطفا راهنما را مشاهده فرمایید').css('color','red');
			}else
			{
				if($('#urlPay_view_tg').val().match('joinchat'))
				{
					if($('#urlPay_view_tg').val() == '') $('#urlPay_view_tg').addClass('need');
					if($('#emailPay_view_tg').val() == '') $('#emailPay_view_tg').addClass('need');
					$('#contactUs #result').html('لطفا آدرس عمومی کانال را وارد کنید برای اینکار لطفا راهنما را مشاهده فرمایید').css('color','red');
					$('#pay_view_tg').removeAttr('disabled');
				}else
				{
					if(validate_email($('#emailPay_view_tg').val()))
					{
						localStorage.setItem("email", $('#emailPay_view_tg').val());
						$('.formPay_view_tg').submit();
						$('#pay_view_tg').removeAttr('disabled');
						$('.close2').click();
					}else
					{
						$('#emailPay_view_tg').addClass('need');
						$('#pay_view_tg').removeAttr('disabled');
						alert('ایمیل شما معتبر نیست');
					}
				}
			}


		}else
		{
			if($('#urlPay_view_tg').val() == '') $('#urlPay_view_tg').addClass('need');
			if($('#emailPay_view_tg').val() == '') $('#emailPay_view_tg').addClass('need');
			$('#contactUs #result').html('لطفا موارد خواسته شده را وارد کنید').css('color','red');
			$('#pay_view_tg').removeAttr('disabled');
		}
	}

});
$(document).on('change','.view_tgcombo',function(e)
{
	var $value = $(this).val();
	$('.view_tgcombo').val(view_tg_pcks[$value].count);
	$('#packForm_val_view_tg').val(view_tg_pcks[$value].count);
	//$('.freefl').text(fl_pcks[$value].count/2);

	//$('#pck_fl').text(products[packages].like);
	//$('#pricePck_fl').text(products[packages].price);
	$('#view_tg_oldPrice').text(formatNumber(view_tg_pcks[$value].Fprice));
	$('#view_tg_newPrice,#pricePck_view_tg').text(formatNumber(view_tg_pcks[$value].price));
});
/* view_tg */
$(document).on('submit','#contactUs',function(e)
{
	e.preventDefault();
	$('#contactUs #result').html('').css('color','green');
	$('.need').removeClass('need');
	if(!$('.btnWait').length)
	{
		$('#contactSubmit').addClass('btnWait');
		if($('#name').val() !== '' && $('#email').val() !== '' && $('#sub').val() !== '' && $('#msg').val() !== '' )
		{
			if(validate_email($('#email').val()))
			{
				var data = $(this).serialize();
				$.ajax({
					url: 'ajax/ajax.php?contact',
					type: 'post',
					dataType: 'html',
					async: true,
					data: data,
					success: function(result)
					{
						if(result == '1')
						{
							$('#contactSubmit').remove();
							$('#email').val('');
							$('#sub').val('');
							$('#msg').val('');
							$('#name').val('');
							$('#contactUs #result').html('پیام شما با موفقیت ثبت شد.در اولین فرصت با شما تماس خواهیم گرفت.').css('color','green');
						}else
						{
							$('#contactUs #result').html('مشکلی رخ داده لطفا بعدا تلاش کنید').css('color','red');
							$('#contactSubmit').removeClass('btnWait');
						}
					},
					error: function(result)
					{
						$('#contactUs #result').html('مشکلی رخ داده لطفا بعدا تلاش کنید').css('color','red');
						$('#contactSubmit').removeClass('btnWait');
					}
				});
			}else
			{
				$('#email').addClass('need');
				$('#contactUs #result').html('آدرس ایمیل وارد شده معتبر نیست.').css('color','red');
				$('#contactSubmit').removeClass('btnWait');
			}

		}else
		{
			$('#contactUs #result').html('لطفا موارد خواسته شده را وارد کنید').css('color','red');
			if($('#name').val() == '') $('#name').addClass('need');
			if($('#email').val() == '') $('#email').addClass('need');
			if($('#sub').val() == '') $('#sub').addClass('need');
			if($('#msg').val() == '') $('#msg').addClass('need');
			$('#contactSubmit').removeClass('btnWait');
		}
	}
});
function validate_email(str)
{
	var str = str.trim();
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if( !emailReg.test( str ) )
	{
		return false;
	}
	return true;
}

$(document).on('click','.factor',function()
{
	print(this);
});
function print(obj)
{
	var selector = $('#cart');

	$('input[type=text]',selector).each(function(){
		console.log($(this).val());
			$(this).attr('value',$(this).val());

	});
	var data = selector.html();


	var mywindow = window.open('', '', 'height=550,width=770');
	mywindow.document.write('\
    <html><head><title></title><style>\
    body{direction:rtl}\
    .factor{\
        background: #fff;\
        border: 1px solid #111;\
        clear: both;\
        color: #111;\
        padding: 5px;\
        width: 680px;\
        margin: 0 auto;\
        font-family: tahoma;\
    }\
    .print{display:none}\
    table{}\
    td,th{padding:10px;border:1px solid #333}\
    input{border: 0;}\
    </style>\
    ');
	//mywindow.document.write('<link rel="stylesheet" href="'+site_url+'css/all.css" type="text/css" />');
	mywindow.document.write('</head><body>');
	mywindow.document.write(data);
	mywindow.document.write('</body></html>');
	mywindow.document.close();
	mywindow.focus();
	mywindow.print();
	mywindow.close();
	return true;
}
function validateURL(textval) {
	var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
	return urlregex.test(textval);
}
$(document).on('change','.flcombo',function(e)
{
	var $value = $(this).val();
	$('.flcombo').val(fl_pcks[$value].count);
	$('#packForm_val').val(fl_pcks[$value].count);
	$('.freefl').text(fl_pcks[$value].count/2);

	//$('#pck_fl').text(products[packages].like);
	//$('#pricePck_fl').text(products[packages].price);
	$('#fl_oldPrice').text(formatNumber(fl_pcks[$value].Fprice));
	$('#fl_newPrice,#pricePck_fl').text(formatNumber(fl_pcks[$value].price));
});
$(document).on('change','.lcombo',function(e)
{
	var $value = $(this).val();
	$('#packForm_val_l').val($value);
	var index = $($(this)).prop('selectedIndex') + 1;
	$(this).closest('.package-body').find('.nPrice').text(formatNumber(products[5].price * index));
	$(this).closest('.package-body').find('.oldPrice').text(formatNumber(products[5].Fprice * index));

	$('#pricePck').attr('data-price',formatNumber(products[5].price * index));
	$('#pck').attr('data-price',(products[5].like * index));
});
$(document).on('change','.vcombo',function(e)
{
	var $value = $(this).val();
	$('#packForm_val_v').val($value);
	var index = $($(this)).prop('selectedIndex') + 1;
	$(this).closest('.package-body').find('.nPrice').text(formatNumber(products[12].price * index));
	$(this).closest('.package-body').find('.oldPrice').text(formatNumber(products[12].Fprice * index));

	$('#pricePck_view').attr('data-price',formatNumber(products[12].price * index));
	$('#pck_view').attr('data-price',(products[12].like * index));
});
function formatNumber(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}
$(document).on('click','.loggedIN',function(e){
	window.location.href='?add_credits';
});
$(document).on('click','.resellerLogin',function(e)
{
	$('#overlay').fadeIn(function()
	{
		$('#popup_login').fadeIn();
	});
});
$(document).on('click','.lv',function(e)
{
	$this = $(this);
	if($this.is('#viewpackages') && !$this.is('.active'))
	{
		$('#likeplans').fadeOut(function()
		{
			$('#viewplans').fadeIn();
		});
		$this.addClass('active');
		$('#likepackages').removeClass('active');
	}else if($this.is('#likepackages') && !$this.is('.active'))
	{
		$('#viewplans').fadeOut(function()
		{
			$('#likeplans').fadeIn();
		});
		$this.addClass('active');
		$('#viewpackages').removeClass('active');
	}
});
$(window).on('hashchange', function()
{
	var hash = window.location.hash;

	if(hash)
	{
		var hash = hash.replace("#!",'');
		var top = $('[data-hash="'+hash+'"]').offset().top;
		$('html,body').animate({ scrollTop: top }, "slow");
	}

});
$(document).on('keyup mouseup touchend','#urlPay_view_tg,#urlPay_member',function(e)
{
	$(this).next().find('i').text($(this).val());

});
$(document).on('click','.faq h4',function(e)
{

	if(!$(this).next().is(':visible'))
	{
		$('.faq div').slideUp();
		$(this).next().slideDown();
	}


});
$(document).on('click','.onlymobile.expand',function(e)
{
	var $this = $(this);
	if($this.text() == '▼'){
		$this.text('-');
		$this.parent().parent().find('li').slideDown();
	}
	else if($this.text() == '-'){
		$this.text('▼');
		$this.parent().parent().find('li').filter(':nth-child(n+2)').slideUp( "fast", function() {
			$this.parent().show();
		});
	}
});
$(document).on('click','.bank_holder > div',function(e)
{
	$('.bank-chosen').removeClass('bank-chosen');
	$(this).addClass('bank-chosen');
	$(this).find('input').prop("checked", true);

});
