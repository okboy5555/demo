<?php
session_start();
require_once("safe.php");
require_once("config.php");
if($_REQUEST['newsType']=='1'){
    $sql="SELECT * FROM `news` WHERE `newsType`='推荐' ORDER BY `news`.`newsId`  ASC";
}
elseif($_REQUEST['newsType']=='2'){
    $sql="SELECT * FROM `news` WHERE `newsType`='搞笑' ORDER BY `news`.`newsId`  ASC";
}
elseif($_REQUEST['newsType']=='0'){
    $sql="SELECT * FROM `news` ORDER BY `news`.`newsId` ASC";
}
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>后台首页</title>
<!-- Bootstrap -->
    <link href="style/bootstrap.min.css" rel="stylesheet">
	<link href="style/bootstrap-theme.min.css" rel="stylesheet">
    <script src="script/jquery-1.11.1.js"></script>
    <script src="script/bootstrap.min.js"></script>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>
	<div class="container">
	<nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#"><span class="glyphicon glyphicon-leaf" aria-hidden="true"></span></a>
          
        </div>
    
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><a href="#">百度新闻 后台管理系统</a></li>
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <li><a class="username"><span><?php echo $_SESSION["username"] ?></span>,欢迎您</a></li>
            <li><a class="quit">退出</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    <article>
        <div class="row">
            <div class="col-md-2">
                <div class="panel panel-primary">
                  <div class="panel-heading">模块</div>
                  <div class="panel-body">
                    <a href="management.php?newsType=1">推荐板块</a>
                  </div>
                  <div class="panel-body">
                    <a href="management.php?newsType=2">搞笑板块</a>
                  </div>
                </div>
            </div>
            <div class="col-md-10">
				<div class="panel panel-primary">
                  <!-- Default panel contents -->
                  <div class="panel-heading" style="position: relative;"><span>新闻管理</span><a href="addNews.php?type=0" class="btn btn-default btn-sm" role="button"  style="position: absolute; right: 5px; top: 5px;">新增新闻</a></div>
                  <!-- Table -->
                  <table class="table">
                      <thead>
                        <tr>
                          <th>newsId</th>
                          <th>newsType</th>
                          <th>newsTitle</th>
                          <th>newsRemark</th>
                          <th>newsContent</th>
                          <th>newsImgSrc</th>
                          <th>newsDate</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                      <?php

                      $result=mysql_query($sql);
                      while($row = mysql_fetch_array($result))
                      {
                      ?>
                      <tr>
                          <th scope='row' class="newsId">
                              <?php echo $row["newsId"]; ?>
                          </th>
                          <td>
                              <?php echo $row["newsType"]; ?>
                          </td>
                          <td>
                              <?php echo $row["newsTitle"]; ?>
                          </td>
                          <td>
                              <?php echo $row["newsRemark"]; ?>
                          </td>
                          <td>
                              <?php echo $row["newsContent"]; ?>
                          </td>
                          <td>
                              <p style="width:200px;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;overflow: hidden;"><?php echo $row["newsImg"]; ?></p>
                          </td>
                          <td>
                              <?php echo $row["newsDate"]; ?>
                          </td>
                          <td>
                              <a class="del">delete</a>
                              <a class="update">update</a>
                          </td>
                      </tr>
                      <?php
                      }
                      //关闭对数据库的连接
                      mysql_free_result($result);
                      mysql_close($con);
                      ?>
                      </tbody>
                    </table>
                </div>
            </div>
        </div>
        
    </article>
</div>
<div id="footer">
      <div class="container">
        <p class="text-center">
        	©2016 Baidu 使用百度前必读 意见反馈 京ICP证030173号 
        </p>
      </div>
</div>
<script>


</script>
    <script src="script/sea.js"></script>
    <script>
        // seajs 的简单配置
        seajs.config({
            base: "./script/",
            alias: {
                "jquery": "jquery-1.11.1.js"
            }
        });
        // 加载入口模块
        seajs.use("main");
    </script>
</body>
</html>
