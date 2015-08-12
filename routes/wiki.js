var express = require('express');
var router = express.Router();
var models = require('../models/');
var Page = models.Page; 
var User = models.User; 

//var addPage = require('../')

/* GET users listing. */
router
	.get('/', function(req, res, next) {
  		//res.send('respond with a resource');

  		res.redirect('/');
	})
	.get('/add', function(req, res, next) {
		res.render('addpage');
	})
	.post('/', function(req, res, next){
		var page = new Page({
			title: req.body.title,
			content: req.body.content,
		})
		//console.log(page.urlTitle);
		page.save().then(function(){
			res.redirect('/');
		}).then(null,next);
		
		//res.send(); //some sort page object
	})






module.exports = router;
