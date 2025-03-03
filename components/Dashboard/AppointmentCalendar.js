
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { getAppointments } from '../../lib/appointments';
import 'react-calendar/dist/Calendar.css';

export default function AppointmentCalendar({ siteData }) {
  const [date, setDate] = useState(new Date());
  
  // Get appointments for this site
  const siteId = siteData?.site || '1';
  const allAppointments = getAppointments(siteId);
  
  // Function to check if a date has appointments
  const hasAppointment = (date) => {
    return allAppointments.some(apt => {
      const aptDate = new Date(apt.date);
      return aptDate.getDate() === date.getDate() &&
             aptDate.getMonth() === date.getMonth() &&
             aptDate.getFullYear() === date.getFullYear();
    });
  };
  
  // Get appointments for selected date
  const selectedDateAppointments = allAppointments.filter(apt => {
    const aptDate = new Date(apt.date);
    return aptDate.getDate() === date.getDate() &&
           aptDate.getMonth() === date.getMonth() &&
           aptDate.getFullYear() === date.getFullYear();
  });
  
  return (
    <div className="appointment-calendar bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Calendar
            onChange={setDate}
            value={date}
            tileClassName={({ date, view }) => 
              view === 'month' && hasAppointment(date) ? 'has-appointment' : null
            }
            className="border-0 rounded-lg shadow-sm"
          />
          <style jsx global>{`
            .has-appointment {
              background-color: #e6f7ff;
              color: #1890ff;
              font-weight: bold;
            }
            .react-calendar {
              width: 100%;
              border: none;
              font-family: inherit;
            }
            .react-calendar__tile--active {
              background: #4f46e5;
              color: white;
            }
            .react-calendar__tile--active:enabled:hover,
            .react-calendar__tile--active:enabled:focus {
              background: #4338ca;
            }
          `}</style>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">
            {date.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </h3>
          
          {selectedDateAppointments.length === 0 ? (
            <p className="text-gray-500">No appointments scheduled for this date.</p>
          ) : (
            <div className="space-y-4">
              {selectedDateAppointments.map(apt => (
                <div key={apt.id} className="border p-4 rounded-md">
                  <div className="flex justify-between">
                    <span className="font-medium">{apt.time}</span>
                    <span className={`px-2 py-1 text-xs leading-5 font-semibold rounded-full ${
                      apt.status === 'confirmed' 
                        ? 'bg-green-100 text-green-800' 
                        : apt.status === 'cancelled'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {apt.status}
                    </span>
                  </div>
                  <p className="mt-2">{apt.service}</p>
                  <p className="text-sm text-gray-500 mt-1">{apt.notes}</p>
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-6">
            <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90">
              Schedule New Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
