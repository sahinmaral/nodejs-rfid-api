const express = require('express');
const cardController = require('../controllers/cardController');

const router = express.Router();

router.route('/verify/:uid').get(cardController.verifyCard);

module.exports = router