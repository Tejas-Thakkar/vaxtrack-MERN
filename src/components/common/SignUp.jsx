import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../../assets/login.css";

export const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submitHandler = async (data) => {
    try {
      data.roleId = "67bfe3db45f0628c57dda5c2";
      const res = await axios.post("/user", data);

      if (res.status === 201) {
        alert("User created successfully");
        navigate("/login");
      } else {
        alert("User not created");
      }
    } catch (error) {
      alert("Signup Failed");
    }
  };

  return (
    <div className="login">
      <div className="login-card">
        <div className="brand">
          <div className="brand-logo"></div>
          <h1>CREATE ACCOUNT</h1>
          <p>Sign up to get started</p>
        </div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" {...register("firstName")} placeholder="Enter first name" />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" {...register("lastName")} placeholder="Enter last name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email")} placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...register("password")} placeholder="Enter password" />
          </div>
          {/* <div className="form-group">
            <label htmlFor="age">Age</label>
            <input type="number" id="age" {...register("age")} placeholder="Enter age" />
          </div> */}
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <div className="signup-link">
          <p>Already have an account? <a href="/login">Login</a></p>
        </div>
      </div>
    </div>
  );
};
// import React from 'react'
// 67bfe3db45f0628c57dda5c2
// export const SignUp = () => {
//   return (
//     <div>
//         <>
//   <meta charSet="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>Signup</title>
//   <link
//     href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
//     rel="stylesheet"
//   />
//   <div className="container d-flex justify-content-center align-items-center vh-100">
//     <div className="card p-4 shadow" style={{ width: 350 }}>
//       <h3 className="text-center mb-3">Sign Up</h3> 
//       <form>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">
//             Full Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             placeholder="Enter full name"
//             required=""
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email address
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             placeholder="Enter email"
//             required=""
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             placeholder="Enter password"
//             required=""
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="confirm-password" className="form-label">
//             Confirm Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="confirm-password"
//             placeholder="Confirm password"
//             required=""
//           />
//         </div>
//         <button type="submit" className="btn btn-primary w-100">
//           Sign Up
//         </button>
//       </form>
//       <p className="text-center mt-3">
//         Already have an account? <a href="#">Login</a>
//       </p>
//     </div>
//   </div>
// </>

//     </div>
//   )
// }
