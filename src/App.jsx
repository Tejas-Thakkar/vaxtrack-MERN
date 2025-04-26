import { useEffect, useState } from 'react'
// //import reactLogo from './assets/react.svg'
// //import viteLogo from '/vite.svg'
import { UserSidebar } from './components/layouts/UserSidebar'
import "./assets/adminlte.css"
import "./assets/adminlte.min.css"
import axios from 'axios'
import { Route, Routes, useLocation } from 'react-router-dom'
// import { UserProfile } from './components/user/UserProfile'
import { Login } from './components/common/Login'
import { SignUp } from './components/common/SignUp'

// import { DemoForm } from './components/layouts/DemoForm'
// import { AdminLogin } from './components/admin/AdminLogin'
import { AppointmentForm } from "./components/common/AppointmentForm"; // Adjust path
//import LandingPage from './components/common/LandingPage'
//import PrivateRoutes from "./hooks/PrivateRoutes";
// import { VaxAppointment } from './components/patient portal/VaxAppointment'
import PrivateRoutes from './hooks/PrivateRoutes';
import LandingPage from './components/common/LandingPage'
import Dashboard2 from './components/common/Dashboard2'
import  Dashboard  from './components/common/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // For dropdowns
import HealthcareProvider from './components/common/HealthcareProvider'
import VaccineCenter from './components/common/VaccineCenter'
import VaccineReminders from './components/common/VaccineReminders'
import UserProfile from './components/user/UserProfile'
import AdminLogin from './components/common/AdminLogin'
import Certificate from './components/common/Certificate'


// import { Dashboard } from './components/common/Dashboard'


// import PatientDashboard from './components/patient portal/PatientDashboard'






function App() {

  axios.defaults.baseURL = "http://localhost:3000"

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      document.body.className = ""; // Remove the unwanted class for login and signup
    } else {
      document.body.className =
        "layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
    }
  }, [location.pathname]);


  return (
    <>
      <div className={location.pathname === "/login" || location.pathname === "/signup" ? "" : "app-wrapper"}>
        
          <Routes>
            <Route path="/user" element={<UserSidebar />}>
            <Route path='userprofile' element={<UserProfile />}></Route>
            <Route path="dashboard2" element={<Dashboard2 />}></Route>
               <Route path="appointment" element={<AppointmentForm />}></Route> 
                  <Route path='vaccinationcenter' element={<VaccineCenter />}></Route>
                  <Route path='vaccinereminders' element={<VaccineReminders />}></Route>
                  <Route path='certificate' element={<Certificate />}></Route>
               
            
            
            </Route>
            <Route path="/login" element={<Login />}></Route>
                <Route path='/healthcareprovider' element={<HealthcareProvider />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path='/adminlogin' element={<AdminLogin />}></Route>
            {/* <Route path='/heathcareprovider'element={<HealthcareProvider/>}></Route> */}
              <Route path="dashboard" element ={<Dashboard />}></Route>
            <Route path = "/" element = {<LandingPage/>}></Route>
            {/* <Route path="/dashboard" element = {<Dashboard/>}></Route> */}
            {/* <Route path="/demoform" element={<DemoForm/>}></Route> */}
            {/* <Route path="/adminlogin" element={<AdminLogin/>}></Route>  */}
            {/* <Route path="/appointment" element={<VaxAppointment/>}></Route> */}
            {/* <Route path="appointment" element={<AppointmentForm/>}></Route> */}
            {/* <Route path='/patient_portal' element={<PatientDashboard/>}></Route> */}

            </Routes>
         
       </div>


        {/* <div>
          <h1>app file</h1>
        </div> */}
    </>
  )
}

export default App
