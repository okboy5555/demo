<?php
    header("Content-type: text/html; charset=utf-8");

    $con = mysql_connect("localhost", "root", "");
    if (!$con)
    {
        die('Could not connect: ' . mysql_error());
    }

    $db_selected = mysql_select_db("login", $con);

    if (!$db_selected)
    {
        die ("Can\'t use test_db : " . mysql_error());
    }

?>

