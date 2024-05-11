
const express = require("express");
const router = express.Router();
const marksController = require("../controllers/marksController");

router.post("/marks", marksController.createMark);

router.get("/marks", marksController.getAllMarks);

router.get("/marks/student/:studentId", marksController.getMarksByStudentId);

router.put("/marks/:id", marksController.updateMark);

router.delete("/marks/:id", marksController.deleteMark);

module.exports = router;
