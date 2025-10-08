const express = require("express");
const router = express.Router();

const tutorController = require("../controllers/TutorController");

router.post("/create", tutorController.createTutor);
router.put("/:id", tutorController.updateTutor);

module.exports = router;