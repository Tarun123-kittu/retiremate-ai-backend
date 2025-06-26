const express = require('express');
const { body } = require('express-validator');
const chatController = require('../controllers/chatController');

const router = express.Router();

router.post('/send',
    [
        body('userId').notEmpty().withMessage('userId is required'),
        body('message').notEmpty().withMessage('message is required')
    ],
    chatController.sendMessage
);

module.exports = router; 