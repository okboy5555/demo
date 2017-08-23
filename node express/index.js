var express = require('express');
var app = express();
app.get('/category',function(req,res){
	res.status(200);
	res.json({
		python:20,
		nodejs:1,
		others:10
	});
});

app.get('/questions',function(req,res){
	res.status(200);
	res.json(questions);
});


var questions=[
		{
			id:1,
			title:'t1',
			asker:'you',
			coure:'nodejs',
			'last-reply':Date.now(),
			reply:1,
			state:'resolved'
		},
		{
			id:2,
			title:'t2',
			asker:'you',
			coure:'nodejs',
			'last-reply':Date.now(),
			reply:1,
			state:'unresolved'
		}
	];
app.get('/questions/all',function(req,res){
	res.status(200);
	res.json(questions);
});
app.get('/questions/resolved',function(req,res){
	res.status(200);
	res.json(questions.filter(function(q){
		return q && q.state === 'resolved';
	}));
});
app.get('/questions/unresolved',function(req,res){
	res.status(200);
	res.json(questions.filter(function(q){
		return q && q.state === 'unresolved';
	}));
});
app.listen(3000);
