const express = require("express") //express...
const mongoose = require("mongoose")
const cors = require("cors")

//express object.
const app = express()
app.use(cors())
app.use(express.json())



const roleRoutes = require("./src/routes/RoleRoute")
app.use(roleRoutes)

const userRoutes = require("./src/routes/UserRoute")
app.use(userRoutes)

const stateRoutes = require("./src/routes/StateRoute")
app.use("/state",stateRoutes)

const cityRoutes = require("./src/routes/CityRoute")
app.use("/city",cityRoutes) //http://localhost:3000/city/addCity

const areaRoutes = require("./src/routes/AreaRoute")
app.use("/area",areaRoutes) //http://localhost:3000/area/add

const vaccineRoutes = require("./src/routes/VaccineRoute")
app.use("/vaccine",vaccineRoutes)

const AppointmentRoutes = require("./src/routes/AppointmentRoute")
app.use("/appointment",AppointmentRoutes)

const HealthcareProvidersRoute = require("./src/routes/HealthcareProviderRoute")
app.use("/heathcareprovider", HealthcareProvidersRoute )


mongoose.connect("mongodb://127.0.0.1:27017/new_folder").then(()=>{
    console.log("database connected..")
})

const PORT =3000
app.listen(PORT,()=>{
    console.log("server started on port number ",PORT)
})



// console.log("hello");
// const user=require("./user")
// console.log(user)
// console.log(user.userName)
// console.log(user.userAge)
// user.printUserData(23)