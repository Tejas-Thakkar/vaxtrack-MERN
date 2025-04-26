const mongoose = require("mongoose");
const Schema = mongoose.Schema

const AppointmentSchema = new Schema({
  userName: { type: String, required: true },
  age: { type: Number, required: true, min: 0 },
  gender: { type: String, enum: ["Male", "Female", "Other"]}, //required: true },
  
  vaccineId: { type: mongoose.Schema.Types.ObjectId, ref: "Vaccine", required: true },

  ProviderType:{
    enum: ['City Health Center', 'owntown Clinic', 'Community Hospital', 'VaccinationCentre'],
    type: String,
    //required: true
    
},
  //healthcareProviderId: { type: mongoose.Schema.Types.ObjectId, ref: "HealthcareProvider", required: true },
  // location: { type: String, required: true }, // New field for hospital/clinic name
  stateId:{
    type: Schema.Types.ObjectId,
    ref: 'State',
    required: true
},
  cityId: { type: mongoose.Schema.Types.ObjectId, ref: "City", required: true },
  areaId: { type: mongoose.Schema.Types.ObjectId, ref: "Area"}, //required: true },
  appointmentDate: { type: Date, required: true }, // Already present, just ensuring it's there
  status: { type: String, enum: ["Scheduled", "Completed", "Cancelled"], default: "Scheduled",required: true },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Appointment", AppointmentSchema);

