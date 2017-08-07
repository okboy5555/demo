<?php
require_once('db.php');

if($link){
	//执行修改新闻
	$newstitle = $_POST['newstitle'];
	$newstype = $_POST['newstype'];
	$newsimg = $_POST['newsimg'];
	$newssrc = $_POST['newssrc'];
	$newstime = $_POST['newstime'];
	$newsid = $_POST['id'];

	$sql ="UPDATE `news` SET `newstitle`='{$newstitle}',`newstype`='{$newstype}',`newsimg`='{$newsimg}',`newstime`='{$newstime}',`newssrc`='{$newssrc}' WHERE `id`={$newsid}";
	mysqli_query($link,"SET NAMES utf8");
	$result = mysqli_query($link,$sql);

	echo json_encode(array('success'=>'ok'));
}

mysqli_close($link);
?>