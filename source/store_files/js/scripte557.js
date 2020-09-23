$("#btn_generate").on("click", function (e) {
    var val   = $("#txt_number1").val().trim();
    var regex = /^\d+$/;
    var val2  = (val[0] != 0 || val[1] != 9 || val[2] == "3" || val[2] == "2" || val.length != 11 || !regex.test(val));
    if (val2) {
        e.preventDefault();
        $("#modalForInvalidPhone").modal("show");
    } else {
        $("#loading").css("display", "block");
    }
});

var rep = {
    "0": "&#1776;",
    "1": "&#1777;",
    "2": "&#1778;",
    "3": "&#1779;",
    "4": "&#1780;",
    "5": "&#1781;",
    "6": "&#1782;",
    "7": "&#1783;",
    "8": "&#1784;",
    "9": "&#1785;",
    ":": ":",
};

var str = "";
var sec = 60;

var timer = setInterval(function () {
    var sss = sec--;
    if (sss == -1) {
        clear();
    }
    if (sss < 10) {
        sss = "0" + sss.toString();
    }
    var v = sss.toString().split("");
    str   = rep[v[0]].toString() + rep[v[1]].toString();
    $("#timer").html(str);
}, 1000);

function clear() {
    clearInterval(timer);
    $("#timer").css("display", "none");
}