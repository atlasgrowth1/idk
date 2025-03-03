
// Appointments handling for the electrician website

// Sample appointments data
const appointmentsData = {
  "1": [
    {
      id: "apt1",
      date: new Date(new Date().setDate(new Date().getDate() + 3)),
      time: "10:00 AM",
      service: "Electrical Inspection",
      status: "confirmed",
      notes: "Check all outlets and circuit breakers"
    },
    {
      id: "apt2",
      date: new Date(new Date().setDate(new Date().getDate() + 7)),
      time: "2:00 PM",
      service: "Light Fixture Installation",
      status: "pending",
      notes: "Customer has new fixtures ready"
    }
  ]
};

export function getAppointments(userId) {
  return appointmentsData[userId] || [];
}

export function addAppointment(userId, appointment) {
  if (!appointmentsData[userId]) {
    appointmentsData[userId] = [];
  }
  
  const newAppointment = {
    ...appointment,
    id: `apt${Date.now()}`,
    status: "pending"
  };
  
  appointmentsData[userId].push(newAppointment);
  return newAppointment;
}

export function updateAppointment(userId, appointmentId, updates) {
  if (!appointmentsData[userId]) return false;
  
  const index = appointmentsData[userId].findIndex(apt => apt.id === appointmentId);
  if (index === -1) return false;
  
  appointmentsData[userId][index] = {
    ...appointmentsData[userId][index],
    ...updates
  };
  
  return appointmentsData[userId][index];
}

export function deleteAppointment(userId, appointmentId) {
  if (!appointmentsData[userId]) return false;
  
  const initialLength = appointmentsData[userId].length;
  appointmentsData[userId] = appointmentsData[userId].filter(apt => apt.id !== appointmentId);
  
  return appointmentsData[userId].length < initialLength;
}
