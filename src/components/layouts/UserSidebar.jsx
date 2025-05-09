import React from 'react'
import { UserNavbar } from './UserNavbar'
import { Link,Outlet } from 'react-router-dom'
import { useState } from 'react'
import logo from '/Vaxtrack/frontend/public/assets/img/credit/logo.svg'

export const UserSidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    console.log("toggleSidebar");
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
    <UserNavbar toggleSidebar={toggleSidebar} />
      <aside
          className={`app-sidebar bg-body-secondary shadow ${
            isSidebarOpen ? "open" : "d-none"
          }`}
          data-bs-theme="dark"
        >
        <div className="sidebar-brand">
          <a href="./index.html" className="brand-link">
            <img
              src="/public/assets/img/credit/logo.svg"
              // alt="AdminLTE Logo"
              className="brand-image shadow"
              style={{
                height: '70px',      // Increase size
                width: '140px',       // Maintain aspect ratio
                filter: 'brightness(4)', // Make it appear lighter
              }}
            />

            <span className="brand-text fw-light"></span>
          </a>
        </div>

        <div
          className=""
          data-overlayscrollbars-viewport="scrollbarHidden overflowXHidden overflowYScroll"
          tabIndex={-1}
          style={{
            marginRight: "-16px",
            marginBottom: "-16px",
            marginLeft: 0,
            top: "-8px",
            right: "auto",
            left: "-8px",
            width: "calc(100% + 16px)",
            padding: 8,
          }}
        >
          <nav className="mt-2">
            
            <ul
              className="nav sidebar-menu flex-column"
              data-lte-toggle="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                    <Link to="dashboard2" className="nav-link active">
                      <i className="nav-icon bi bi-circle" />
                      <h6>My profile</h6>
                    </Link>
                  </li>
              <li className="nav-item menu-open">
                <Link to ="appointment" className="nav-link active">
                  <i className="nav-icon bi bi-speedometer" />
                  <h6>
                    Book Appointment
                    <i className="nav-arrow bi bi-chevron-right" />
                  </h6>
                </Link>
                {/* <ul className="nav nav-treeview"> */}
                  {/* <li className="nav-item">
                    <Link to="healthcareprovider" className="nav-link active">
                      <i className="nav-icon bi bi-circle" />
                      <h6>HealthCare Provider</h6>
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link to="vaccinationcenter" className="nav-link active">
                      <i className="nav-icon bi bi-circle" />
                      <h6>Vaccination Center</h6>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="vaccinereminders" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <h6>Vaccines Reminders</h6>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/user/certificate" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <h6>Download Certificate</h6>
                    </Link>
                  </li>
                {/* </ul> */}
              </li>
              
              {/* <li className="nav-item">
                <a href="./generate/theme.html" className="nav-link">
                  <i className="nav-icon bi bi-palette" />
                  <p></p>
                </a>
              </li> */}
              {/* <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon bi bi-box-seam-fill" />
                  <p>
                    
                    <i className="nav-arrow bi bi-chevron-right" />
                  </p>
                </a> */}
                {/* <ul className="nav nav-treeview"> */}
                  {/* <li className="nav-item">
                    <a href="./widgets/small-box.html" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p>Small Box</p>
                    </a>  
                  </li> */}
                  {/* <li className="nav-item">
                    <a href="./widgets/info-box.html" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p>info Box</p>
                    </a>
                  </li> */}
                  {/* <li className="nav-item">
                    <a href="./widgets/cards.html" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p>Cards</p>
                    </a>
                  </li> */}
                {/* </ul> */}
              {/* </li> */}
            </ul>
            
          </nav>
        </div>
      </aside>
      <main class="app.main">
        <Outlet></Outlet>
      </main>
    </>
  )
}
