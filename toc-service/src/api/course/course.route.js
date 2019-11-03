const express = require('express');
const router = express.Router();

const courseController = require('./course.controller');

router.get('', courseController.getAll);
router.get('/:id', courseController.get);
router.post('', courseController.insert);

module.exports = router;
