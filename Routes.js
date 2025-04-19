const express = require('express');
const router = express.Router();
const { getFeedbacks, createFeedback } = require('./Controller');

router.get('/', getFeedbacks); 
router.post('/', createFeedback); 

module.exports = router;
