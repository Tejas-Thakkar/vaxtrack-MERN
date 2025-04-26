const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const HealthcareProvidersSchema = new Schema({
     
    // providerId:{
    //     type:String,
    // },
    // providerName:{
    //     Type:String,
        
    // },
    providerType:{
        enum: ['Hospital','Clinic','VaccinationCenter'],
        type: String,
        required: true,
    },
    contact_number:{
        type: Number,
    },
    email:{
        type:String,
    },
    address:{
        type:String,
    },
    created_at:{
        type: Date,
        default: Date.now,
    }

})

module.exports = mongoose.model("HealthcareProviders", HealthcareProvidersSchema)