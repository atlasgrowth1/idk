
import React, { useState } from 'react';
import { getAppointments } from '../../lib/appointments';

export default function AppointmentsList({ siteData }) {
  const [filter, setFilter] = useState('all'); // all, upcoming, past
  
  // Get appointments for this site
  const siteId = siteData?.site || '1';
  const allAppointments = getAppointments(siteId);
  
  // Today's date for comparison
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  // Filter appointments based on selected filter
  const filteredAppointments = allAppointments.filter(apt => {
    const aptDate = new Date(apt.date);
    aptDate.setHours(0, 0, 0, 0);
    
    if (filter === 'upcoming') {
      return aptDate >= today;
    } else if (filter === 'past') {
      return aptDate < today;
    }
    return true; // 'all' filter
  });
  
  // Sort appointments by date (most recent first for past, soonest first for upcoming)
  filteredAppointments.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    
    if (filter === 'past') {
      return dateB - dateA; // Most recent past appointments first
    }
    return dateA - dateB; // Soonest upcoming appointments first
  });
  
  return (
    <div className="appointments-list bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Appointments</h3>
        
        <div className="inline-flex rounded-md shadow-sm">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-sm font-medium rounded-l-md ${
              filter === 'all' 
                ? 'bg-primary text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            } border border-gray-300`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('upcoming')}
            className={`px-4 py-2 text-sm font-medium ${
              filter === 'upcoming' 
                ? 'bg-primary text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            } border-t border-b border-gray-300`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setFilter('past')}
            className={`px-4 py-2 text-sm font-medium rounded-r-md ${
              filter === 'past' 
                ? 'bg-primary text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            } border border-gray-300`}
          >
            Past
          </button>
        </div>
      </div>
      
      {filteredAppointments.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No appointments found.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Notes
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAppointments.map(apt => (
                <tr key={apt.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {new Date(apt.date).toLocaleDateString()}
                    </div>
                    <div className="text-sm text-gray-500">{apt.time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{apt.service}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      apt.status === 'confirmed' 
                        ? 'bg-green-100 text-green-800' 
                        : apt.status === 'cancelled'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {apt.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{apt.notes}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-primary hover:text-indigo-900 mr-2">
                      Edit
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
