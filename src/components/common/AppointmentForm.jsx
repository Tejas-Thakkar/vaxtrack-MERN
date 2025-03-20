import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const AppointmentForm = () => {
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
    data.userId = localStorage.getItem("id");
    const res = await axios.post("/appointment/add", data)
    
    console.log(res.data);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-16">
          <div className="card p-4 shadow">
            <h2 className="text-center mb-4">Book an Appointment</h2>
            <form onSubmit={handleSubmit(submitHandler)}>
            <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" {...register("userName")} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Age</label>
                <input type="number" className="form-control" {...register("age")} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Gender</label>
                <select className="form-select" {...register("gender")} required>
                  <option value="">SELECT GENDER</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Select Healthcare Provider</label>
                <select className="form-select" {...register("ProviderType")}> 
                <option value="City Health Center">City Health Center</option>
                  <option value="Owntown Clinic">Owntown Clinic</option>
                  <option value="Community Hospital">Community Hospital</option>
                  <option value="VaccinationCentre">VaccinationCentre</option>
                  {/* {providers?.map((provider) => (
                    <option key={provider._id} value={provider._id}>{provider.name}</option>
                  ))} */}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Select Vaccine</label>
                <select className="form-select" {...register("vaccineId")}> 
                  <option>SELECT VACCINE</option>
                  {vaccines?.map((vaccine) => (
                    <option key={vaccine._id} value={vaccine._id}>{vaccine.name}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Select State</label>
                <select
                  className="form-select"
                  {...register("stateId")}
                  onChange={(event) => getCityByStateId(event.target.value)}
                >
                  <option>SELECT STATE</option>
                  {states?.map((state) => (
                    <option key={state._id} value={state._id}>{state.name}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Select City</label>
                <select
                  className="form-select"
                  {...register("cityId")}
                  onChange={(event) => getAreaByCityId(event.target.value)}
                >
                  <option>SELECT CITY</option>
                  {cities?.map((city) => (
                    <option key={city._id} value={city._id}>{city.name}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Select Area</label>
                <select className="form-select" {...register("areaId")}>
                  <option>SELECT AREA</option>
                  {areas?.map((area) => (
                    <option key={area._id} value={area._id}>{area.name}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Appointment Date</label>
                <input type="date" className="form-control" {...register("appointmentDate")} />
              </div>
              <div className="mb-3">
                <label className="form-label">Status</label>
                <select className="form-select" {...register("status")}> 
                <option value="Scheduled">Scheduled</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary w-100">Book Appointment</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};