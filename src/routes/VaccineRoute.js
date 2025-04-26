const routes = require("express").Router()
const vaccineController = require("../controllers/VaccineController")
routes.post("/add", vaccineController.addVaccine)
routes.get("/all", vaccineController.getVaccines)

module.exports = routes