<?php
session_start();
require_once("config.php");

//require_once ("mysql_connect.php");
$username=$_REQUEST['username'];
$password=md5($_REQUEST['password']);
$_SESSION["username"] = $username;
$sql="select * from `users` where `username`='".$username."' and `password`='".$password."'";
$result=mysql_query($sql);
$dataCount=mysql_num_rows($result);
if($dataCount==1){
        echo '登陆成功...';
        //echo $_SESSION["username"];
        echo "<script>location='management.php?newsType=0';</script>";
    }
    else{
        echo "登录失败，请重新登录";
        echo "<script>location='manageLogin.php';</script>";
    }
?>
