function escapeHtml(text) {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };

  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}
function copyToClipboard(string) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val(string).select();
  document.execCommand("copy");
  $temp.remove();
	NewNotification("متن مورد نظر کپي شد.");
}
function eshterakShod() {
	NewNotification("حساب شما شارژ گردید.");
}
function eshterakNaShod() {
	NewNotification("عملیات شارژ حساب ناموفق بود.");
}
function topersiannumber(num){
	return String(num).replace(/1/g, "?").replace(/2/g, "?").replace(/3/g, "?").replace(/4/g, "?").replace(/5/g, "?").replace(/6/g, "?").replace(/7/g, "?").replace(/8/g, "?").replace(/9/g, "?").replace(/0/g, "?");
}
function reverseSTR(s){
    return s.split("").reverse().join("");
}
function NumberFormater(num){
    str=reverseSTR(String(num).replace(/,/g, ""));
    if (str!="") {
        ret="";
        morespace=0;
        for (var i = 0; i < Math.ceil(str.length/3); i++) {
            ret=ret+str.substring((i*3), (i*3)+3);
            if (str.length-(i*3)>3) {
                ret+=",";
                morespace++;
            }
        }
        return reverseSTR(ret);
    }
}

var rtlChar = /[\u0590-\u083F]|[\u08A0-\u08FF]|[\uFB1D-\uFDFF]|[\uFE70-\uFEFF]/mg;
function DirectionCorrector(element){
    var isRTL = element.innerHTML.match(rtlChar);
    if(isRTL !== null) {
        element.style.direction = 'rtl';
    }else{
        element.style.direction = 'ltr';
    }
}
Element.prototype.remove = function() {
	if (typeof(this.parentElement) != 'undefined' && this.parentElement != null) {
		this.parentElement.removeChild(this);
	}
    
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
function CloseThisNotification(obj){
	obj.style.opacity="0";
	obj.style.maxHeight=obj.clientHeight;
	obj.addEventListener("transitionend",function (event) {
		if (event.target.style.opacity=="0") {
			event.target.style.maxHeight="0px";
			event.target.style.margin="0px";
			event.target.style.padding="0px";
			event.target.addEventListener("transitionend",function (event) {
				if (event.target.style.maxHeight=="0px" && event.target.style.margin=="0px" && event.target.style.opacity=="0") {
					event.target.remove();
				}
			});
		}
		
	});
}
function NewNotification(text){
	var node = document.createElement("div");
	node.className="notification";
	node.innerHTML='<div class="text">'+text+'</div><div class="close" onclick="CloseThisNotification(this.parentElement)"><i class="material-icons">clear</i></div><div style="position: absolute; background: #00000069; height: 3px; width: 100%; right: 0; bottom: 0;"><div id="timeoutprogress" style="position: absolute;background: #ffffff4f;height: 100%;width: 0%;right: 0;bottom: 0;"></div></div>';
	node.style.opacity="0";
	node.style.animation="notificationalert 1.5s";
	document.getElementById("notificationholder").appendChild(node);
	$(node).find("#timeoutprogress").stop();
    $(node).find("#timeoutprogress").animate({
        width:"100%"
    },15000,"linear");
	setTimeout(function () {
		node.style.opacity="1";
	}, 1);
	setTimeout(function () {
		CloseThisNotification(node);
	}, 15000);
	
}
function ChangeSwitchValue(name,value){
	if (value==true) {
		$('#switch[data-value="'+name+'"]').find("#true").attr('class', 'yes active');
		$('#switch[data-value="'+name+'"]').find("#false").attr('class', 'no');
	}else{
		$('#switch[data-value="'+name+'"]').find("#true").attr('class', 'yes');
		$('#switch[data-value="'+name+'"]').find("#false").attr('class', 'no active');
	}
	if (value==true) {
		$('#switch[data-value="'+name+'"]').val(1);
	}else{
		$('#switch[data-value="'+name+'"]').val(0);
	}
}
var transactiondetailsshowed=false;
function showtransactiondetail(trid){
	if (transactiondetailsshowed==false) {
		transactiondetailsshowed=true
		$("#transactiondetails").css({'opacity': '1','pointer-events': 'unset'});
		$("#transactiondetails .holder").css({'opacity': '0','pointer-events': 'none'});
		$("#transactiondetails .loading").css({'opacity': '1','pointer-events': ''});
		$.ajax({
			url: "ajax.php?", 
			data: {
				transactioninfo: trid,
			},
			type: 'post',
			success: function(data){
				jsondata=JSON.parse(data);
				
				if (jsondata.ok==true) {
					$("#transactiondetails .name #value").html(escapeHtml(jsondata.data.name));
					$("#transactiondetails .amount #value").html(NumberFormater(jsondata.data.amount));
					$("#transactiondetails .moreinfo input[name='name']").val(jsondata.data.name);
					$("#transactiondetails .moreinfo #date").html(jsondata.data.date);
					$("#transactiondetails .moreinfo #transactionid").html(jsondata.data.transactionid);
					$("#transactiondetails .moreinfo #number").html(jsondata.data.number);
					$("#transactiondetails .moreinfo #email").html(jsondata.data.email);
					$("#transactiondetails .moreinfo #ipaddr").html(jsondata.data.ip);
					/*$("#transactiondetails .moreinfo #cardnum").html(jsondata.data.cardnum);*/
					//$("#transactiondetails .moreinfo #goal").html(jsondata.data.goal);
					ChangeSwitchValue("hidden",jsondata.data.hidden);
					ChangeSwitchValue("showindonatorlist",jsondata.data.showindonatorlist);
					$("#transactiondetails .moreinfo textarea[name='description']").val(escapeHtml(jsondata.data.description));
					$("#transactiondetails").scrollTop(0);
					$("#transactiondetails .holder").css({'opacity': '1','pointer-events': ''});
					$("#transactiondetails .loading").css({'opacity': '0','pointer-events': 'none'});
					
				}else{
					transactiondetailsshowed=false;
					$("#transactiondetails").css({'opacity': '0','pointer-events': 'none'});
					$("#transactiondetails .holder").css({'opacity': '0','pointer-events': ''});
					NewNotification(jsondata.desc);
				}
				
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				transactiondetailsshowed=false;
				console.log('status:' + XMLHttpRequest.status + ', status text: ' + XMLHttpRequest.statusText);
				NewNotification("مشکلي پيش آمده! اگر اطمينان داريد مشکل از طرف شما نيست به پشتيباني گزارش کنيد. E781");
				$("#transactiondetails").css({'opacity': '0','pointer-events': 'none'});
				$("#transactiondetails .holder").css({'opacity': '0','pointer-events': ''});
			}
		});
	}
}
var switchfunctions = {
    goalenable: function (stat) {
        if (stat==true) {
        	$(".settings form#goal input[name='goaltitle']").attr("required", true);
        	$(".settings form#goal input[name='goalamount']").attr("required", true);
        	$(".settings form#goal .goaldetailsholder")[0].style.opacity="1";
		}else{
			$(".settings form#goal input[name='goaltitle']").removeAttr('required');
			$(".settings form#goal input[name='goalamount']").removeAttr('required');
			$(".settings form#goal .goaldetailsholder")[0].style.opacity="0.5";
		}
    }
};
$(document).ready(function(){
	$("#switch #false").mousedown(function(event){
	    $(this.parentElement).find("#true").attr('class', 'yes');
	    $(this).attr('class', 'no active');
	    $(this.parentElement).val(0);
	    if (typeof switchfunctions[$(this.parentElement).data("value")] !== "undefined") { 
	       switchfunctions[$(this.parentElement).data("value")](false);
	    }
	});
	$(".selectme").click(function(event){
		$(event.target).select();
	});
	$("#switch #true").mousedown(function(event){
	    $(this.parentElement).find("#false").attr('class', 'no');
	    $(this).attr('class', 'yes active');
	    $(this.parentElement).val(1);
	    if (typeof switchfunctions[$(this.parentElement).data("value")] !== "undefined") { 
	       switchfunctions[$(this.parentElement).data("value")](true);
	    }
	});
	$('*').not('#switch *,button *').click(function(event){
	   event.stopPropagation();
	});
	$(".details button#cancel,#transactiondetails").click(function(event){
		transactiondetailsshowed=false
		$("#transactiondetails").css({'opacity': '0','pointer-events': 'none'});
		$("#transactiondetails .holder").css({'opacity': '0','pointer-events': ''});
	});
	$(".details button#save").click(function(event){
	    $("#transactiondetails .holder").css({'opacity': '0','pointer-events': 'none'});
	    $("#transactiondetails .loading").css({'opacity': '1','pointer-events': ''});
	    
	    $.ajax({
			url: "ajax.php?", 
			data: {
				changetransactioninfo: $("#transactiondetails .moreinfo #transactionid").html(),
				name: $("#transactiondetails .moreinfo input[name='name']").val(),
				description: $("#transactiondetails .moreinfo textarea[name='description']").val(),
				showindonatorlist: $('#transactiondetails .moreinfo #switch[data-value="showindonatorlist"]').val(),
				hidden: $('#transactiondetails .moreinfo #switch[data-value="hidden"]').val()
			},
			type: 'post',
			success: function(data){
				jsondata=JSON.parse(data);
				if (jsondata.ok==true) {
					transactiondetailsshowed=false
					$("#transactiondetails").css({'opacity': '0','pointer-events': 'none'});
					$("#transactiondetails .holder").css({'opacity': '0','pointer-events': ''});
					$('.transaction table tr[data-transactionid="'+$("#transactiondetails .moreinfo #transactionid").html()+'"] .namecol').html(escapeHtml($("#transactiondetails .moreinfo input[name='name']").val()));
					$('.transaction table tr[data-transactionid="'+$("#transactiondetails .moreinfo #transactionid").html()+'"] .detailcol').html(escapeHtml($("#transactiondetails .moreinfo textarea[name='description']").val()));
					NewNotification('<i class="material-icons">check</i> تراکنش با موفقيت ويرايش شد.');
				}else{
					NewNotification(jsondata.desc);
					$("#transactiondetails .holder").css({'opacity': '1','pointer-events': ''});
					$("#transactiondetails .loading").css({'opacity': '0','pointer-events': 'none'});
				}
				
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				console.log('status:' + XMLHttpRequest.status + ', status text: ' + XMLHttpRequest.statusText);
				NewNotification("مشکلي پيش آمده! اگر اطمينان داريد مشکل از طرف شما نيست به پشتيباني گزارش کنيد.");
				$("#transactiondetails .holder").css({'opacity': '1','pointer-events': ''});
				$("#transactiondetails .loading").css({'opacity': '0','pointer-events': 'none'});
			}
		});
	});
	$(".details button#showagain").click(function(event){
	    $("#transactiondetails .holder").css({'opacity': '0','pointer-events': 'none'});
	    $("#transactiondetails .loading").css({'opacity': '1','pointer-events': ''});
	    
	    $.ajax({
			url: "ajax.php?", 
			data: {
				showtanscationagain: $("#transactiondetails .moreinfo #transactionid").html(),
			},
			type: 'post',
			success: function(data){
				jsondata=JSON.parse(data);
				if (jsondata.ok==true) {
					transactiondetailsshowed=false
					$("#transactiondetails").css({'opacity': '0','pointer-events': 'none'});
					$("#transactiondetails .holder").css({'opacity': '0','pointer-events': ''});
					NewNotification('<i class="material-icons">check</i> تراکنش دوباره نشان داده خواهد شد.');
				}else{
					NewNotification(jsondata.desc);
					$("#transactiondetails .holder").css({'opacity': '1','pointer-events': ''});
					$("#transactiondetails .loading").css({'opacity': '0','pointer-events': 'none'});
				}
				
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				console.log('status:' + XMLHttpRequest.status + ', status text: ' + XMLHttpRequest.statusText);
				NewNotification("مشکلي پيش آمده! اگر اطمينان داريد مشکل از طرف شما نيست به پشتيباني گزارش کنيد.");
				$("#transactiondetails .holder").css({'opacity': '1','pointer-events': ''});
				$("#transactiondetails .loading").css({'opacity': '0','pointer-events': 'none'});
			}
		});
	});
	$(".sidebar #tools").click(function(event){
		if ($('.sidebar [data-for="tools"]').css("opacity")=="0") {
			$('.sidebar [data-for="tools"]').css({"opacity": "1","maxHeight": "340px"});
		}else{
			$('.sidebar [data-for="tools"]').css({"opacity": "0","maxHeight": "0"});
		}
	});
	$(".sidebar #hidesidebar").click(function(event){
		$('.main').css("margin","0px 20px 0px 20px");
		$('.sidebar').css("opacity","0");
		$('.sidebar').css("pointer-events","none");
		$('.sidebar').css("right","-100px");
		$('#showsidebar').css("opacity","1");
		$('#showsidebar').css("pointer-events","");
	});
	$("#showsidebar").click(function(event){
		$('.main').css("margin","0px 270px 0px 20px");
		$('.sidebar').css("opacity","1");
		$('.sidebar').css("pointer-events","");
		$('.sidebar').css("right","0");
		$('#showsidebar').css("opacity","0");
		$('#showsidebar').css("pointer-events","none");
	});
	
	$(".transaction button#showdetails").on('click dblclick',function(event){
		showtransactiondetail($(event.currentTarget).data('transactionid'));
	});
	$(".transaction tbody tr").dblclick(function(event){
		showtransactiondetail($(event.currentTarget).data('transactionid'));
	});
	$(".transaction .loadmore button#loadmore").click(function(event){
	    $(".transaction .loadmore button#loadmore").css({'display': 'none'});
	    $(".transaction .loadmore img").css({'display': 'inline-block'});
	    $.ajax({
			url: "ajax.php?", 
			data: {
				loadpage: $(this).data('page'),
				from: $(this).data('time'),
			},
			type: 'post',
			success: function(data){
				jsondata=JSON.parse(data);
				if (jsondata.ok==true) {
					$('.transaction table tbody').append(jsondata.data.body);
					$(".transaction button#showdetails").on('click dblclick',function(event){
						showtransactiondetail($(event.currentTarget).data('transactionid'));
					});
					$(".transaction tbody tr").dblclick(function(event){
						showtransactiondetail($(event.currentTarget).data('transactionid'));
					});
					$(".transaction .loadmore button#loadmore").css({'display': 'inline-block'});
					$(".transaction .loadmore img").css({'display': 'none'});
					if (jsondata.data.next==true) {
						$(".transaction .loadmore button#loadmore").data('page',($(".transaction .loadmore button#loadmore").data('page')+1));
					}else{
						$(".transaction .loadmore button#loadmore").remove();
					}
				}else{
					NewNotification(jsondata.desc);
				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				console.log('status:' + XMLHttpRequest.status + ', status text: ' + XMLHttpRequest.statusText);
				NewNotification("مشکلي پيش آمد! به پشتيباني گزارش کنيد.");
			}
		});
	});
	$(".settings input[name='NewAvatar']").change(function(event){

		if ($(this)[0].files[0].size<1000000 && (
		($(this)[0].files[0].type == "image/gif")
		|| ($(this)[0].files[0].type == "image/jpeg")
		|| ($(this)[0].files[0].type == "image/jpg")
		|| ($(this)[0].files[0].type == "image/pjpeg")
		|| ($(this)[0].files[0].type == "image/x-png")
		|| ($(this)[0].files[0].type == "image/png"))) {
			var formData = new FormData();
			formData.append('file', $(".settings input[name='NewAvatar']")[0].files[0]);
			formData.append("newavatar", "1");
			$(".settings #AvatarUploadProgress")[0].style.display="block";
 	        $(".settings #AvatarUploadProgress").html('<img src="loading.svg" style="width: 30px;vertical-align: middle;"> 0%');
			$.ajax({
				xhr: function()
			 	  {
			 	    var xhr = new window.XMLHttpRequest();
			 	    //Upload progress
			 	    xhr.upload.addEventListener("progress", function(evt){
			 	      if (evt.lengthComputable) {
			 	        var percentComplete = evt.loaded / evt.total;
			 	        $(".settings #AvatarUploadProgress")[0].style.display="block";
			 	        $(".settings #AvatarUploadProgress").html('<img src="loading.svg" style="width: 30px;vertical-align: middle;"> در حال آپلود ('+Math.floor(percentComplete*100)+"%)");
			 	      }
			 	    }, false);

			 	    return xhr;
			 	  },
				url: "ajax.php?", 
				data: formData,
				type: 'post',
				processData: false,
			 	contentType: false,
			 	
				success: function(data){
					$(".settings #AvatarUploadProgress")[0].style.display="none";
					jsondata=JSON.parse(data);
					if (jsondata.ok==true) {
						NewNotification(jsondata.desc);
						$(".avatar").each(function(){
							if ($(this).attr("src").indexOf('?') > -1)
							{
								$(this).attr("src", $(this).attr("src")+"&timestamp=" + new Date().getTime());
							}else{
								$(this).attr("src", $(this).attr("src")+"?timestamp=" + new Date().getTime());
							}
							
						});
					}else{
						NewNotification(jsondata.desc);
						$(".settings #AvatarUploadProgress")[0].style.display="none";
					}
				},
				error: function(XMLHttpRequest, textStatus, errorThrown){
					console.log('status:' + XMLHttpRequest.status + ', status text: ' + XMLHttpRequest.statusText);
					NewNotification("مشکلي پيش آمده! اگر اطمينان داريد مشکل از طرف شما نيست به پشتيباني گزارش کنيد.");
					$(".settings #AvatarUploadProgress")[0].style.display="none";
				}
			});
		}else{
			NewNotification("فايل نامعتبر است. تصوير بايد زير 1MB و با فرمت مجاز باشد");
		}
		
	});
	$(".settings form#changeavatar").submit(function(event){
	   	$(".settings #xInfoChangeProgressx")[0].style.display="block";
	   	$(".settings #xInfoChangeProgressx").html('<img src="loading.svg" style="width: 30px;vertical-align: middle;"> در حال اعمال تغييرات');
	    
	    $.ajax({
			url: "ajax.php?", 
			data: {
				avurl: $(".settings input[name='avurl']").val()
			},
			type: 'post',
			success: function(data){
				$(".settings #xInfoChangeProgressx")[0].style.display="none";
				jsondata=JSON.parse(data);
				NewNotification(jsondata.desc);
				if (jsondata.ok==true) {
					document.getElementById("avatarid").src = $(".settings input[name='avurl']").val();
					document.getElementById("avataridx").src = $(".settings input[name='avurl']").val();
				}else{
					
				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				console.log('status:' + XMLHttpRequest.status + ', status text: ' + XMLHttpRequest.statusText);
				NewNotification("مشکلي پيش آمده! اگر اطمينان داريد مشکل از طرف شما نيست به پشتيباني گزارش کنيد.");
				$(".settings #xInfoChangeProgressx")[0].style.display="none";
			}
		});
	});
	$(".settings form#changeinformations").submit(function(event){
	   	$(".settings #InfoChangeProgress")[0].style.display="block";
	   	$(".settings #InfoChangeProgress").html('<img src="loading.svg" style="width: 30px;vertical-align: middle;"> در حال اعمال تغييرات');
	    
	    $.ajax({
			url: "ajax.php?", 
			data: {
				changeuserinfos: '1',
				name: $(".settings input[name='name']").val(),
				zarinpalmerchid: $(".settings input[name='zarinpalmerchid']").val(),
				email: $(".settings input[name='email']").val(),
				number: $(".settings input[name='number']").val(),
				password: $(".settings input[name='password']").val(),
				repass: $(".settings input[name='repass']").val(),
				newpayurl: $(".settings input[name='link']").val(),
				currentpass: $(".settings input[name='currentpass']").val()
			},
			type: 'post',
			success: function(data){
				$(".settings #InfoChangeProgress")[0].style.display="none";
				jsondata=JSON.parse(data);
				NewNotification(jsondata.desc);
				if (jsondata.ok==true) {
					$(".settings input[name='password']").val("");
					$(".settings input[name='repass']").val("");
					$(".settings input[name='currentpass']").val("");
				}else{
					
				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				console.log('status:' + XMLHttpRequest.status + ', status text: ' + XMLHttpRequest.statusText);
				NewNotification("مشکلي پيش آمده! اگر اطمينان داريد مشکل از طرف شما نيست به پشتيباني گزارش کنيد.");
				$(".settings #InfoChangeProgress")[0].style.display="none";
			}
		});
	});
	
	$(".settings form#donationalert").submit(function(event){
	   	$(".settings #InfoChangeProgress")[0].style.display="block";
	   	$(".settings #InfoChangeProgress").html('<img src="loading.svg" style="width: 30px;vertical-align: middle;"> در حال اعمال تغييرات');
	    
	    $.ajax({
			url: "ajax.php?", 
			data: {
				gifmode: $(".settings select[name='gifmode']").val(),
				gifbmode: $(".settings select[name='gifbmode']").val(),				
				musicmode: $(".settings select[name='musicmode']").val(),				
				igifurl: $(".settings input[name='igifurl']").val(),
				igifurlb: $(".settings input[name='igifurlb']").val(),
				ibgurl: $(".settings input[name='ibgurl']").val(),
				imusicurl: $(".settings input[name='imusicurl']").val(),
				audiovol: $(".settings input[name='audiovol']").val(),
				ialertwait: $(".settings input[name='ialertwait']").val(),
				ihnamewait: $(".settings input[name='ihnamewait']").val()
			},
			type: 'post',
			success: function(data){
				$(".settings #InfoChangeProgress")[0].style.display="none";
				jsondata=JSON.parse(data);
				NewNotification(jsondata.desc);
				if (jsondata.ok==true) {
					
				}else{
					
				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				console.log('status:' + XMLHttpRequest.status + ', status text: ' + XMLHttpRequest.statusText);
				NewNotification("مشکلي پيش آمده! اگر اطمينان داريد مشکل از طرف شما نيست به پشتيباني گزارش کنيد.");
				$(".settings #InfoChangeProgress")[0].style.display="none";
			}
		});
	});


	$(".settings form#changeportal").submit(function(event){
		$(".settings #PortalChangeProgress")[0].style.display="block";
		$(".settings #PortalChangeProgress").html('<img src="loading.svg" style="width: 30px;vertical-align: middle;"> در حال اعمال تغييرات');
		$.ajax({
			url: "ajax.php?", 
			data: {
				changeportal: '1',
				bgimg: $(".settings input[name='bgimg']").val(),
				patterninp: $(".settings input[name='patterninp']").val(),
				fcolor: $(".settings input[name='fcolor']").val(),
				scolor: $(".settings input[name='scolor']").val(),
				limit: $(".settings input[name='limit']").val(),
				maxlimit: $(".settings input[name='maxlimit']").val(),
				portal: $(".settings select[name='portal']").val(),
				showgoal: $(".settings #switch[data-value='showgoal']").val(),
				showdonatorlist: $(".settings #switch[data-value='showdonatorlist']").val(),
				iejname: $(".settings #switch[data-value='iejname']").val(),
				iejnumber: $(".settings #switch[data-value='iejnumber']").val(),
				maxamountagree: $(".settings input[name='maxamountagree']").is(':checked') ? 1 : 0,
				desc: $(".settings textarea[name='desc']").val(),
				links: $(".settings textarea[name='links']").val()

			},
			type: 'post',
			success: function(data){
				$(".settings #PortalChangeProgress")[0].style.display="none";
				jsondata=JSON.parse(data);
				NewNotification(jsondata.desc);
				if (jsondata.ok==true) {
				}else{
					$(".settings #PortalChangeProgress")[0].style.display="none";
				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				console.log('status:' + XMLHttpRequest.status + ', status text: ' + XMLHttpRequest.statusText);
				NewNotification("مشکلي پيش آمده! اگر اطمينان داريد مشکل از طرف شما نيست به پشتيباني گزارش کنيد.");
				$(".settings #PortalChangeProgress")[0].style.display="none";
			}
		});
	});

	$(".settings form#goal").submit(function(event){
		$(".settings #GoalChangeProgress")[0].style.display="block";
		$(".settings #GoalChangeProgress").html('<img src="loading.svg" style="width: 30px;vertical-align: middle;"> در حال اعمال تغييرات');
		$.ajax({
			url: "ajax.php?", 
			data: {
				goal: '1',
				goalenable: $(".settings #switch[data-value='goalenable']").val(),
				goaltitle: $(".settings input[name='goaltitle']").val(),
				goalamount: $(".settings input[name='goalamount']").val(),
				goalboost: $(".settings input[name='goalboost']").val(),
				hadafcol: $(".settings input[name='hadafcol']").val(),
				hnoe: $(".settings select[name='hnoe']").val()
			},
			type: 'post',
			success: function(data){
				$(".settings #GoalChangeProgress")[0].style.display="none";
				jsondata=JSON.parse(data);
				NewNotification(jsondata.desc);
				if (jsondata.ok==true) {
				}else{
					$(".settings #GoalChangeProgress")[0].style.display="none";
				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				console.log('status:' + XMLHttpRequest.status + ', status text: ' + XMLHttpRequest.statusText);
				NewNotification("مشکلي پيش آمده! اگر اطمينان داريد مشکل از طرف شما نيست به پشتيباني گزارش کنيد.");
				$(".settings #GoalChangeProgress")[0].style.display="none";
			}
		});
	});
	$(".tools form#resetgoal").submit(function(event){
		$(".tools #ResetGoalProgress")[0].style.display="block";
		$(".tools #ResetGoalProgress").html('<img src="loading.svg" style="width: 30px;vertical-align: middle;"> در حال اعمال تغييرات');
		$.ajax({
			url: "ajax.php?", 
			data: {
				resetgoalcurrentpass: $(".tools input[name='resetgoalcurrentpass']").val()
			},
			type: 'post',
			success: function(data){
				$(".tools #ResetGoalProgress")[0].style.display="none";
				jsondata=JSON.parse(data);
				NewNotification(jsondata.desc);
				if (jsondata.ok==true) {
					$(".tools input[name='resetgoalcurrentpass']").val("");
				}else{
					$(".tools #ResetGoalProgress")[0].style.display="none";
				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				console.log('status:' + XMLHttpRequest.status + ', status text: ' + XMLHttpRequest.statusText);
				NewNotification("مشکلي پيش آمده! اگر اطمينان داريد مشکل از طرف شما نيست به پشتيباني گزارش کنيد.");
				$(".tools #ResetGoalProgress")[0].style.display="none";
			}
		});
	});

	$(".colorpicker").each(function(){
		$(this).spectrum({
		    color: this.value,
		    flat: false,
		    showInput: true,
		    className: "full-spectrum",
		    showInitial: true,
		    showPalette: true,
		    showSelectionPalette: true,
		    maxPaletteSize: 10,
		    preferredFormat: "hex",
		    localStorageKey: "spectrum.demo",
		    move: function (color) {
		        
		    },
		    show: function () {
		    	
		    },
		    beforeShow: function () {
		    	
		    },
		    hide: function (color) {
		    	
		    },
		    change: function(color) {
		        
		    },
		    palette: [
		        ["rgb(0, 0, 0)","rgb(255, 255, 255)"],
		        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
		        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"], 
		        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", 
		        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", 
		        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", 
		        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", 
		        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", 
		        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
		        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
		        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
		        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", 
		        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
		    ]
		});
		
	});
	
	$(".fileselecttype #gifmode").change(function(){
	    if ($(this).val()=="none") {
			document.getElementById("igifurl").style.display = "none";
			document.getElementById("migifurl").style.display = "none";
	    }else{
			document.getElementById("igifurl").style.display = "";
			document.getElementById("migifurl").style.display = "";
			if ($(this).val()=="local") {
				$("#migifurl .sharingappselectorshow").css('display','');
				$("#migifurl #igifurl").css('width','400px');
			}else
			{
				$("#migifurl .sharingappselectorshow").css('display','none');
				$("#migifurl #igifurl").css('width','100%');				
			}
	    }
	});
	
	$("#musicmode").change(function(){
	    if ($(this).val() == "none" || $(this).val() == "voice") {
			$("#musicinputholder").css('display','none');
	    }else{
			$("#musicinputholder").css('display','');
	    }
		if($(this).val() == "link")
		{
			$("#imusicurl").css('width','');
			$("#musicfileselector").css('display','none');
		}else if($(this).val() == "local")
		{
			$("#imusicurl").css('width','400px');
			$("#musicfileselector").css('display','');
		}
		if($(this).val() == "voice") {
			$("#etebarwordsxxx").css('display','');
		}else
		{
			$("#etebarwordsxxx").css('display','none');
		}
	});
	
	$(".fileselecttype #gifbmode").change(function(){
	    if ($(this).val()=="none") {
			document.getElementById("igifurlb").style.display = "none";
			document.getElementById("migifurlb").style.display = "none";
	    }else{
			document.getElementById("igifurlb").style.display = "";
			document.getElementById("migifurlb").style.display = "";
			if ($(this).val()=="local") {
				$("#migifurlb .sharingappselectorshow").css('display','');
				$("#migifurlb #igifurlb").css('width','400px');
			}else
			{
				$("#migifurlb .sharingappselectorshow").css('display','none');
				$("#migifurlb #igifurlb").css('width','100%');
			}
	    }
	});
	
	$(".tools #revoke").click(function(event){
		$.ajax({
			url: "ajax.php?", 
			data: {
				revoke: $(event.currentTarget).data("revoke")
			},
			type: 'post',
			success: function(data){
				jsondata=JSON.parse(data);
				NewNotification(jsondata.desc);
				if (jsondata.ok==true) {
					$(event.currentTarget).parent().find('input#toollink').val("https://sibmo.ir/overlay/?key="+jsondata.newkey)
				}else{

				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				console.log('status:' + XMLHttpRequest.status + ', status text: ' + XMLHttpRequest.statusText);
				NewNotification("مشکلي پيش آمده! اگر اطمينان داريد مشکل از طرف شما نيست به پشتيباني گزارش کنيد.");
			}
		});
	});
	$(".tools form#alertimages button").click(function(event){
		
		$.ajax({
			url: "ajax.php?", 
			data: {
				alertimages: "1",
				middleimagetype: $(".tools form#alertimages select[name='middleimagetype']").val(),
				middleimagefiletype: $(".tools form#alertimages select[name='middleimagefiletype']").val(),
				middleimage: $(".tools form#alertimages input[name='middleimage']").val(),
				topimagetype: $(".tools form#alertimages select[name='topimagetype']").val(),
				topimagefiletype: $(".tools form#alertimages select[name='topimagefiletype']").val(),
				topimage: $(".tools form#alertimages input[name='topimage']").val(),
				bottomimagetype: $(".tools form#alertimages select[name='bottomimagetype']").val(),
				bottomimagefiletype: $(".tools form#alertimages select[name='bottomimagefiletype']").val(),
				bottomimage: $(".tools form#alertimages input[name='bottomimage']").val(),
				rightimagetype: $(".tools form#alertimages select[name='rightimagetype']").val(),
				rightimagefiletype: $(".tools form#alertimages select[name='rightimagefiletype']").val(),
				rightimage: $(".tools form#alertimages input[name='rightimage']").val(),
				leftimagetype: $(".tools form#alertimages select[name='leftimagetype']").val(),
				leftimagefiletype: $(".tools form#alertimages select[name='leftimagefiletype']").val(),
				leftimage: $(".tools form#alertimages input[name='leftimage']").val(),
				afterdescimagetype: $(".tools form#alertimages select[name='afterdescimagetype']").val(),
				afterdescimagefiletype: $(".tools form#alertimages select[name='afterdescimagefiletype']").val(),
				afterdescimage: $(".tools form#alertimages input[name='afterdescimage']").val()
			},
			type: 'post',
			success: function(data){
				jsondata=JSON.parse(data);
				NewNotification(jsondata.desc);
				if (jsondata.ok==true) {
					
				}else{

				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				console.log('status:' + XMLHttpRequest.status + ', status text: ' + XMLHttpRequest.statusText);
				NewNotification("مشکلي پيش آمده! اگر اطمينان داريد مشکل از طرف شما نيست به پشتيباني گزارش کنيد.");
			}
		});
	});
	$(".tools form#alertsettings button").click(function(event){
		
		$.ajax({
			url: "ajax.php?", 
			data: {
				alertsettings: "1",
				audiotype: $(".tools form#alertsettings select[name='audiotype']").val(),
				audio: $(".tools form#alertsettings input[name='audio']").val(),
				audiovol: $(".tools form#alertsettings input[name='audiovol']").val(),
				staytime: $(".tools form#alertsettings input[name='staytime']").val(),
				detaildelay: $(".tools form#alertsettings input[name='detaildelay']").val(),
				descdelay: $(".tools form#alertsettings input[name='descdelay']").val()
			},
			type: 'post',
			success: function(data){
				jsondata=JSON.parse(data);
				NewNotification(jsondata.desc);
				if (jsondata.ok==true) {
					
				}else{

				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				console.log('status:' + XMLHttpRequest.status + ', status text: ' + XMLHttpRequest.statusText);
				NewNotification("مشکلي پيش آمده! اگر اطمينان داريد مشکل از طرف شما نيست به پشتيباني گزارش کنيد.");
			}
		});
	});
	$(".tools form#alertstyles button").click(function(event){
		$.ajax({
			url: "ajax.php?", 
			data: {
				alertstyles: "1",
				verticalalign: $(".tools form#alertstyles select[name='verticalalign']").val(),
				horizontalalign: $(".tools form#alertstyles select[name='horizontalalign']").val(),
				"padding-top": $(".tools form#alertstyles input[name='padding-top']").val(),
				"padding-right": $(".tools form#alertstyles input[name='padding-right']").val(),
				"padding-left": $(".tools form#alertstyles input[name='padding-left']").val(),
				"padding-bottom": $(".tools form#alertstyles input[name='padding-bottom']").val()
			},
			type: 'post',
			success: function(data){
				jsondata=JSON.parse(data);
				NewNotification(jsondata.desc);
				if (jsondata.ok==true) {
					
				}else{

				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				console.log('status:' + XMLHttpRequest.status + ', status text: ' + XMLHttpRequest.statusText);
				NewNotification("مشکلي پيش آمده! اگر اطمينان داريد مشکل از طرف شما نيست به پشتيباني گزارش کنيد.");
			}
		});
	});
	$(".tools form#Ltoolsettings button").click(function(event){
		$.ajax({
			url: "ajax.php?", 
			data: {
				Ltoolsettings: "1",
				sumallsamenames: $('.tools form#Ltoolsettings #switch[data-value="sumallsamenames"]').val()
			},
			type: 'post',
			success: function(data){
				jsondata=JSON.parse(data);
				NewNotification(jsondata.desc);
				if (jsondata.ok==true) {
					
				}else{

				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				console.log('status:' + XMLHttpRequest.status + ', status text: ' + XMLHttpRequest.statusText);
				NewNotification("مشکلي پيش آمده! اگر اطمينان داريد مشکل از طرف شما نيست به پشتيباني گزارش کنيد.");
			}
		});
	});
	$(".tools form#showtestdoantion button").click(function(event){
		$.ajax({
			url: "ajax.php?", 
			data: {
				showtestalert: "1",
				"amount": $(".tools form#showtestdoantion input[name='testamount']").val()
			},
			type: 'post',
			success: function(data){
				jsondata=JSON.parse(data);
				NewNotification(jsondata.desc);
				if (jsondata.ok==true) {

				}else{

				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				console.log('status:' + XMLHttpRequest.status + ', status text: ' + XMLHttpRequest.statusText);
				NewNotification("مشکلي پيش آمده! اگر اطمينان داريد مشکل از طرف شما نيست به پشتيباني گزارش کنيد.");
			}
		});
	});
});




var defaultSettings = 'fa';
(function( $ ){
	
  $.fn.persiaNumber = function(settings) {
	  if(typeof(settings) == 'string' && settings.length > 0)
		  defaultSettings = settings;
	  var range = 1728;
	  if(settings == 'ar'){
		  range = 1584;
	  }
	  window.persiaNumberedDOM = this;
	  convert(this, range);
	  $(document).ajaxComplete(function(){
		  var thisObj = window.persiaNumberedDOM;
		  convert(thisObj, range);
	  });
	function convert(obj, range){
		  obj.find("*").andSelf().contents().each(function() {
			    if (this.nodeType === 3 && this.parentNode.localName != "style" && this.parentNode.localName != "script") {
				    this.nodeValue = this.nodeValue.replace(this.nodeValue.match(/[0-9]*\.[0-9]+/), function(txt){
					    return txt.replace(/\./,',');
					});		    	
			        this.nodeValue = this.nodeValue.replace(/\d/g, function(v) {
			            return String.fromCharCode(v.charCodeAt(0) + range);
			        });
			    }
			});		
	}  
};
})( jQuery );
