const { Router } = require("express");
const router = Router();
const { createGuest, getAllGuests } = require("../controllers");
const { authMiddleware } = require("../middlewares");

router.post("/guests", authMiddleware, createGuest);

router.get("/guests", authMiddleware, getAllGuests);

module.exports = router;
