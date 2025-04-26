import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../../assets/login.css";

const AdminLogin = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submitHandler = async (data) => {
    const allowedAdminEmail = "admin@vaxtrack.com"; // Only allow login with this email

    if (data.email !== allowedAdminEmail) {
      alert("Unauthorized! Only admin can login.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/admin/login", data);

      alert("Admin Logged In Successfully!");

      // Store admin info in localStorage
      localStorage.setItem("id", res.data.data._id);
      localStorage.setItem("role", res.data.data.roleId);

      // Redirect to admin dashboard
      navigate("/dashboard"); // Redirect to admin dashboard
    } catch (error) {
      console.error(error);
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="login">
      <div className="login-card">
        <div className="brand">
          <h2>Admin Login</h2>
          <p>Enter your credentials to access the admin dashboard</p>
        </div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="form-group">
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
              placeholder="Enter password"
            />
          </div>
          <div className="remember-forgot">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <div className="social-login">
          <h6>Or login with</h6>
          <div className="social-buttons">
            <div className="social-btn">G</div>
            <div className="social-btn">F</div>
          </div>
        </div>
        <div className="signup-link">
          <p>
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
