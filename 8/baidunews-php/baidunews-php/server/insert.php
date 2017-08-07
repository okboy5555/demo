<?php
require_once('db.php');

if($link){
	//执行插入新闻
	$newstitle = $_POST['newstitle'];
	$newstype = $_POST['newstype'];
	$newsimg = $_POST['newsimg'];
	$newssrc = $_POST['newssrc'];
	$newstime = $_POST['newstime'];

	$sql ="INSERT INTO `news` (`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`) VALUES ('{$newstitle}','{$newstype}','{$newsimg}','{$newstime}','{$newssrc}')";
	mysqli_query($link,"SET NAMES utf8");
	$result = mysqli_query($link,$sql);

	echo json_encode(array('success'=>'ok'));
}

mysqli_close($link);
?>