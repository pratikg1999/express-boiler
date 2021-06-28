const router = require('express').Router();
const { helloWorld } = require('../controllers/demoController');

router.route('/').get(helloWorld);

module.exports = router;
