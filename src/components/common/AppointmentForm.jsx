import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { Navigate } from "react-router-dom";

export const AppointmentForm = () => {
  const navigate = useNavigate()
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [areas, setAreas] = useState([]);
  const [providers, setProviders] = useState([]);
  const [vaccines, setVaccines] = useState([]);

  useEffect(() => {
    getAllStates();
    getAllProviders();
    getAllVaccines();
    getAllCities();
    getAllAreas();
  }, []);

  const getAllStates = async () => {
    const res = await axios.get("/state/getallstates");
    setStates(res.data.data);
  };

  const getAllCities = async () => {
    const res = await axios.get("/city/getallcities");
    setCities(res.data.data);
  };

  const getCityByStateId = async (id) => {
    const res = await axios.get("/city/getcitybystate/" + id);
    setCities(res.data.data);
  };


  const getAllAreas = async () => {
    const res = await axios.get("/area/getallareas");
    setAreas(res.data.data);
  };

  const getAreaByCityId = async (id) => {
    const res = await axios.get("/area/getareabycity/" + id);
    setAreas(res.data.data);
  };

  const getAllProviders = async () => {
    const res = await axios.get("/providers/getall");
    setProviders(res.data.data);
  };

  const getAllVaccines = async () => {
    const res = await axios.get("/vaccine/all");
    setVaccines(res.data.data);
  };

  const { register, handleSubmit } = useForm();

  const submitHandler = async (data) => {
    try {
      // Add userId from localStorage
      data.userId = localStorage.getItem("id");
  
      // Log the data before sending the request
      console.log("Sending Data:", data);
  
      // Send POST request to backend
      const res = await axios.post("appointment/add", data);
  
      // Log the successful response
      toast.success("Appointment booked successfully!");
      setTimeout(() => navigate("/user/certificate"), 2000);
      // console.log("Response:", res.data);
      // navigate("/user/certificate")
      
  
      // Optionally, show success message
      alert("Appointment booked successfully!");
    } catch (error) 
    // {
    //   console.error("axios error:", error.response && error.response.data ? error.response.data : error.message);
    //   alert("Error booking appointment. Please try again.");
    // }
    {
    console.error("axios error:", error.response?.data || error.message);
      toast.error("Error booking appointment. Please try again.");
    }
  };
  
  return (
    <div className="container py-5">
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg rounded-4 p-4">
            <h2 className="text-center fw-bold mb-4" style={{ color: '#003366' }}>
              🩺 Book Your Vaccine Appointment
            </h2>
            <form onSubmit={handleSubmit(submitHandler)}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control rounded-3" {...register("userName")} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Age</label>
                  <input type="number" className="form-control rounded-3" {...register("age")} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Gender</label>
                  <select className="form-select rounded-3" {...register("gender")} required>
                    <option value="">SELECT GENDER</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Healthcare Provider</label>
                  <select className="form-select rounded-3" {...register("ProviderType")}>
                    <option value="City Health Center">City Health Center</option>
                    <option value="Owntown Clinic">Owntown Clinic</option>
                    <option value="Community Hospital">Community Hospital</option>
                    <option value="VaccinationCentre">VaccinationCentre</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Select Vaccine</label>
                  <select className="form-select rounded-3" {...register("vaccineId")}>
                    <option>SELECT VACCINE</option>
                    {vaccines?.map((vaccine) => (
                      <option key={vaccine._id} value={vaccine._id}>{vaccine.name}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Select State</label>
                  <select className="form-select rounded-3" {...register("stateId")} onChange={(e) => getCityByStateId(e.target.value)}>
                    <option>SELECT STATE</option>
                    {states?.map((state) => (
                      <option key={state._id} value={state._id}>{state.name}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Select City</label>
                  <select className="form-select rounded-3" {...register("cityId")} onChange={(e) => getAreaByCityId(e.target.value)}>
                    <option>SELECT CITY</option>
                    {cities?.map((city) => (
                      <option key={city._id} value={city._id}>{city.name}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Select Area</label>
                  <select className="form-select rounded-3" {...register("areaId")}>
                    <option>SELECT AREA</option>
                    {areas?.map((area) => (
                      <option key={area._id} value={area._id}>{area.name}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Appointment Date</label>
                  <input type="date" className="form-control rounded-3" {...register("appointmentDate")} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Status</label>
                  <select className="form-select rounded-3" {...register("status")}>
                    <option value="Scheduled">Scheduled</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-primary mt-4 w-100 rounded-pill shadow">
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
  
};