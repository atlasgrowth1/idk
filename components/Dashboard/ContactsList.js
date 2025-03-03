import React from 'react';

const ContactsList = ({ contacts, onEdit, onDelete }) => {
  if (!contacts || contacts.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <p className="text-gray-500">No contacts found. Add your first contact!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {contacts.map((contact) => (
            <tr key={contact.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="font-medium text-gray-900">{contact.name}</div>
                {contact.address && (
                  <div className="text-sm text-gray-500">{contact.address}</div>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {contact.phone}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {contact.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  onClick={() => onEdit(contact)}
                  className="text-indigo-600 hover:text-indigo-900 mr-4"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(contact.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactsList;