import React from 'react';
import { Link } from 'react-router-dom';
import Step1 from "../../assets/landing/images/Step_1.svg";
import Step2 from "../../assets/landing/images/Step_2.svg";
import Step3 from "../../assets/landing/images/Step_3.png";

const dashboard2 = () => {
    const featureStyle = {
        display: "flex",
        gap: "20px",
        marginTop: "20px"
    };

    const cardStyle = {
        backgroundColor: "#f9f9f9",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        width: "30%",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
    };

    return (
        <div style={{ padding: "30px", fontFamily: "Arial, sans-serif", backgroundColor: "#eef2f7", minHeight: "100vh" }}>
            
            {/* Logo and Welcome Section */}
            <div style={{
                backgroundColor:"aqua",
                // backgroundColor: "#4CAF50",
                color: "#fff",
                padding: "50px 20px",
                textAlign: "center",
                borderRadius: "10px"
            }}>
                <h1>💉 VaxTrack</h1>
                <p style={{ fontSize: "18px", marginTop: "10px" }}>
                    "Your Ultimate Solution for Hassle-Free, Secure, and Efficient Vaccination Management."
                </p>
            </div>

            {/* About PG Finder Section */}
            <h2 style={{ marginTop: "30px", textAlign: "center" }}>✨ Why Choose VaxTack?</h2>
            <div style={featureStyle} className="flex justify-center gap-6 py-8">
    <div style={cardStyle} className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center">
        <h3 className="text-lg font-semibold bg-teal-500 text-white py-1 px-3 rounded-full inline-block">Step 1</h3>
        <img src={Step1} alt="Book Appointment" className="w-full h-40 object-cover rounded-lg mt-4" />
        <p className="text-gray-800 mt-4 font-medium">Book an Appointment on VaxTrack or Walk into any Vaccination Center</p>
        <Link to="/user/vaccinationcenter" className="text-teal-600 font-semibold mt-2 block">Vaccination centers on VaxTrack?</Link>
    </div>

    <div style={cardStyle} className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center">
        <h3 className="text-lg font-semibold bg-teal-500 text-white py-1 px-3 rounded-full inline-block">Step 2</h3>
        <img src={Step2} alt="Get Vaccinated" className="w-full h-40 object-cover rounded-lg mt-4" />
        <p className="text-gray-800 mt-4 font-medium">Get Your Vaccination Safely at the Time of Your Appointment</p>
        <Link to="/user/appointment" className="text-teal-600 font-semibold mt-2 block">Getting Vaccinated</Link>
    </div>

    <div style={cardStyle} className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center">
        <h3 className="text-lg font-semibold bg-teal-500 text-white py-1 px-3 rounded-full inline-block">Step 3</h3>
        <img src={Step3} alt="Download Certificate" className="w-full h-40 object-cover rounded-lg mt-4" />
        <p className="text-gray-800 mt-4 font-medium">Download Your Vaccination Certificate from VaxTrack and Wait for Dose #2</p>
        <Link to="/user/certificate" className="text-teal-600 font-semibold mt-2 block">Download Your Vaccine Certificate</Link>
    </div>
</div>

            {/* <div style={featureStyle}>
                <div style={cardStyle}>
                    <h3>Affordable Prices</h3>
                    <p>We help you find budget-friendly PGs without compromising on quality and comfort.</p>
                </div>

                <div style={cardStyle}>
                    <h3>Comfort & Convenience</h3>
                    <p>Enjoy amenities like Wi-Fi, laundry, and home-cooked meals for a stress-free stay.</p>
                </div>

                <div style={cardStyle}>
                    <h3>Prime Locations</h3>
                    <p>Our listings cover PGs near popular colleges, offices, and transport hubs.</p>
                </div>
            </div> */}

            {/* Facilities Section */}
            
            {/* <h2 style={{ marginTop: "40px", textAlign: "center" }}>🏠 Facilities We Offer</h2>
            <ul style={{
                display: "flex",
                gap: "20px",
                listStyle: "none",
                padding: "0",
                marginTop: "15px",
                textAlign: "center"
            }}>
                <li style={cardStyle}>📶 Free Wi-Fi</li>
                <li style={cardStyle}>🍱 Healthy Food</li>
                <li style={cardStyle}>🚿 Laundry Service</li>
                <li style={cardStyle}>🚗 Parking Area</li>
                <li style={cardStyle}>💪 Gym Facility</li>
                <li style={cardStyle}>🔒 24/7 Security</li>
                <li style={cardStyle}>🧹 Clean & Hygienic Environment</li>
                <li style={cardStyle}>📞 Emergency Support</li>
            </ul> */}
{/* CTA Section   */}
            <div style={{
                backgroundColor: "#4CAF50",
                color: "#fff",
                textAlign: "center",
                padding: "20px",
                marginTop: "30px",
                borderRadius: "10px"
            }}>
                <h2>Stay Ahead with Smarter Vaccine Tracking!</h2>
                <p>Join thousands of healthcare providers streamlining vaccine management with VaxTrack.</p>
                <Link to="/signup"
                style={{
                    backgroundColor: "#fff",
                    color: "#4CAF50",
                    border: "none",
                    borderRadius: "5px",
                    padding: "10px 20px",
                    cursor: "pointer",
                    textDecoration: "none"
                }}>
                    Get Started
                 </Link>
            </div>
        </div>
    );
};

