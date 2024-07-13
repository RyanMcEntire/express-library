var express = require('express');
var router = express.Router();

/* logs the time of GET */
router.use((req, res, next) => {
  console.log('Time:', Date(Date.now()).toString());
  next();
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function (req, res, next0) {
  res.send("you're so cool!");
});

module.exports = router;
