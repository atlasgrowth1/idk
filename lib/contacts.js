
// Contacts handling for the electrician website

// Sample contacts data
const contactsData = {
  "1": [
    {
      id: "contact1",
      name: "John Doe",
      phone: "+1 555-123-4567",
      email: "john@example.com",
      address: "123 Main St, City, State 12345",
      notes: "Repeat customer, prefers afternoon appointments"
    },
    {
      id: "contact2",
      name: "Jane Smith",
      phone: "+1 555-987-6543",
      email: "jane@example.com",
      address: "456 Oak Ave, City, State 12345",
      notes: "New home owner, referred by John Doe"
    }
  ]
};

// Sample review metrics
const reviewMetricsData = {
  "1": {
    sent: 25,
    received: 18,
    averageRating: 4.7,
    recentReviews: [
      { name: "John D.", rating: 5, text: "Great service, very professional!" },
      { name: "Mary S.", rating: 4, text: "Fixed our issue quickly, would use again." }
    ]
  }
};

export function getContacts(userId) {
  return contactsData[userId] || [];
}

export function addContact(userId, contact) {
  if (!contactsData[userId]) {
    contactsData[userId] = [];
  }
  
  const newContact = {
    ...contact,
    id: `contact${Date.now()}`
  };
  
  contactsData[userId].push(newContact);
  return newContact;
}

export function updateContact(userId, contactId, updates) {
  if (!contactsData[userId]) return false;
  
  const index = contactsData[userId].findIndex(contact => contact.id === contactId);
  if (index === -1) return false;
  
  contactsData[userId][index] = {
    ...contactsData[userId][index],
    ...updates
  };
  
  return contactsData[userId][index];
}

export function deleteContact(userId, contactId) {
  if (!contactsData[userId]) return false;
  
  const initialLength = contactsData[userId].length;
  contactsData[userId] = contactsData[userId].filter(contact => contact.id !== contactId);
  
  return contactsData[userId].length < initialLength;
}

export function getReviewMetrics(userId) {
  return reviewMetricsData[userId] || {
    sent: 0,
    received: 0,
    averageRating: 0,
    recentReviews: []
  };
}
