const express = require("express");
const { sendMail } = require("../controllers/contactController");
const { validateContactForm } = require("../middleware/validationMiddleware");

const router = express.Router();
router.post("/", validateContactForm, sendMail);

module.exports = router;
