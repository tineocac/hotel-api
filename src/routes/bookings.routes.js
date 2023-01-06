const { Router } = require('express')
const { createBooking } = require('../controllers')
const {authMiddleware} = require('../middlewares')
const router = Router()

router.post("/bookings", authMiddleware, createBooking)

module.exports = router