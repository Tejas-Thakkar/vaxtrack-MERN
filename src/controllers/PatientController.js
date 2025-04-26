const Vaccination = require('../models/VaccineModel.js');
const User = require('../models/UserModel.js');
const Appointment = require('../models/AppointmentModel.js');

exports.getVaccinationHistory = async (req, res) => {
    try {
        const history = await Vaccination.find({ userId: req.user.id });
        res.json(history);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.downloadCertificate = async (req, res) => {
    // Logic to generate & send a PDF certificate
};

exports.getUpcomingAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({ userId: req.user.id, status: 'Scheduled' });
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.rescheduleAppointment = async (req, res) => {
    try {
        const updatedAppointment = await Appointment.findByIdAndUpdate(req.params.id, { date: req.body.newDate }, { new: true });
        res.json(updatedAppointment);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.cancelAppointment = async (req, res) => {
    try {
        await Appointment.findByIdAndDelete(req.params.id);
        res.json({ message: 'Appointment Canceled' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body, { new: true });
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};