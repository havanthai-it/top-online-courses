const express = require('express');
const router = express.Router();

const platformController = require('./platform.controller');

router.get('', platformController.getAll);
router.post('', platformController.insert);

module.exports = router;
