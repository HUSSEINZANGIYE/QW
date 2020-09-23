/*var press = jQuery.Event("keypress");
 press.ctrlKey = false;
 press.which = 65;
 $("input").trigger(press);
 var timerInterval;
 */

var isInIframe = (window.location != window.parent.location) ? true : false;
function detect_user_host()
{
    var result = [];
    var tochable = ("ontouchstart" in document.documentElement) ? 1 : 0;
    var platform='pc';
    var windowWidth = window.screen.width < window.outerWidth ?
        window.screen.width : window.outerWidth;
    var windowHeight = window.screen.height < window.outerHeight ?
        window.screen.height : window.outerHeight;
    if(windowWidth < 550 && tochable==1) platform='mobile';
    if(windowWidth > 550 && tochable==1) platform='tablet';
    result['platform'] = platform;
    result['screenWidth'] = windowWidth;
    result['screenHeight'] = windowHeight;
    return result;
}


/* check idle */
//$(window).bind('mousemove click mouseup mousedown keydown keypress keyup submit change mouseenter scroll resize dblclick', checkIdle);
$(window).bind('mousemove click mouseup mousedown mouseenter scroll dblclick', checkIdle);
var active = false,
    delay = 1500,//every second check if user did somthing on page
    timer = null;
function checkIdle(e)
{

    active = true;
    if (timer) clearTimeout(timer);
    timer = setTimeout(function(t){
        active = false;
    }, delay);
}
if(!isInIframe)
{
    var winHeight = $(window).height();
    var winWidth=$(window).width();
    var iframeWidth = 1202;
    var iframeWidthHalf = iframeWidth/2;
    var diff = iframeWidthHalf;
    var time_on_page=null;
    var parent_stat_recorded=0;
    var user_host=detect_user_host();





    /* end */

    var hashie = (winWidth - iframeWidth) / 2;
    $(window).resize(function(){winWidth=$(window).width();hashie = (winWidth - iframeWidth) / 2});


    var timeoutAnim,recordTimeOut;
    var move = [];
    $(document).ready(function(e)
    {

        checkactive();
        var clicking=0;
        record_timer();
        var xx = 0;
        var yy = 0;

        $('html').mousedown(function(){
            clicking=1;
        });
        $('a').mousedown(function(){
            record_mouse(1);
        });
        (function loop()
        {
            if(active)
            {
                $(document).mousemove(function(e) {
                    xx = e.pageX - hashie;yy = e.pageY;
                });
                xx = parseInt(xx);
                yy = parseInt(yy);
                if(clicking == 1)
                {
                    move.push({
                        x: xx,
                        y: yy,
                        c:clicking
                    });
                }else
                {
                    if(xx!=0 && yy!=0)
                    {
                        move.push({
                            x: xx,
                            y: yy
                        });
                    }
                }
            }
            clicking=0;
            timeoutAnim = setTimeout(loop, 300);//record mouse movement every 0.2 s

        })();
    });
    function checkactive()
    {
        recordTimeOut = setTimeout(record_mouse, 4000);//send request ajax (if active) every 2.5 seconds
    }
    function record_mouse(e)
    {
        var request_uri = location.pathname + location.search;
        if(active)
        {

            var data = JSON.stringify(move);

            //console.log(data);
            if(parent_stat_recorded!=0)
            {
                var statRecord = {
                    json:data,
                    statId:stat_id,
                    request_uri:request_uri,
                    Width:user_host['screenWidth'],
                    time_on_page:time_on_page
                }
            }else
            {
                var statRecord = {
                    json:data,
                    statId:stat_id,
                    request_uri:request_uri,
                    time_on_page:time_on_page,
                    parent_stat_id:stat_id,
                    platform:user_host['platform'],
                    Width:user_host['screenWidth'],
                    Height:user_host['screenHeight']
                }
            }
            $.ajax({
                url: "http://buylike.ir/ajax/msr.php",
                type: "post",
                dataType : "html",
                data: statRecord,
                success: function(data){parent_stat_recorded=1;},
                error:function(){}
            });
        }
        if(typeof e=='undefined') checkactive();

    }
    function record_timer(stop)
    {
        if(typeof stop !=='undefined')
        {
            clearInterval(timerInterval);
            var timerInterval;
        }else
        {
            var sec = time_on_page || 1;
            timerInterval = setInterval(function() {
                time_on_page = sec++;
            }, 1000);
        }
    }
}