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
			urlTitle: generateUrlTitle(req.body.title)
		})
		//console.log(page.urlTitle);
		page.save().then(function(){
			res.redirect('/');
		})
		
		//res.send(); //some sort page object
	})

function generateUrlTitle (title) {
  if (typeof title !== 'undefined' && title !== '') {
    // Removes all non-alphanumeric characters from title
    // And make whitespace underscore
    return title.replace(/\s+/g, '_').replace(/\W/g, '');
  } else {
    // Generates random 5 letter string
    return Math.random().toString(36).substring(2, 7);
  }
}




module.exports = router;
