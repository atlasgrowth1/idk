import React, { useState } from 'react';

const ContactForm = ({ onSubmit, initialData = {} }) => {
  const [contact, setContact] = useState({
    name: initialData.name || '',
    phone: initialData.phone || '',
    email: initialData.email || '',
    address: initialData.address || '',
    notes: initialData.notes || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(contact);
    if (!initialData.id) {
      // Clear form if it's a new contact
      setContact({
        name: '',
        phone: '',
        email: '',
        address: '',
        notes: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">{initialData.id ? 'Edit Contact' : 'Add New Contact'}</h3>

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={contact.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={contact.phone}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium mb-1">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={contact.address}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="notes" className="block text-sm font-medium mb-1">Notes</label>
        <textarea
          id="notes"
          name="notes"
          value={contact.notes}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded h-24"
        ></textarea>
      </div>

      <button 
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
      >
        {initialData.id ? 'Update' : 'Add'} Contact
      </button>
    </form>
  );
};

export default ContactForm;