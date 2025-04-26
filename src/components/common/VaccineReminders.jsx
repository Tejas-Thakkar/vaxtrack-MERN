import React from 'react';

const VaccineReminders = () => {
  // Dummy reminder data
  const reminders = [
    {
      id: 1,
      vaccineName: 'Covaxin',
      doseType: 'Booster Dose',
      dueDate: '2025-05-10',
      status: 'Pending'
    },
    {
      id: 2,
      vaccineName: 'Covishield',
      doseType: 'Second Dose',
      dueDate: '2025-04-28',
      status: 'Pending'
    },
    {
      id: 3,
      vaccineName: 'Flu Shot',
      doseType: 'Annual Dose',
      dueDate: '2025-06-15',
      status: 'Scheduled'
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>💉 Vaccine Dose Reminders</h2>
      {reminders.length === 0 ? (
        <p>No upcoming reminders.</p>
      ) : (
        reminders.map(reminder => (
          <div key={reminder.id} style={{ 
            border: '1px solid #ddd', 
            borderRadius: '10px', 
            padding: '15px', 
            marginBottom: '10px',
            backgroundColor: reminder.status === 'Pending' ? '#fff3cd' : '#d4edda'
          }}>
            <h3>{reminder.vaccineName}</h3>
            <p><strong>Dose Type:</strong> {reminder.doseType}</p>
            <p><strong>Due Date:</strong> {reminder.dueDate}</p>
            <p><strong>Status:</strong> {reminder.status}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default VaccineReminders;
