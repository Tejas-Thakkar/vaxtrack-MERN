const routes = require("express").Router()
const AppointmentController = require("../controllers/ApppintmentController")
routes.post("/add", AppointmentController.addAppointment)
routes.get("/all", AppointmentController.getAppointments)

module.exports = routes