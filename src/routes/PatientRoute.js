const express = require('express');
const { getVaccinationHistory, downloadCertificate, getUpcomingAppointments, rescheduleAppointment, cancelAppointment, updateProfile } = require('../controllers/patientController');
// const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/history', getVaccinationHistory);
router.get('/certificate/:id', downloadCertificate);
router.get('/appointments', getUpcomingAppointments);
router.put('/reschedule/:id', rescheduleAppointment);
router.delete('/cancel/:id', cancelAppointment);
router.put('/profile', updateProfile);

module.exports = router;