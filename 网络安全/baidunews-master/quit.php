<?php
session_start();
require_once("config.php");

$_SESSION['username']='';

session_destroy();//销毁session文件；

header("location:manageLogin.php");//跳转到登陆页面