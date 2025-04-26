import React, { useEffect, useState } from "react";
import axios from "axios";

const VaccineCenter = () => {
  const [centers, setCenters] = useState([]);

  useEffect(() => {
    fetchVaccineCenters();
  }, []);

  const fetchVaccineCenters = async () => {
    try {
      const response = await axios.get("/vaccinecenter/all");
      if (response.status === 200) {
        setCenters(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching vaccine centers:", error);
    }
  };

  return (
    <div className="vaccine-center-container" style={{ padding: '2rem' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>Available Vaccine Centers</h2>
      {centers.length === 0 ? (
        <p>No vaccine centers found.</p>
      ) : (
        <div className="vaccine-center-list" style={{ display: 'grid', gap: '1rem' }}>
          {centers.map((center) => (
            <div key={center._id} className="vaccine-card" style={{ background: '#fff', padding: '1rem', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
              <h3 style={{ marginBottom: '0.5rem', color: '#1e3a8a' }}>{center.name}</h3>
              <p><strong>Address:</strong> {center.address}</p>
              <p><strong>Contact:</strong> {center.contactNumber}</p>
              {center.areaId && <p><strong>Area:</strong> {center.areaId.name}</p>}
              {center.cityId && <p><strong>City:</strong> {center.cityId.name}</p>}
              {center.stateId && <p><strong>State:</strong> {center.stateId.name}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VaccineCenter;
