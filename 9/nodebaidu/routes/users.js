var express = require('express');
var router = express.Router();
var mysql =require('mysql');
var db = require('./db.js');
var connection = mysql.createPool(db);
// 后台路由页面
// 获取所有新闻列表
router.get('/getnews', function(req, res, next) {
  connection.query('SELECT * FROM `news` order by id DESC',function(err,rows){

	res.json(rows);
  	 });
});

//修改
router.post('/update',function(req,res){
	var newsid = req.body.id,
		newstype = req.body.newstype,
		newstitle = req.body.newstitle,
		newstime = req.body.newstime,
		newssrc = req.body.newssrc,
		newsimg = req.body.newsimg;
	connection.query("UPDATE `news` SET `newstitle`=?,`newstype`=?,`newsimg`=?,`newstime`=?,`newssrc`=? WHERE `id`=?",[newstitle,newstype,newsimg,newstime,newssrc,newsid],function(err,rows){
		console.log(rows.changedRows);
		res.json(rows);
	});
	
});

//模态框取值
router.get('/curnews',function(req,res){
	var newsid= req.query.newsid;
	connection.query('SELECT * FROM `news` WHERE id = ?',[newsid],function(err,rows){
		res.json(rows);
	});
});
//delete
router.post('/delete',function(req,res){
	var newsid = req.body.newsid;
	connection.query('DELETE FROM `news` WHERE `news`.`id` = ?',[newsid],function(err,result){
		console.log(result.affectedRows);
		res.json(result);
	});
	
});

//insert
router.post('/insert',function(req,res){
	var newsimg = req.body.newsimg,
		newstype = req.body.newstype,
		newstitle=req.body.newstitle,
		newstime = req.body.newstime,
		newssrc = req.body.newssrc;
	connection.query("INSERT INTO `news` (`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`) VALUES (?,?,?,?,?)",[newstitle,newstype,newsimg,newstime,newssrc],function(err,result){
		if(!err){
			console.log(result.insertId);
			res.json(result);
		}
	});

});
module.exports = router;
