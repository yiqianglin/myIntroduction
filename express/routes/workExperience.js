var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var workExperience = mongoose.model('WorkExperience');

/* GET workExperience page. */
router.get('/', function(req, res, next) {
    res.render('myranderhtml.html');
    //next();
    // return next(); 这里不能用中间件？
});

router.get('/findAll', function(req, res, next) {
    workExperience.find({}, function(err, docs){
        if(err){
            console.log("err : ", err)
        return next();
        }
        console.log("result : ", docs);
        res.json(docs);
       return next();
    })
});

module.exports = router;

