var express = require('express');
var router = express.Router();

/* GET myIndex page. */
router.get('/', function(req, res, next) {
  res.render('myIndex', { title: 'Express' });
});

module.exports = router;
