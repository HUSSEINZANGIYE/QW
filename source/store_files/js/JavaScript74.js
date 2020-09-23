$(document).ready(function () {
    setTimeout(
    function () {
        if ($("#wrapper_main_confirm").length != 0) {
            $("#landing_img_2").click(function () {
                $("#txt_code").focus();
                //$(".box_form_confirm").css({ top: "0", position: "fixed", right: "7px" });
                //$("#landing_img_2").hide();
            });
        }
    }, 300);
});