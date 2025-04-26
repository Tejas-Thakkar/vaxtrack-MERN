const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vaccineCenterSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  stateId: {
    type: Schema.Types.ObjectId,
    ref: 'State',
    required: true
  },
  cityId: {
    type: Schema.Types.ObjectId,
    ref: 'City',
    required: true
  },
  areaId: {
    type: Schema.Types.ObjectId,
    ref: 'Area',
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model('VaccineCenter', vaccineCenterSchema);
