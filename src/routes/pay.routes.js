const { Router } = require("express");
const router = Router();
const { makePayment } = require("../controllers");
const { authMiddleware } = require("../middlewares");

router.put("/pay/:id", authMiddleware, makePayment);

module.exports = router;
