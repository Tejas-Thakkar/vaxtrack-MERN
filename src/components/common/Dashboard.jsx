// Dashboard.jsx (With Toast Notifications)
import React, { useEffect, useState } from "react";
import '/Vaxtrack/frontend/public/css/dashboard.css';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const [userEmail, setUserEmail] = useState('');
  const [users, setUsers] = useState([]);
  const [userForm, setUserForm] = useState({ firstName: '', lastName: '', age: '', email: '', password: '', status: true });
  const [providerEmail, setProviderEmail] = useState('');
  const [center, setCenter] = useState({ name: '', address: '', contactNumber: '', stateId: '', cityId: '', areaId: '' });
  const [centers, setCenters] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [areas, setAreas] = useState([]);
  const [stats, setStats] = useState({ totalUsers: 0, totalProviders: 0, totalVaccinators: 0, totalVaccines: 4 });
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    // fetchStats();
    fetchUsers();
    fetchCenters();
    fetchStates();
  }, []);

  useEffect(() => {
    setStats({
      totalUsers: users.length,
      totalProviders: centers.length,
      totalVaccinators: 0,
      totalVaccines: 4,
    });
  }, [users, centers]);

  // const fetchStats = async () => {
  //   try {
  //     const dummyData = { totalUsers: 15, totalProviders: 12, totalVaccinators: 10, totalVaccines: 50 };
  //     setStats(dummyData);
  //   } catch (error) {
  //     console.error("Error fetching stats:", error);
  //   }
  // };

  const fetchUsers = async () => {
    try {
      const res = await axios.get("/users");
      setUsers(res.data.data);
    } catch (error) {
      toast.error("Failed to fetch users.");
    }
  };

  const handleAddUser = async () => {
    try {
      const res = await axios.post("/user", userForm);
      toast.success("User added successfully.");
      setUserForm({ firstName: '', lastName: '', age: '', email: '', password: '', status: true });
      fetchUsers();
    } catch (err) {
      toast.error("Failed to add user.");
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`/user/${id}`);
      toast.success("User deleted successfully.");
      fetchUsers();
    } catch (err) {
      toast.error("Failed to delete user.");
    }
  };

  const fetchCenters = async () => {
    try {
      const res = await axios.get("/vaccinecenter/all");
      setCenters(res.data.data);
    } catch (error) {
      toast.error("Failed to fetch vaccine centers.");
    }
  };

  const fetchStates = async () => {
    try {
      const res = await axios.get("/state/getallstates");
      setStates(res.data.data);
    } catch (error) {
      toast.error("Failed to fetch states.");
    }
  };

  const getCityByStateId = async (id) => {
    try {
      const res = await axios.get(`/city/getcitybystate/${id}`);
      setCities(res.data.data);
    } catch (error) {
      toast.error("Failed to fetch cities.");
    }
  };

  const getAreaByCityId = async (id) => {
    try {
      const res = await axios.get(`/area/getareabycity/${id}`);
      setAreas(res.data.data);
    } catch (error) {
      toast.error("Failed to fetch areas.");
    }
  };

  const handleAddCenter = async () => {
    try {
      const body = { ...center, isActive: true };
      await axios.post("/vaccinecenter/add", body);
      toast.success("Vaccine Center added successfully.");
      setCenter({ name: '', address: '', contactNumber: '', stateId: '', cityId: '', areaId: '' });
      setCities([]);
      setAreas([]);
      fetchCenters();
    } catch (err) {
      toast.error("Failed to add vaccine center.");
    }
  };

  const handleDeleteCenter = async (id) => {
    try {
      await axios.delete(`/vaccinecenter/delete/${id}`);
      toast.success("Center deleted successfully.");
      fetchCenters();
    } catch (err) {
      toast.error("Failed to delete vaccine center.");
    }
  };

  return (
    <div className="dashboard-container">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover />
      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li className={activeTab === "dashboard" ? "active" : ""} onClick={() => setActiveTab("dashboard")}>Dashboard</li>
          <li className={activeTab === "users" ? "active" : ""} onClick={() => setActiveTab("users")}>Users</li>
          <li className={activeTab === "providers" ? "active" : ""} onClick={() => setActiveTab("providers")}>Healthcare Providers</li>
          <li className={activeTab === "sales" ? "active" : ""} onClick={() => setActiveTab("sales")}>Sales</li>
          <li className={activeTab === "settings" ? "active" : ""} onClick={() => setActiveTab("settings")}>Settings</li>
        </ul>
      </div>

      <div className="content">
        <h1 className="dashboard-title">Welcome, Admin</h1>

        {activeTab === "dashboard" && (
          <div className="stats-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="stat-card bg-white p-6 rounded-2xl shadow text-center">
              <p className="text-gray-600">Users</p>
              <span className="text-3xl font-bold">{stats.totalUsers}</span>
            </div>
            <div className="stat-card bg-white p-6 rounded-2xl shadow text-center">
              <p className="text-gray-600">Healthcare Providers</p>
              <span className="text-3xl font-bold">{stats.totalProviders}</span>
            </div>
            <div className="stat-card bg-white p-6 rounded-2xl shadow text-center">
              <p className="text-gray-600">Vaccinators</p>
              <span className="text-3xl font-bold">0</span>
            </div>
            <div className="stat-card bg-white p-6 rounded-2xl shadow text-center">
              <p className="text-gray-600">Vaccines</p>
              <span className="text-3xl font-bold">4</span>
            </div>
          </div>
          
        )}

        

        {activeTab === "users" && (
          <>
            <div className="form-section">
              <h2>Add User</h2>
              <input type="text" placeholder="First Name" className="input-box" value={userForm.firstName} onChange={(e) => setUserForm({ ...userForm, firstName: e.target.value })} />
              <input type="text" placeholder="Last Name" className="input-box" value={userForm.lastName} onChange={(e) => setUserForm({ ...userForm, lastName: e.target.value })} />
              <input type="number" placeholder="Age" className="input-box" value={userForm.age} onChange={(e) => setUserForm({ ...userForm, age: e.target.value })} />
              <input type="email" placeholder="Email" className="input-box" value={userForm.email} onChange={(e) => setUserForm({ ...userForm, email: e.target.value })} />
              <input type="password" placeholder="Password" className="input-box" value={userForm.password} onChange={(e) => setUserForm({ ...userForm, password: e.target.value })} />
              <button className="btn" onClick={handleAddUser}>Add User</button>
            </div>

            <div className="form-section">
              <h2>All Users</h2>
              {users.map((user) => (
                <div key={user._id} className="vaccine-card">
                  <p><strong>{user.firstName} {user.lastName}</strong> — Age: {user.age} | Email: {user.email}</p>
                  <button className="btn" onClick={() => handleDeleteUser(user._id)}>Delete</button>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === "providers" && (
          <>
            <div className="form-section">
              <h2>Add Vaccine Center</h2>
              <input type="text" placeholder="Center Name" className="input-box" value={center.name} onChange={(e) => setCenter({ ...center, name: e.target.value })} />
              <input type="text" placeholder="Address" className="input-box" value={center.address} onChange={(e) => setCenter({ ...center, address: e.target.value })} />
              <input type="text" placeholder="Contact Number" className="input-box" value={center.contactNumber} onChange={(e) => setCenter({ ...center, contactNumber: e.target.value })} />
              <select className="input-box" value={center.stateId} onChange={(e) => { setCenter({ ...center, stateId: e.target.value }); getCityByStateId(e.target.value); }}>
                <option value="">Select State</option>
                {states.map((state) => (<option key={state._id} value={state._id}>{state.name}</option>))}
              </select>
              <select className="input-box" value={center.cityId} onChange={(e) => { setCenter({ ...center, cityId: e.target.value }); getAreaByCityId(e.target.value); }}>
                <option value="">Select City</option>
                {cities.map((city) => (<option key={city._id} value={city._id}>{city.name}</option>))}
              </select>
              <select className="input-box" value={center.areaId} onChange={(e) => setCenter({ ...center, areaId: e.target.value })}>
                <option value="">Select Area</option>
                {areas.map((area) => (<option key={area._id} value={area._id}>{area.name}</option>))}
              </select>
              <button className="btn" onClick={handleAddCenter}>Add Center</button>
            </div>

            <div className="form-section">
              <h2>Existing Vaccine Centers</h2>
              {centers.map((c) => (
                <div key={c._id} className="vaccine-card">
                  <p><strong>{c.name}</strong> — {c.address} ({c.contactNumber})</p>
                  <button className="btn" onClick={() => handleDeleteCenter(c._id)}>Delete</button>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === "sales" && (
          <div className="form-section"><h2>Sales Report</h2><p>Coming soon...</p></div>
        )}

        {activeTab === "settings" && (
          <div className="form-section"><h2>Settings</h2><p>Manage admin settings here...</p></div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;



/* 
const handleAddUser = async () => {
    try {
      const res = await axios.post("/user", userForm);
      toast.success("User added successfully.");
      setUserForm({ firstName: '', lastName: '', age: '', email: '', password: '', status: true });
      fetchUsers();
    } catch (err) {
      toast.error("Failed to add user.");
    }
  };
*/
