var irancell = document.getElementById('irancell').style;
var hamrah = document.getElementById('hamrah').style;
var rightel = document.getElementById('rightel').style;
var yellow = document.getElementById('yellow').style;
var number = document.getElementById('number').style;
var btn = document.getElementById('btn').style;
var opt = document.getElementById('meghdar').style;
var type = document.getElementById('type').style;
var price = document.getElementById('price').innerHTML = 20000;

function iran()
{
    irancell.opacity = "1";
    hamrah.opacity = "0.3";
    rightel.opacity = "0.3";
    yellow.background = "#FFCB08";
    number.border = "2px solid #FFCB08";
    opt.border = "2px solid #FFCB08";
    type.border = "2px solid #FFCB08";
    btn.background = "#FFCB08";
}
function ham()
{
    hamrah.opacity = "1";
    irancell.opacity = "0.3";
    rightel.opacity = "0.3";
    yellow.background = "#51BFCA";
    number.border = "2px solid #51BFCA";
    opt.border = "2px solid #51BFCA";
    type.border = "2px solid #51BFCA";
    btn.background = "#51BFCA";
}
function rig()
{
    rightel.opacity = "1";
    hamrah.opacity = "0.3";
    irancell.opacity = "0.3";
    yellow.background = "#9B2776";
    number.border = "2px solid #9B2776";
    opt.border = "2px solid #9B2776"; 
    type.border = "2px solid #9B2776";
    btn.background = "#9B2776";
}
