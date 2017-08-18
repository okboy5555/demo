<?php 
require_once('db.php');

if($link){
	$newsid = $_POST['newsid'];
	mysqli_query($link,"SET NAMES utf8");
	$sql = "DELETE FROM `news` WHERE `news`.`id` = {$newsid}";

	mysqli_query($link,$sql);
	echo json_encode(array('删除状态'=>'成功'));
}
mysqli_close($link);

?>