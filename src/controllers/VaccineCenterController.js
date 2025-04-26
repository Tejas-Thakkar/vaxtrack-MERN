const VaccineCenter = require('../models/VaccineCenterModel');

const addVaccineCenter = async (req, res) => {
  try {
    const newCenter = await VaccineCenter.create(req.body);
    res.status(201).json({
      message: "Vaccine Center added successfully",
      data: newCenter
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllVaccineCenters = async (req, res) => {
  try {
    const centers = await VaccineCenter.find()
      .populate('stateId cityId areaId');
    if (centers.length === 0) {
      res.status(404).json({ message: "No Vaccine Centers found" });
    } else {
      res.status(200).json({
        message: "Vaccine Centers fetched successfully",
        data: centers
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteVaccineCenter = async (req, res) => {
  try {
    const result = await VaccineCenter.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "Vaccine Center not found" });
    }
    res.status(200).json({ message: "Vaccine Center deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addVaccineCenter,
  getAllVaccineCenters,
  deleteVaccineCenter
};
