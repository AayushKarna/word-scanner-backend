const express = require('express');
const siteController = require('./../controllers/siteController');

const router = express.Router();

router.route('/').post(siteController.getSites);

module.exports = router;
