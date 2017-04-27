var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Workout Manager' });
});

module.exports = router;
