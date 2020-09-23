

<?php
  $checks = $_POST['formBox'];
  
  
 if (IsChecked('formBox','A')) {
header('Location: melat.html');

} elseif (IsChecked('formBox','B')) {
header("Location: insta.html");

} elseif (IsChecked('formBox','S')) {
header("Location: py.html");

} else {
header('Location: index.html');
}
  

    function IsChecked($chkname,$value)
    {
        if(!empty($_POST[$chkname]))
        {
            foreach($_POST[$chkname] as $chkval)
            {
                if($chkval == $value)
                {
                    return true;
                }
            }
        }
        return false;
    }
?>