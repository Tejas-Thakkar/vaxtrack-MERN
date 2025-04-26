import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const userId = localStorage.getItem("id");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`/user/${userId}`);
        if (res.status === 200) {
          setUserData(res.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
        alert("Something went wrong fetching user profile");
      }
    };

    if (userId) {
      fetchUser();
    } else {
      navigate("/login");
    }
  }, [userId, navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <h2>User Profile</h2>
      {userData ? (
        <div style={styles.card}>
          <p><strong>First Name:</strong> {userData.firstName}</p>
          <p><strong>Last Name:</strong> {userData.lastName}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          {/* <p><strong>Role:</strong> { userData.roleId.name}</p> */}
          <button style={styles.logoutBtn} onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "500px",
    margin: "auto",
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  logoutBtn: {
    backgroundColor: "#ff4d4f",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    marginTop: "20px",
    cursor: "pointer",
  }
};

export default UserProfile;

