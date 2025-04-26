const routes = require("express").Router();
const adminController = require("../controllers/AdminController"); // controller import karo
const UserController = require("../controllers/UserController");
const VaccineCenterController = require("../controllers/VaccineCenterController")

// Admin login and signup routes
routes.post("/login", adminController.adminLogin);

routes.post("/signup", adminController.adminSignup);

routes.get('/admin/users', UserController.getAllUsers)

routes.post('/admin/user', UserController.addUser1)

routes.delete('/admin/user/:id', UserController.deleteUserById)

routes.post('/admin/vaccinecenters', VaccineCenterController.addVaccineCenter)

routes.get('/admin/vaccinecenters', VaccineCenterController.getAllVaccineCenters)

routes.delete('/admin/vaccinecenters/:id', VaccineCenterController.deleteVaccineCenter)



module.exports = routes;
