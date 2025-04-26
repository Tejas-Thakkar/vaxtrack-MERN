const mongoose = require("mongoose");
const Schema = mongoose.Schema

const VaccineSchema = new Schema({
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  doses_required: { type: Number, required: true, min: 1 },
  storage_temp: { type: String, required: true },
  expiry_date: { type: Date, required: true },
  created_at: { type: Date, default: Date.now },
  
}
);

module.exports = mongoose.model("Vaccine", VaccineSchema);

