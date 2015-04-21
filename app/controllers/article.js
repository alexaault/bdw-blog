var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article'),
  posts = require('../../config/posts');
 

module.exports = function (app) {
  app.use('/article', router);
};

router.get('/', function (req, res, next) {
  
    //find all articles in the mongo db
    Article.find({}, function(err, articles){

      res.render('article/list', {
        title: 'BDW - Blog',
        articles: articles
      });

    });

});

router.get('/:id/edit', function (req, res, next) {
  
    var id = req.params.id;

    //find all articles in the mongo db
    Article.findOne ({ _id: id }, req.body, function(err, article) {
        console.log(article);
        if(err) return next(err)
        res.redirect('back');

    });

});

//info: hitting localhost:3000/article/bootstrap
//will push all posts into mongolab

router.get('/bootstrap', function (req, res, next) {

  Article.create (posts.posts, function(err, articles){
      
              if(err) return next(err);
            res.send(articles);
  });

    
});


