
// Site data handling for the electrician website
// Sample electrician data
const electricianData = {
  "bestelectricianbirminghamal": {
    "name": "Best Electrician Birmingham AL",
    "site": "bestelectricianbirminghamal",
    "phone": "+1 205-555-7890",
    "email_1": "contact@bestelectricianbirmingham.com",
    "street": "123 Power Ave",
    "city": "Birmingham",
    "state": "Alabama",
    "postal_code": "35201",
    "rating": 4.8,
    "reviews": 85,
    "reviews_link": "https://google.com",
    "working_hours": {"Monday": "8AM-5PM", "Tuesday": "8AM-5PM", "Wednesday": "8AM-5PM", "Thursday": "8AM-5PM", "Friday": "8AM-5PM", "Saturday": "9AM-2PM", "Sunday": "Closed"},
    "logo": "https://lh3.googleusercontent.com/placeholder/electrician-logo1"
  },
  "reliableelectricarkansas": {
    "name": "Reliable Electric Arkansas",
    "site": "reliableelectricarkansas",
    "phone": "+1 501-555-1234",
    "email_1": "info@reliableelectric.com",
    "street": "456 Circuit Ln",
    "city": "Little Rock",
    "state": "Arkansas",
    "postal_code": "72201",
    "rating": 4.9,
    "reviews": 120,
    "reviews_link": "https://google.com",
    "working_hours": {"Monday": "7AM-6PM", "Tuesday": "7AM-6PM", "Wednesday": "7AM-6PM", "Thursday": "7AM-6PM", "Friday": "7AM-6PM", "Saturday": "8AM-3PM", "Sunday": "Closed"},
    "logo": "https://lh3.googleusercontent.com/placeholder/electrician-logo2"
  }
};

export function getSiteData(siteName) {
  if (!siteName) return null;

  // Convert to lowercase and remove any special characters for comparison
  const normalizedSiteName = siteName.toLowerCase().replace(/[^a-z0-9]/g, '');

  if (electricianData[normalizedSiteName]) {
    return electricianData[normalizedSiteName];
  }

  // Return default data if site not found
  return {
    "name": "Local Electrician",
    "site": normalizedSiteName,
    "phone": "+1 555-555-5555",
    "email_1": "contact@localelectrician.com",
    "street": "123 Main St",
    "city": "Your City",
    "state": "Your State",
    "postal_code": "12345",
    "rating": 5.0,
    "reviews": 50,
    "reviews_link": "https://google.com",
    "working_hours": {"Monday": "9AM-5PM", "Tuesday": "9AM-5PM", "Wednesday": "9AM-5PM", "Thursday": "9AM-5PM", "Friday": "9AM-5PM", "Saturday": "Closed", "Sunday": "Closed"},
    "logo": "https://lh3.googleusercontent.com/placeholder/default-logo"
  };
}

export function getAllSites() {
  return Object.values(electricianData);
}

// For backward compatibility (if used elsewhere in the code)
export function getSiteByShortName(site) {
  return getSiteData(site);
}
