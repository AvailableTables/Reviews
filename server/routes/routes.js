const router = require('express').Router();
const controller = require('../controllers/controller.js');

router.get('/reviews/all', controller.newOrder);

module.exports = router;