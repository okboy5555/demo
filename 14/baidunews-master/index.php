<?php
require_once("config.php");

if(isset($_REQUEST['newsType'])==false ){
    $sql0="SELECT * FROM `news` WHERE `newsType`='推荐' ORDER BY `news`.`newsId`   DESC ";
}
elseif($_REQUEST['newsType']==1){
    $sql0="SELECT * FROM `news` WHERE `newsType`='推荐' ORDER BY `news`.`newsId`   DESC ";
}
else{
    $sql0="SELECT * FROM `news` WHERE `newsType`='搞笑' ORDER BY `news`.`newsId`   DESC ";
}

?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0;" name="viewport" />
<title>百度新闻</title>
<link href="style/main.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <div class="container">
      <header>
          <div class="newsLogo clearfix">
              <div class="l">
                  <span class="topLogo"></span>
                  <span class="topMe"></span>
              </div>
              <div class="r">
                  <span class="topSearch"></span>
                  <span class="topPlus"></span>
              </div>
          </div>
          <nav>
              <?php
              $sql="select `newsType` from `news` ORDER BY `news`.`newsType` ASC ";
              $result=mysql_query($sql);

              $query=Array();

              while($rows=mysql_fetch_array($result)){
                  array_push($query,$rows['newsType']);
              }
              $query=array_unique($query);
              ?>
              <?php
              foreach ($query as $value){
                  ?>
                  <a href="index.php?newsType=<?php echo $value=='推荐'?1:2 ?>"><span><?php echo $value ?></span></a>
              <?php }
              //关闭对数据库的连接
              mysql_free_result($result);
              ?>

          </nav>
      </header>
      <article>
          <!--轮播开始-->
          <section>
              <div class="flashBox">
                  <ul class="flashItem">
                      <li>
                          <a href="#">
                              <img src="images/timg.jpg" />
                              <h4 class="gTitle">
                                <p>伦敦举办盛大庆典庆祝猴年春节</p>
                              </h4>
                          </a>
                      </li>
                      <li>
                          <a href="#">
                              <img src="images/timg1.jpg" />
                              <h4 class="gTitle">
                                  <p>剑桥学生举办性感时装表演</p>
                              </h4>
                          </a>
                      </li>
                      <li>
                          <a href="#">
                              <img src="images/timg2.jpg" />
                              <h4 class="gTitle">
                                  <p>江苏小伙情人节用跑步轨迹“Marry Me”求婚</p>
                              </h4>
                          </a>
                      </li>
                      <li>
                          <a href="#">
                              <img src="images/timg3.png" />
                              <h4 class="gTitle">
                                  <p>百度钱包胡歌新年礼</p>
                              </h4>
                          </a>
                      </li>
                  </ul>
              </div>
              <div class="flashPo">
                  <span class="on">1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
              </div>
          </section>
      </article>
      <article class="newsList">
              <?php

                $result=mysql_query($sql0);
                while($rows = mysql_fetch_array($result))
              {
              ?>
              <div class="newsItem">
                  <a href="#">
                  <?php
                  if ($rows['newsImg']!='') {
                  ?>
              <div class="newsImg">
                  <img src="<?php echo $rows['newsImg']; ?>">
              </div>
                  <?php
                    }
                 ?>

              <div class="newsDetail">
                  <p><?php echo $rows['newsTitle']; ?></p>
                  <span class="newsDate"><?php echo $rows['newsDate']?></span>
              <?php
                  if($rows['newsRemark']!=''){
                  ?>
                      <i class="newsRemark wangyiMark"><?php echo $rows['newsRemark']; ?></i>


                  <?php } ?>
              </div>
                  </a>
              </div>
                  <?php } ?>


      </article>
      <!--<div class="ui-refresh">加载更多</div>-->
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
