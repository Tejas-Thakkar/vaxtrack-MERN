const mongoose = require("mongoose")
const Schema = mongoose.Schema

const adminSchema = new Schema ({
    fullName:{
        type:String,
    },
    roleId:{
        type:Schema.Types.ObjectId,
        ref:"roles",
    },
    password:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    }
})

module.exports = mongoose.model("admin", adminSchema)
