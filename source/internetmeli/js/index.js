var base_url = 'http://79.175.138.118',
    serviceIdOne = 11,
    serviceIdTwo = 2,
    otpRequestUrl = base_url + "/Otp/LandingSubscribeRequest",
    otpConfirmUrl = base_url + "/Otp/LandingSubscribeConfirm",
    campaignIdOne = 22,
    campaignIdTwo =18,
    transactionId = -1;

function showErrorMessage(message, delay) {
    var $error = $("#error");
    $error.html(message);
    $error.fadeIn();
    $error.addClass('shake');
    setTimeout(function () {
        $error.fadeOut();
        $error.removeClass('shake');
    }, 3000);
    return;
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

var queryString;
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash_i = hashes[i].toLowerCase();
        hash = hash_i.split('=');
        vars.push(hash[0].toLowerCase());
        vars[hash[0]] = hash[1]
    }
    queryString = vars;
}

$().ready(function () {
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = function () {
        window.history.pushState(null, "", window.location.href);
    }

    function disablePrev() { window.history.forward() }
    window.onload = disablePrev();
    window.onpageshow = function (evt) { if (evt.persisted) disableBack() }
});

$(document).ready(function () {
    getUrlVars();
   
    $("#phoneNumber").val(queryString['mobilenumber']);
    var mobileNumber = '';
    $("#subscribeRequest, .arowBtn").click(function () {
        var $this = $(this);
        mobileNumber = $("#usermobile").val();

        if (mobileNumber.length != 11 || !mobileNumber.toString().startsWith("09")) {
            showErrorMessage("لطفا شماره موبایل خود را به صورت صحیح وارد نمایید");
            return;
        }

        if (mobileNumber.toString().startsWith("093")) {
            showErrorMessage("مشترک گرامی این سرویس برای همراه اول می باشد");
            return;
        }
        $("#overlay").removeClass('hide');
        var settings = {
            "url": otpRequestUrl,
            "method": "POST",
            "data": {
                "mobileNumber": mobileNumber,
                "Channel": queryString['channel'],
                serviceId: serviceIdOne,
                campaignId: campaignIdOne
            }
        }
        $.ajax(settings).done(function (response) {
            $("#overlay").addClass('hide');
            if (response.IsSuccessful) {
                if (response.Result == -1) {
                    window.location.replace("./success.html?channel=" + queryString['channel'] + "&mobileNumber=" + mobileNumber);
                }
                else {
                    $("#step1").addClass('hide');
                   
                    $("#step2").removeClass('hide');
                    $("#stepCount2").removeClass('hide');
                    transactionId = response.Result;
                }
            } else {
                showErrorMessage(response.Message);
            }
        }).fail(function () {
            $("#overlay").addClass('hide');

            console.log("#subscribeRequest error");
            showErrorMessage("متاسفانه درخواست با خطا مواجه شد لطفا مجددا تلاش نمایید");
        });
    });
    $("#subscribeConfirm").click(function () {
        if ($("#validcode").val().length != 4) {
            showErrorMessage("لطفا کد 4 رقمی پیامک شده را وارد نمایید");
            return;
        }
        $("#overlay").removeClass('hide');
        var model = {
            ServiceId: serviceIdOne,
            TransactionId: transactionId,
            pin: $("#validcode").val()
        };
        $.ajax({
            type: "POST",
            url: otpConfirmUrl,
            data: model,
            type: "POST",
            success: function (result) {
                $("#overlay").addClass('hide');
                if (result.IsSuccessful) {
                    window.location.replace("./success.html?channel=" + queryString['channel'] + "&mobileNumber=" + mobileNumber);
                } else {
                    showErrorMessage(result.Message);
                }
                return;
            },
            error: function (xhr) {
                console.log("#subscribeConfirm error");
                $("#overlay").addClass('hide');
                showErrorMessage("متاسفانه درخواست با خطا مواجه شد لطفا مجددا تلاش نمایید");
            }
        });
    });

    $("#subscribeRequestTwo").click(function () {
        var $this = $(this);
        $("#overlay").removeClass('hide');
        var settingsTwo = {
            "url": otpRequestUrl,
            "method": "POST",
            "data": {
                "mobileNumber": queryString['mobilenumber'],
                "Channel": queryString['channel'],
                serviceId: serviceIdTwo,
                campaignId: campaignIdTwo,
            }
        }
        $.ajax(settingsTwo).done(function (response) {
            $($this).removeAttr("disabled");
            $("#overlay").addClass('hide');
            if (response.IsSuccessful) {
                if (response.Result == -1) {
                    window.location.replace("./stepThree.html");
                }
                else {
                    $("#step3").addClass('hide');
                    $("#step2").removeClass('hide');
                    transactionId = response.Result;
                }
            } else {
                showErrorMessage(response.Message);
            }
        }).fail(function () {
            $("#overlay").addClass('hide');
            $($this).removeAttr("disabled");
            showErrorMessage("متاسفانه درخواست با خطا مواجه شد لطفا مجددا تلاش نمایید");
        });
    });
    $("#subscribeConfirmTwo").click(function () {
        if ($("#validcodeTwo").val().length != 4) {
            showErrorMessage("لطفا کد 4 رقمی پیامک شده را وارد نمایید");
            return;
        }
        $("#overlay").removeClass('hide');
        var model = {
            ServiceId: serviceIdTwo,
            TransactionId: transactionId,
            pin: $("#validcodeTwo").val()
        };
        $.ajax({
            type: "POST",
            url: otpConfirmUrl,
            data: model,
            type: "POST",
            success: function (result) {
                $("#overlay").addClass('hide');
                if (result.IsSuccessful)
                    window.location.replace("./stepThree.html");
                else
                    showErrorMessage(result.Message);
                return;
            },
            error: function (xhr) {
                $("#overlay").addClass('hide');
                showErrorMessage("متاسفانه درخواست با خطا مواجه شد لطفا مجددا تلاش نمایید");
            }
        });
    });
});


var replaceToEn = function (string) {
    return string.replace(/[\u0660-\u0669]/g, function (c) {
        return c.charCodeAt(0) - 0x0660;
    }).replace(/[\u06f0-\u06f9]/g, function (c) {
        return c.charCodeAt(0) - 0x06f0;
    });
};

$(document).ready(function () {

    $('input').on('input', function (event) {
        var val = $(this).val();
        val = replaceToEn(val);
        $(this).val(val);
    });
});
