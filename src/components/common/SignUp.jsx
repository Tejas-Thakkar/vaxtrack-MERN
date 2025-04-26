import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../assets/signup.css";

export const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState("user");
  const [userType, setUserType] = useState("");

  const roleIds = {
    patient_guardian: "67bfe3db45f0628c57dda5c2",
    healthcare_provider: "67e00d363aa0d04a0ee98c75",
    health_authority: "67e00d703aa0d04a0ee98c77",
    admin: "67e0d600279f04b22938d4e2",
  };

  const submitHandler = async (data) => {
    try {
      if (accountType === "user" && !userType) {
        toast.error("Please select a user type");
        return;
      }

      data.roleId = accountType === "admin" ? roleIds.admin : roleIds[userType];
      const res = await axios.post("/user", data);

      if (res.status === 201) {
        toast.success("Account created successfully!");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        toast.error("User not created");
      }
    } catch (error) {
      toast.error("Signup Failed: " + (error.response?.data?.message || "Please try again."));
    }
  };

  return (
    <div className="login">
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="login-card">
        <div className="brand">
          <h1>CREATE ACCOUNT</h1>
          <p>Sign up as Admin or User</p>
        </div>

        <div className="toggle-buttons">
          <button
            className={accountType === "user" ? "active" : ""}
            onClick={() => setAccountType("user")}
          >
            User
          </button>
          <button
            className={accountType === "admin" ? "active" : ""}
            onClick={() => navigate("/adminlogin")}
          >
            Admin
          </button>
        </div>

        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" {...register("firstName", { required: true })} placeholder="Enter first name" />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" {...register("lastName", { required: true })} placeholder="Enter last name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email", { required: true })} placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...register("password", { required: true })} placeholder="Enter password" />
          </div>

          {accountType === "user" && (
            <div className="form-group">
              <label htmlFor="userType">I am a</label>
              <select id="userType" value={userType} onChange={(e) => setUserType(e.target.value)} required>
                <option value="">Select user type</option>
                <option value="patient_guardian">Patient / Guardian</option>
                <option value="healthcare_provider">Healthcare Provider</option>
                <option value="health_authority">Health Authority</option>
              </select>
            </div>
          )}

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        <div className="signup-link">
          <p>Already have an account? <a href="/login">Login</a></p>
        </div>
      </div>
    </div>
  );
};





