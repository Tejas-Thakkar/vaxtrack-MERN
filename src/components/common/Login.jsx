import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../../assets/login.css";

export const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const submitHandler = async (data) => {
    try {
      const res = await axios.post("/user/login", data);
      if (res.status === 200) {
        alert("Login Success");
        localStorage.setItem("id", res.data.data._id);
        localStorage.setItem("role", res.data.data.roleId.name);

        if(res.data.data.roleId.role === "USER"){
          navigate("/user") //check in app.js
        }
      }
      else{
        alert("Login Failed")
      }
    
    } catch (error) {
      alert("Login Failed");
    }
  };

  return (
    <div className="login">
      <div className="login-card">
        <div className="brand">
          <div className="brand-logo"></div>
          <h1>LOGIN USER</h1>
          <p>Enter your credentials to access your account</p>
        </div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="form-group">
            <label htmlFor="email">EMAIL</label>
            <input
              type="text"
              id="email"
              {...register("email")}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register("password")}
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
          <p>Or login with</p>
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
// import React from 'react'
/*if (res.data.data.roleId.name === "USER") {
          navigate("/user");
        } else if (res.data.data.roleId.name === "Agency") {
          navigate("/agency");
        }
      }
    }*/ 

/*if(res.data.data.roleId.role === "USER"){
        navigate("/user") //check in app.js
      }
    }
    else{
      alert("Login Failed")
    }
  }*/
// export const Login = () => {
//   return (
//     <div>
//         <>
//   <meta charSet="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>Login</title>
//   <link
//     href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
//     rel="stylesheet"
//   />
//   <div className="container d-flex justify-content-center align-items-center vh-100">
//     <div className="card p-4 shadow" style={{ width: 350 }}>
//       <h3 className="text-center mb-3">Patient Login</h3>
//       <form>
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
//         <div className="mb-3 position-relative">
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
//           <span
//             className="position-absolute end-0 top-50 translate-bottom-y me-3"
//             style={{ cursor: "pointer" }}
//             onclick="togglePassword()"
//           >
//             <i id="toggleIcon" className="bi bi-eye" />
//           </span>
//         </div>
//         <button type="submit" className="btn btn-primary w-100">
//           Login
//         </button>
//       </form>
//       <p className="text-center mt-3">
//         <a href="#">Forgot password?</a>
//       </p>
//     </div>
//   </div>
//   <link
//     rel="stylesheet"
//     href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
//   />
// </>

//     </div>
//   )
// }
