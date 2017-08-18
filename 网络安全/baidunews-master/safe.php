<?php
if(!isset($_SESSION['username'])){
    echo "<script>alert('请先登录');location='manageLogin.php';</script>";
}
?>