
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// // import { CustomLoader } from "./CustomLoader";
// import { Bounce, toast, ToastContainer } from "react-toastify";

// export const SignUp = () => {
//   const [isLoading, setisLoading] = useState(false);
//   const { register, handleSubmit, formState: { errors }, watch } = useForm();
//   const navigate = useNavigate();

//   const submitHandler = async (data) => {
//     try {
//       setisLoading(true);
//       data.roleId = "67bfe3db45f0628c57dda5c2";
//       const res = await axios.post("/user", data);
//       console.log(res);
      

//       if (res.status === 201) {
//         toast.success('User created successfully!', {
//           position: "top-left",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: false,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//           transition: Bounce,
//         });
//         navigate("/login");
//       }
//     } catch (error) {
//       console.error('Error creating user:', error);
//       toast.error('Failed to create user. Please try again.', {
//         position: "top-left",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: false,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//         transition: Bounce,
//       });
//     } finally {
//       setisLoading(false);
//     }
//   };

//   const password = watch("password");

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 flex items-center justify-center p-4">
//       <ToastContainer
//         position="top-left"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick={false}
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//         transition={Bounce}
//       />
//       {isLoading && <CustomLoader />}
//       <div className="w-full max-w-lg p-8 bg-white shadow-2xl rounded-xl transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-3xl">
//         <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Create Your Account</h1>

//         <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
//           {/* First Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">First Name</label>
//             <input
//               type="text"
//               {...register("firstName", {
//                 required: "First Name is required",
//               })}
//               className="w-full mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
//             />
//             {errors.firstName && <p className="text-sm text-red-500 mt-2">{errors.firstName.message}</p>}
//           </div>

//           {/* Last Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Last Name</label>
//             <input
//               type="text"
//               {...register("lastName", {
//                 required: "Last Name is required",
//               })}
//               className="w-full mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
//             />
//             {errors.lastName && <p className="text-sm text-red-500 mt-2">{errors.lastName.message}</p>}
//           </div>

//           {/* Age */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Age</label>
//             <input
//               type="number"
//               {...register("age", {
//                 required: "Age is required",
//                 min: { value: 1, message: "Age must be greater than 0" },
//                 max: { value: 120, message: "Age must be less than 120" }
//               })}
//               className="w-full mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
//             />
//             {errors.age && <p className="text-sm text-red-500 mt-2">{errors.age.message}</p>}
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               {...register("email", {
//                 required: "Email is required",
//                 pattern: { value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, message: "Invalid email address" }
//               })}
//               className="w-full mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
//             />
//             {errors.email && <p className="text-sm text-red-500 mt-2">{errors.email.message}</p>}
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               {...register("password", {
//                 required: "Password is required",
//                 minLength: { value: 8, message: "Password must be at least 8 characters" }
//               })}
//               className="w-full mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
//             />
//             {errors.password && <p className="text-sm text-red-500 mt-2">{errors.password.message}</p>}
//           </div>

//           {/* Confirm Password */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
//             <input
//               type="password"
//               {...register("confirmPassword", {
//                 required: "Confirming your password is required",
//                 validate: (value) => value === password || "Passwords do not match"
//               })}
//               className="w-full mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
//             />
//             {errors.confirmPassword && <p className="text-sm text-red-500 mt-2">{errors.confirmPassword.message}</p>}
//           </div>

//           {/* Submit Button */}
//           <div>
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full py-3 px-4 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
//             >
//               {isLoading ? "Signing Up..." : "Sign up"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
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
          { <div className="form-group">
            <label htmlFor="age">Age</label>
            <input type="number" id="age" {...register("age")} placeholder="Enter age" />
          </div> }
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
