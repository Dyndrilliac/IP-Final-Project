var express = require('express');
var router = express.Router();

/* GET me page. */
router.get('/', (req, res, next) => {
  res.render('me', { title: 'Workout Manager: Muscle -> Exercise' });
});

module.exports = router;
