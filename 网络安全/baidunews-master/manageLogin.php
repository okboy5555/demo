<?php
session_start();
require_once("config.php");

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
          <a class="navbar-brand" href=""><span class="glyphicon glyphicon-leaf" aria-hidden="true"></a>
        </div>
    
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
          	<li><a href="">百度新闻</a></li>
            <li class="active"><a href="">管理首页<span class="sr-only">(current)</span></a></li>
            <li><a href="index.php" target="_blank">网站前台</a></li>
          </ul>
          <form class="navbar-form navbar-left" role="search">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-default">搜索</button>
          </form>

        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    <article>
    <div class="row">
        <div class="col-md-7">
        	<div class="jumbotron">
              <h1>Welcome!</h1>
              <p>百度新闻管理</p>
              <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
            </div>
        </div>
        <div class="col-md-5">
        	<form action="check.php" method="post">
              <div class="form-group">
                <label for="exampleInputUsername">用户名</label>
                <input type="text" class="form-control" name="username" id="exampleInputUsername" placeholder="请输入用户名">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">密码</label>
                <input type="password" class="form-control" name="password" id="exampleInputPassword" placeholder="请输入密码">
              </div>
              <button type="submit" class="btn btn-primary">登录</button>
                <span class="error"></span>
            </form>
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
