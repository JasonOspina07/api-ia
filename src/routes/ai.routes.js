const express = require('express')
const router = express.Router()
const { chat, summarize, translate } = require('../controllers/ai.controller')

router.post('/chat', chat)
router.post('/summarize', summarize)
router.post('/translate', translate)

module.exports = router