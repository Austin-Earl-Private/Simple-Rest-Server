const express = require('express');

const profesionalController = require('../controllers/professional');
const router = express.Router();

router.get('/professional', profesionalController.getData);

module.exports = router;
