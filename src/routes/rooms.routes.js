const { Router } = require("express");
const router = Router();
const { authMiddleware } = require("../middlewares");
const { selectRoom, createRoom } = require("../controllers");

router.post("/rooms/:id", authMiddleware, selectRoom);
router.post("/rooms", authMiddleware, createRoom);

module.exports = router;
