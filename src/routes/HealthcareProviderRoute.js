const express = require("express")
const { addHealthcareProviders, getHealthcareProviders, deleteHealthcareProvider } = require("../controllers/HealthcareProvidersController")

const router = express.Router()

router.post("/add", addHealthcareProviders);  // Add a new healthcare provider
router.get("/all", getHealthcareProviders); // Get all healthcare providers
router.delete("/delete/:id", deleteHealthcareProvider); // 🆕 Delete healthcare provider by ID

module.exports = router;