const routes = require('express').Router();
const vaccineCenterController = require('../controllers/VaccineCenterController');

routes.post('/add', vaccineCenterController.addVaccineCenter);
routes.get('/all', vaccineCenterController.getAllVaccineCenters);
routes.delete('/delete/:id', vaccineCenterController.deleteVaccineCenter);

module.exports = routes;
