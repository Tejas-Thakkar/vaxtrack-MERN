import React from "react";
import { FaBars, FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
import { MdFullscreen } from "react-icons/md";
import { Link } from "react-router-dom";
// import hamburgermenu from "../../assets/images/hamburgermenu.png"; // update the path if needed

export const UserNavbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 shadow-sm">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left section */}
        <div className="d-flex align-items-center gap-3">
          {/* <button className="btn btn-outline-secondary" onClick={toggleSidebar}>
            <img src={hamburgermenu} alt="menu" style={{ height: 25, width: 25 }} />
          </button> */}
          <a className="navbar-brand fw-bold fs-4" href="#">
            VMS Portal
          </a>
        </div>

        {/* Right section */}
        <div className="d-flex align-items-center gap-3">
          {/* Search */}
          <button className="btn btn-light">
            <FaSearch size={18} />
          </button>

          {/* Notifications */}
          <div className="dropdown">
            <button
              className="btn btn-light dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FaBell size={18} />
              <span className="badge bg-danger rounded-circle position-absolute translate-middle p-1">
                3
              </span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end shadow">
              <li><Link to='appointment' className="dropdown-item" >New Appointment</Link></li>
              <li><Link to='vaccinereminders'className="dropdown-item" >Reminder: Booster Dose</Link></li>
              <li><Link to=''className="dropdown-item" >Profile Updated</Link></li>
            </ul>
          </div>

          {/* Fullscreen */}
          <button className="btn btn-light" data-lte-toggle="fullscreen">
            <MdFullscreen size={20} />
          </button>

          {/* Profile dropdown */}
          <div className="dropdown">
            <button
              className="btn btn-light dropdown-toggle d-flex align-items-center gap-2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FaUserCircle size={22} />
              <span className="d-none d-md-inline">{localStorage.getItem("firstName")}</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end shadow">
              <li><Link to='userprofile'className="dropdown-item" >My Profile</Link></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item text-danger" href="#">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

// import React from 'react'
// import hamburgermenu from "../../assets/images/hamburgermenu.png";

// export const UserNavbar = ({ toggleSidebar }) => {
//   return (
//     <nav className="app-header navbar navbar-expand bg-body d-flex justify-content-between px-3">
      
//       <div className="container-fluid">
        
//         <ul className="navbar-nav">
//         <li className="nav-item">
//             <a
//               className="nav-link btn btn-light"
//               href="#"
//               role="button"
//               style={{
//                 color: "black",
//                 padding: "5px 10px",
//                 border: "1px solid #ccc",
//                 borderRadius: "5px",
//               }}
//               onClick={toggleSidebar}
//             >
//               <img src={hamburgermenu} style={{height:"25px",width:"25px"}}></img>
//             </a>
//           </li>
//           <li className="nav-item d-none d-md-block">
//             <a href="#" className="nav-link">
//               Home
//             </a>
//           </li>
//           <li className="nav-item d-none d-md-block">
//             <a href="#" className="nav-link">
//               Contact
//             </a>
//           </li>
//         </ul>
       
//         <ul className="navbar-nav ms-auto">
         
//           <li className="nav-item">
//             <a
//               className="nav-link"
//               data-widget="navbar-search"
//               href="#"
//               role="button"
//             >
//               <i className="bi bi-search" />
//             </a>
//           </li>
          
//           <li className="nav-item dropdown">
//             <a className="nav-link" data-bs-toggle="dropdown" href="#">
//               {/* <i className="bi bi-chat-text" />
//               <span className="navbar-badge badge text-bg-danger">3</span> */}
//             </a>
//             <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
//               <a href="#" className="dropdown-item">
               
//                 <div className="d-flex">
//                   <div className="flex-shrink-0">
//                     <img
//                       src="../../dist/assets/img/user1-128x128.jpg"
//                       alt="User Avatar"
//                       className="img-size-50 rounded-circle me-3"
//                     />
//                   </div>
//                   <div className="flex-grow-1">
//                     <h3 className="dropdown-item-title">
//                       Brad Diesel
//                       <span className="float-end fs-7 text-danger">
//                         <i className="bi bi-star-fill" />
//                       </span>
//                     </h3>
//                     <p className="fs-7">Call me whenever you can...</p>
//                     <p className="fs-7 text-secondary">
//                       <i className="bi bi-clock-fill me-1" /> 4 Hours Ago
//                     </p>
//                   </div>
//                 </div>
              
//               </a>
//               <div className="dropdown-divider" />
//               <a href="#" className="dropdown-item">
            
//                 <div className="d-flex">
//                   <div className="flex-shrink-0">
//                     <img
//                       src="../../dist/assets/img/user8-128x128.jpg"
//                       alt="User Avatar"
//                       className="img-size-50 rounded-circle me-3"
//                     />
//                   </div>
//                   <div className="flex-grow-1">
//                     <h3 className="dropdown-item-title">
//                       John Pierce
//                       <span className="float-end fs-7 text-secondary">
//                         <i className="bi bi-star-fill" />
//                       </span>
//                     </h3>
//                     <p className="fs-7">I got your message bro</p>
//                     <p className="fs-7 text-secondary">
//                       <i className="bi bi-clock-fill me-1" /> 4 Hours Ago
//                     </p>
//                   </div>
//                 </div>
              
//               </a>
//               <div className="dropdown-divider" />
//               <a href="#" className="dropdown-item">
              
//                 <div className="d-flex">
//                   <div className="flex-shrink-0">
//                     <img
//                       src="../../dist/assets/img/user3-128x128.jpg"
//                       alt="User Avatar"
//                       className="img-size-50 rounded-circle me-3"
//                     />
//                   </div>
//                   <div className="flex-grow-1">
//                     <h3 className="dropdown-item-title">
//                       Nora Silvester
//                       <span className="float-end fs-7 text-warning">
//                         <i className="bi bi-star-fill" />
//                       </span>
//                     </h3>
//                     <p className="fs-7">The subject goes here</p>
//                     <p className="fs-7 text-secondary">
//                       <i className="bi bi-clock-fill me-1" /> 4 Hours Ago
//                     </p>
//                   </div>
//                 </div>
                
//               </a>
//               <div className="dropdown-divider" />
//               <a href="#" className="dropdown-item dropdown-footer">
//                 See All Messages
//               </a>
//             </div>
//           </li>
         
//           <li className="nav-item dropdown">
//             <a className="nav-link" data-bs-toggle="dropdown" href="#">
//               {/* <i className="bi bi-bell-fill" />
//               <span className="navbar-badge badge text-bg-warning">15</span> */}
//             </a>
//             <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
//               {/* <span className="dropdown-item dropdown-header">
//                 15 Notifications
//               </span> */}
//               <div className="dropdown-divider" />
//               <a href="#" className="dropdown-item">
//                 <i className="bi bi-envelope me-2" /> 4 new messages
//                 <span className="float-end text-secondary fs-7">3 mins</span>
//               </a>
//               <div className="dropdown-divider" />
//               <a href="#" className="dropdown-item">
//                 <i className="bi bi-people-fill me-2" /> 8 friend requests
//                 <span className="float-end text-secondary fs-7">12 hours</span>
//               </a>
//               <div className="dropdown-divider" />
//               <a href="#" className="dropdown-item">
//                 <i className="bi bi-file-earmark-fill me-2" /> 3 new reports
//                 <span className="float-end text-secondary fs-7">2 days</span>
//               </a>
//               <div className="dropdown-divider" />
//               <a href="#" className="dropdown-item dropdown-footer">
//                 {" "}
//                 See All Notifications{" "}
//               </a>
//             </div>
//           </li>
         
//           <li className="nav-item">
//             <a className="nav-link" href="#" data-lte-toggle="fullscreen">
//               <i data-lte-icon="maximize" className="bi bi-arrows-fullscreen" />
//               <i
//                 data-lte-icon="minimize"
//                 className="bi bi-fullscreen-exit"
//                 style={{ display: "none" }}
//               />
//             </a>
//           </li>
       
//           <li className="nav-item dropdown user-menu">
//             <a
//               href="#"
//               className="nav-link dropdown-toggle"
//               data-bs-toggle="dropdown"
//             >
//               {/* <img
//                 src="../../dist/assets/img/user2-160x160.jpg"
//                 className="user-image rounded-circle shadow"
//                 alt="User Image"
//               />
//               <span className="d-none d-md-inline">Alexander Pierce</span> */}
//             </a>
//             <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
             
//               <li className="user-header text-bg-primary">
//                 <img
//                   src="../../dist/assets/img/user2-160x160.jpg"
//                   className="rounded-circle shadow"
//                   alt="User Image"
//                 />
//                 <p>
//                   Alexander Pierce - Web Developer
//                   <small>Member since Nov. 2023</small>
//                 </p>
//               </li>
             
//               <li className="user-body">
              
//                 <div className="row">
//                   <div className="col-4 text-center">
//                     <a href="#">Followers</a>
//                   </div>
//                   <div className="col-4 text-center">
//                     <a href="#">Sales</a>
//                   </div>
//                   <div className="col-4 text-center">
//                     <a href="#">Friends</a>
//                   </div>
//                 </div>
               
//               </li>
              
//               <li className="user-footer">
//                 <a href="#" className="btn btn-default btn-flat">
//                   Profile
//                 </a>
//                 <a href="#" className="btn btn-default btn-flat float-end">
//                   Sign out
//                 </a>
//               </li>
              
//             </ul>
//           </li>
          
//         </ul>
        
//       </div>
     
//     </nav>
//   )
// }
