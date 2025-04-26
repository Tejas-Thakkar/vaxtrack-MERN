const VaccineModel = require("../models/VaccineModel");

// Add a Vaccine
const addVaccine = async (req, res) => {
  try {
    const savedVaccine = await VaccineModel.create(req.body);
    res.status(201).json({
      message: "Vaccine added successfully",
      data: savedVaccine,
    });
  } catch (err) {
    res.status(500).json({ 
      message: err,
    }); // 400 for validation errors
  }
};

// Get All Vaccines
const getVaccines = async (req, res) => {
  try {
    const vaccines = await VaccineModel.find();
    res.status(200).json({
      message: "All vaccines retrieved successfully",
      data: vaccines,
    });
  } catch (err) {
    res.status(500).json({
        message: err
      });
  }
};

// Delete a Vaccine
const deleteVaccine = async (req, res) => {
  try {
    const deletedVaccine = await Vaccine.findByIdAndDelete(req.params.id);
    if (!deletedVaccine) {
      return res.status(404).json({ message: "Vaccine not found" });
    }
    res.status(200).json({ message: "Vaccine deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addVaccine, getVaccines, deleteVaccine}; //getVaccineById, updateVaccine,  };
