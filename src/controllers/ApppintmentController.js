const AppointmentModel = require("../models/AppointmentModel");

// Add an Appointment
const addAppointment = async (req, res) => {
  try {
    const { userName, age, gender, vaccineId, ProviderType, stateId, cityId, appointmentDate, status } = req.body;
    if (!userName || !age || !gender || !vaccineId || !ProviderType || !stateId || !cityId || !appointmentDate || !status) {
      return res.status(400).json({ message: "All required fields must be filled." });
    }

    const savedAppointment = await AppointmentModel.create(req.body);
    res.status(201).json({
      message: "Appointment booked successfully",
      data: savedAppointment,
    });
  } catch (err) {
    res.status(500).json({ message: "Error booking appointment", error: err.message });
  }
};

// Get All Appointments
const getAppointments = async (req, res) => {
  try {
    const appointments = await AppointmentModel.find()
      .populate("vaccineId", "name manufacturer")
      .populate("stateId", "name")
      .populate("cityId", "name")
      .populate("areaId", "name");

    res.status(200).json({
      message: "All appointments retrieved successfully",
      data: appointments,
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching appointments", error: err.message });
  }
};

// Delete Appointment
const deleteAppointment = async (req, res) => {
  try {
    const appointmentId = req.params.id;
    const deleted = await AppointmentModel.findByIdAndDelete(appointmentId);

    if (!deleted) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.status(200).json({
      message: "Appointment deleted successfully",
      data: deleted,
    });
  } catch (err) {
    res.status(500).json({ message: "Error deleting appointment", error: err.message });
  }
};

module.exports = { addAppointment, getAppointments, deleteAppointment };



/*const AppointmentModel = require("../models/AppointmentModel");

// Add an Appointment
const addAppointment = async (req, res) => {
  try {
    const savedAppointment = await AppointmentModel.create(req.body);
    res.status(201).json({
      message: "Appointment booked successfully",
      data: savedAppointment,
    });
  } catch (err) {
    res.status(500).json({ message: err.message});
  }
};

// Get All Appointments
const getAppointments = async (req, res) => {
  try {
    const appointments = await AppointmentModel.find()
       .populate("userId", "userName")
      .populate("vaccineId","name manufacturer")
    //   .populate("healthcareProviderId")//, "name type")
      .populate("stateId", "name")
      .populate("cityId", "name")
      .populate("areaId", "name");
    res.status(200).json({
      message: "All appointments retrieved successfully",
      data: appointments,
    });
  } catch (err) {
    res.status(500).json({ message: err});
  }
};

// Get Appointment by ID
// const getAppointmentById = async (req, res) => {
//   try {
//     const appointment = await Appointment.findById(req.params.id)
//       .populate("patientId", "first_name last_name")
//       .populate("vaccineId", "name manufacturer")
//       .populate("healthcareProviderId", "name type")
//       .populate("stateId", "name")
//       .populate("cityId", "name")
//       .populate("areaId", "name");
//     if (!appointment) {
//       return res.status(404).json({ message: "Appointment not found" });
//     }
//     res.status(200).json({ data: appointment });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// Update an Appointment
// const updateAppointment = async (req, res) => {
//   try {
//     const updatedAppointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
//     if (!updatedAppointment) {
//       return res.status(404).json({ message: "Appointment not found" });
//     }
//     res.status(200).json({
//       message: "Appointment updated successfully",
//       data: updatedAppointment,
//     });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// Delete an Appointment
// const deleteAppointment = async (req, res) => {
//   try {
//     const deletedAppointment = await Appointment.findByIdAndDelete(req.params.id);
//     if (!deletedAppointment) {
//       return res.status(404).json({ message: "Appointment not found" });
//     }
//     res.status(200).json({ message: "Appointment deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

module.exports = { addAppointment, getAppointments}; //getAppointmentById, updateAppointment, deleteAppointment };
*/