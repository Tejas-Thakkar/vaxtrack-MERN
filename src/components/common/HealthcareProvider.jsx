// HealthcareProviderDashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HealthcareProviderDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [vaccines, setVaccines] = useState([]);
  const [newVaccine, setNewVaccine] = useState({
    name: '',
    manufacturer: '',
    doses_required: '',
    storage_temp: '',
    expiry_date: '',
  });
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    fetchAppointments();
    fetchVaccines();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await axios.get("/appointment/all");
      setAppointments(res.data.data);
    } catch (err) {
      toast.error("Failed to fetch appointments");
    }
  };

  const updateAppointmentStatus = async (id, status) => {
    try {
      await axios.put(`/appointment/update/${id}`, { status });
      toast.success("Appointment status updated");
      fetchAppointments();
    } catch (err) {
      toast.error("Failed to update status");
    }
  };

  const deleteAppointment = async (id) => {
    try {
      await axios.delete(`/appointment/delete/${id}`);
      toast.success("Appointment deleted");
      fetchAppointments();
    } catch (err) {
      toast.error("Failed to delete appointment");
    }
  };

  const fetchVaccines = async () => {
    try {
      const res = await axios.get("/vaccine/all");
      setVaccines(res.data.data);
    } catch (err) {
      toast.error("Failed to fetch vaccines");
    }
  };

  const handleAddVaccine = async () => {
    try {
      await axios.post("/vaccine/add", newVaccine);
      toast.success("Vaccine added");
      setNewVaccine({ name: '', manufacturer: '', doses_required: '', storage_temp: '', expiry_date: '' });
      fetchVaccines();
    } catch (err) {
      toast.error("Failed to add vaccine");
    }
  };

  const deleteVaccine = async (id) => {
    try {
      await axios.delete(`/vaccine/delete/${id}`);
      toast.success("Vaccine deleted");
      fetchVaccines();
    } catch (err) {
      toast.error("Failed to delete vaccine");
    }
  };

  return (
    <div className="dashboard-container">
      <ToastContainer />
      <div className="sidebar">
        <h2>Healthcare Provider</h2>
        <ul>
          <li className={activeTab === "dashboard" ? "active" : ""} onClick={() => setActiveTab("dashboard")}>Dashboard</li>
          <li className={activeTab === "appointments" ? "active" : ""} onClick={() => setActiveTab("appointments")}>Appointments</li>
          <li className={activeTab === "vaccines" ? "active" : ""} onClick={() => setActiveTab("vaccines")}>Vaccines</li>
        </ul>
      </div>

      <div className="content">
        <h1 className="dashboard-title">Welcome, Provider</h1>

        {activeTab === "dashboard" && (
          <div className="stats-container">
            <div className="stat-card">
              Total Appointments
              <span>{appointments.length}</span>
            </div>
            <div className="stat-card">
              Total Vaccines
              <span>{vaccines.length}</span>
            </div>
          </div>
        )}

        {activeTab === "appointments" && (
          <div className="form-section">
            <h2>All Appointments</h2>
            {appointments.map((app) => (
              <div key={app._id} className="vaccine-card">
                <p><strong>👤 Name:</strong> {app.userName}</p>
                <p><strong>🎂 Age:</strong> {app.age}</p>
                <p><strong>⚧ Gender:</strong> {app.gender}</p>
                <p><strong>📋 Provider:</strong> {app.ProviderType}</p>
                <p><strong>💉 Vaccine:</strong> {app.vaccineId?.name} ({app.vaccineId?.manufacturer})</p>
                <p><strong>📍 Location:</strong> {app.stateId?.name}, {app.cityId?.name}, {app.areaId?.name}</p>
                <p><strong>📅 Appointment Date:</strong> {new Date(app.appointmentDate).toLocaleDateString()}</p>
                <p><strong>📌 Status:</strong> {app.status}</p>
                <div className="btn-group">
                  <button className="btn" onClick={() => updateAppointmentStatus(app._id, "Scheduled")}>Schedule</button>
                  <button className="btn" onClick={() => updateAppointmentStatus(app._id, "Completed")}>Complete</button>
                  <button className="btn" onClick={() => updateAppointmentStatus(app._id, "Cancelled")}>Cancel</button>
                  <button className="btn" onClick={() => deleteAppointment(app._id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "vaccines" && (
          <>
            <div className="form-section">
              <h2>Add Vaccine</h2>
              <input type="text" placeholder="Vaccine Name" value={newVaccine.name} onChange={(e) => setNewVaccine({ ...newVaccine, name: e.target.value })} className="input-box" />
              <input type="text" placeholder="Manufacturer" value={newVaccine.manufacturer} onChange={(e) => setNewVaccine({ ...newVaccine, manufacturer: e.target.value })} className="input-box" />
              <input type="number" placeholder="Doses Required" value={newVaccine.doses_required} onChange={(e) => setNewVaccine({ ...newVaccine, doses_required: e.target.value })} className="input-box" />
              <input type="text" placeholder="Storage Temp" value={newVaccine.storage_temp} onChange={(e) => setNewVaccine({ ...newVaccine, storage_temp: e.target.value })} className="input-box" />
              <input type="date" placeholder="Expiry Date" value={newVaccine.expiry_date} onChange={(e) => setNewVaccine({ ...newVaccine, expiry_date: e.target.value })} className="input-box" />
              <button className="btn" onClick={handleAddVaccine}>Add Vaccine</button>
            </div>

            <div className="form-section">
              <h2>All Vaccines</h2>
              {vaccines.map((vaccine) => (
                <div key={vaccine._id} className="vaccine-card">
                  <p><strong>{vaccine.name}</strong> — {vaccine.manufacturer} | {vaccine.doses_required} dose(s)</p>
                  <button className="btn" onClick={() => deleteVaccine(vaccine._id)}>Delete</button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HealthcareProviderDashboard;