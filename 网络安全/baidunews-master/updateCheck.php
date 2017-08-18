<?php
session_start();
require_once("safe.php");
require_once("config.php");
$newsTitle=test_input($_REQUEST['newsTitle']);
$newsType=test_input($_REQUEST['newsType']);
$newsRemark=test_input($_REQUEST['newsRemark']);
$newsContent=test_input($_REQUEST['newsContent']);
$newsImg=test_input($_REQUEST['newsImg']);
$newsId=test_input($_REQUEST['newsId']);

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

$sql = "UPDATE `login`.`news` SET `newsType` = '".$newsType."', `newsTitle` = '".$newsTitle."', `newsRemark` = '".$newsRemark."', `newsImg` = '".$newsImg."', `newsContent` = '".$newsContent."' WHERE `news`.`newsId` = '".$newsId."'";
mysql_query($sql);
if(mysql_affected_rows()>0){
    echo "<script>alert('修改成功');
    location='management.php?newsType=0';
    </script>";
}
else{
    echo "<script>alert('修改失败,数据未发生变化');
    location='management.php?newsType=0';
    </script>";
}