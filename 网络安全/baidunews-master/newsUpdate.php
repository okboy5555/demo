<?php
session_start();
require_once("safe.php");
require_once("config.php");

$newsId=$_REQUEST['newsId'];

$sql="SELECT * FROM `news`WHERE newsId ='".$newsId."'";
$result = mysql_query($sql);
$rows=mysql_fetch_array($result);
//print_r($rows);
?>
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>编辑新闻</title>
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
                        <a href="management.php?newsType=0">返回首页</a>
                    </div>
                </div>
            </div>
            <div class="col-md-10">
                <div class="panel panel-primary">
                    <!-- Default panel contents -->
                    <div class="panel-heading">编辑新闻</div>
                </div>
                <form action="updateCheck.php?newsId=<?php echo $newsId ?>" method="post">
                    <div class="form-group">
                        <label for="exampleInputEmail1">新闻标题</label>
                        <input class="form-control" id="exampleInputEmail1" placeholder="newsTitle" name="newsTitle" value=<?php echo $rows['newsTitle'] ?>>
                    </div>
                    <div class="form-group">
                        <label for="newsType">所属板块</label>
                        <select id="newsType" name="newsType">
                            <option>--请选择--</option>
                            <!---->
                            <?php
                            $sql="select `newsType` from `news`";
                            $result=mysql_query($sql);

                            $query=Array();

                            while($rows2=mysql_fetch_array($result)){
                                array_push($query,$rows2['newsType']);
                            }
                            //去掉数组中查到的重复信息，有更好的方法吗？
                            $query=array_unique($query);
                            ?>
                            <?php
                            foreach ($query as $value){
                                ?>
                                <option id="<?php echo $value ?>" <?php if($rows['newsType']==$value){echo 'selected=selected';} ?>><?php echo $value ?></option>
                            <?php }
                            //关闭对数据库的连接
                            mysql_free_result($result);
                            ?>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="newsRemark">所属标示</label>
                        <select id="newsRemark" name="newsRemark">
                            <option>--请选择--</option>
                            <?php
                            $sql="select `newsRemark` from `news`";
                            $result=mysql_query($sql);

                            $query=Array();

                            while($rows2=mysql_fetch_array($result)){
                                array_push($query,$rows2['newsRemark']);
                            }
                            $query=array_unique($query);
                            ?>
                            <?php
                            foreach ($query as $value){
                                ?>

                                <option id="<?php echo $value ?>" <?php if($rows['newsRemark']==$value){echo 'selected=selected';} ?>"><?php echo $value; ?></option>
                                <?php
                            }
                            //关闭对数据库的连接
                            mysql_free_result($result);
                            //mysql_close($con);
                            ?>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="newsContent">新闻内容</label><br/>
                        <textarea id="newsContent" name="newsContent" cols="100" rows="10"><?php echo $rows['newsContent'] ?></textarea>
                    </div>
                    <div class="form-group">
                        <label for="newsImg">图片地址</label>
                        <input class="form-control" id="newsImg" name="newsImg" placeholder="newsImg" value="<?php echo $rows['newsImg'] ?>">
                    </div>

                    <button type="submit" class="btn btn-default">提交</button>
                    <span class="error" style="color: red;"></span>
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
