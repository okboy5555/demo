<?php
session_start();
require_once("safe.php");
require_once("config.php");

$newsTitle=test_input($_REQUEST['newsTitle']);
$newsType=test_input($_REQUEST['newsType']);
$newsRemark=test_input($_REQUEST['newsRemark']);
$newsContent=test_input($_REQUEST['newsContent']);
$newsImg=test_input($_REQUEST['newsImg']);

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

$sql = "INSERT INTO `login`.`news` (`newsId`, `newsType`, `newsTitle`, `newsRemark`, `newsImg`, `newsDate`, `newsContent`)
VALUES (NULL, '" .$newsType. "', '" .$newsTitle. "', '" .$newsRemark. "', '" .$newsImg. "', CURRENT_TIMESTAMP, '" .$newsContent. "');";
$result = mysql_query($sql);
if($result){
    echo "<script>alert('成功');location='management.php?newsType=0';</script>";
}
else{
    echo "<script>alert('失败');location='addNews.php?newsType=0';</script>";
}

?>