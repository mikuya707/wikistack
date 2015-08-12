var express = require('express');
var router = express.Router();
var models = require('../models/');
var Page = models.Page; 
var User = models.User; 

//var addPage = require('../')

/* GET users listing. */
router
	.get('/', function(req, res, next) {
  		Page.find().exec(function(err, pages){
  			console.log(pages);
     	res.render('index', {pages: pages});
  		})
  	})
	.get('/add', function(req, res, next) {
		res.render('addpage');
	})
	.get('/:urlTitle',function(req,res,next){
		Page.findOne({urlTitle: req.params.urlTitle},function(err,page){
			res.render('wikipage',page);
		});
	})
	.post('/', function(req, res, next){
		var page = new Page({
			title: req.body.title,
			content: req.body.content
		})
		//console.log(page.urlTitle);
		page.save().then(function(page){
			//console.log(page);
			res.redirect(page.toObject({virtuals:true}).route);
		}).then(null,next);
		
		//res.send(); //some sort page object
	})






module.exports = router;
