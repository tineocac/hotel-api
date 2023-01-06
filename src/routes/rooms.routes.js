const { Router} = require('express')
const router = Router()
const {authMiddleware} = require('../middlewares')
const {selectRoom} = require('../controllers')

router.post('/rooms/:id', authMiddleware, selectRoom)

module.exports = router