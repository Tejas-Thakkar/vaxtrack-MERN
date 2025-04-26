const express = require("express")
const { addHealthcareProviders, getHealthcareProviders } = require("../controllers/HealthcareProvidersController")

const router = express.Router()

router.post("/add", addHealthcareProviders);  // Add a new healthcare provider
router.get("/all", getHealthcareProviders); // Get all healthcare providers

module.exports = router;