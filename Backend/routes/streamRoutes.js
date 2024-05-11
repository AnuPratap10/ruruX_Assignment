const express = require("express");
const router = express.Router();
const streamController = require("../controllers/streamController");

router.post("/streams", streamController.createStream);

router.get("/streams", streamController.getAllStreams);

router.get("/streams/:id", streamController.getStreamById);

router.put("/streams/:id", streamController.updateStream);

router.delete("/streams/:id", streamController.deleteStream);

module.exports = router;
