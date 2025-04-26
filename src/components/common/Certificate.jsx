import React from 'react'

const Certificate = () => {
  return (
    <div className="container py-5 d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="text-center shadow-lg p-5 rounded-4" style={{ backgroundColor: "#f8f9fa" }}>
        <h2 className="mb-4" style={{ color: "#2c3e50" }}>🎉 Your Vaccine Appointment is Confirmed!</h2>
        <p className="fs-5" style={{ color: "#34495e" }}>
          Thank you for booking your vaccination appointment. <br />
          Your vaccine certificate will be generated within 24 hours after you receive your dose. <br />
          Please ensure you attend your scheduled appointment.
        </p>
      </div>
    </div>
  )
}

export default Certificate
