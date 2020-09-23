
jQuery(document).ready(function () {

    var baseUrl = 'http://localhost:32120/';
    
    $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function () {
        $(this).removeClass('input-error');
    });

    $('.login-form').on('submit', function (e) {

        $(this).find('input[type="text"], input[type="password"], textarea').each(function () {
            if ($(this).val() == "") {
                e.preventDefault();
                $(this).addClass('input-error');
            }
            else {
                $(this).removeClass('input-error');
            }
        });

    });


    function setHeight() {
        windowHeight = $(window).innerHeight();
        $('.form-bottom').css('min-height', windowHeight - 14);
    };
    setHeight();

    $(window).resize(function () {
        setHeight();
    });
});


