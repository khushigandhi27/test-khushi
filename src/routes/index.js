const express = require('express');

const { uploadProcessedData } = require('../controllers/lib/firebase');

const router = express.Router();

router.get('/version', (req, res) => {
  res.send('1.0.0');
});

router.get('/firebase',uploadProcessedData);

module.exports = router;