export default dashboard2;


// import React from 'react';
// import { Step_1 } from '/';

// const Dashboard2 = () => {        
//     return (
//         <div className="flex flex-1 bg-gray-50">
//             <div className="hidden md:flex md:w-64 md:flex-col">
//                 <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white">
//                     <div className="flex items-center flex-shrink-0 px-4">
//                         <img 
//                             className="w-auto h-8" 
//                             src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/logo.svg" 
//                             alt="Logo" 
//                         />
//                     </div>

//                     <div className="px-4 mt-8">
//                         <label htmlFor="search" className="sr-only">Search</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
//                                 </svg>
//                             </div>
//                             <input 
//                                 type="search" 
//                                 id="search" 
//                                 className="block w-full py-2 pl-10 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm" 
//                                 placeholder="Search here" 
//                             />
//                         </div>
//                     </div>

//                     <div className="px-4 mt-6">
//                         <hr className="border-gray-200" />
//                     </div>

//                     <div className="flex flex-col flex-1 px-3 mt-6">
//                         <nav className="flex-1 space-y-2">
//                             <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 bg-indigo-600 rounded-lg group">
//                                 <svg className="flex-shrink-0 w-5 h-5 mr-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//                                 </svg>
//                                 Dashboard
//                             </a>
//                             <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group">
//     <svg className="flex-shrink-0 w-6 h-6 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//     </svg>
//     Tickets
// </a>

// <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group">
//     <svg className="flex-shrink-0 w-6 h-6 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//     </svg>
//     Agents
// </a>

// <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group">
//     <svg className="flex-shrink-0 w-6 h-6 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//     </svg>
//     Customers
//     <svg className="w-4 h-4 ml-auto text-gray-400 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//     </svg>
// </a>

//                         </nav>

//                         <hr className="border-gray-200" />

//                         <nav className="flex-1 space-y-2">
//                             <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group">
//                                 <svg className="flex-shrink-0 w-5 h-5 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
//                                 </svg>
//                                 Products
//                             </a>
//                         </nav>

//                         <hr className="border-gray-200" />

//                         <nav className="flex-1 space-y-2">
//                             <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group">
//                                 <svg className="flex-shrink-0 w-5 h-5 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
//                                 </svg>
//                                 Settings
//                             </a>
//                         </nav>
//                     </div>

//                     <div className="pb-4 mt-20">
//                         <button type="button" className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-gray-900 transition-all duration-200 rounded-lg hover:bg-gray-100">
//                             <img className="flex-shrink-0 object-cover w-6 h-6 mr-3 rounded-full" 
//                                 src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/vertical-menu/2/avatar-male.png" 
//                                 alt="User Avatar" 
//                             />
//                             Jacob Jones
//                             <svg className="w-5 h-5 ml-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard2;
