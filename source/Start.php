
<?php


if(isset($_GET['amount'])){
    $_SESSION['amount'] = $_GET['amount'];
}elseif(isset($_GET['Amount'])){
    $_SESSION['amount'] = $_GET['Amount'];
}elseif(isset($_GET['price'])){
    $_SESSION['amount'] = $_GET['price'];
}else{
    $_SESSION['amount'] = "1.00";
}


?>
