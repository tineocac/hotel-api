const { Router } = require("express");
const router = Router();
const { createGuest } = require("../controllers");
const { authMiddleware } = require("../middlewares");

router.post("/guests", authMiddleware, createGuest);

module.exports = router;
