# Electrician Website Template

A dynamic website template for electricians that can be customized based on URL parameters. This project allows you to showcase multiple business websites from a single codebase.

## Features

- **Dynamic Content**: Updates website content based on URL parameters (`?site=businessname`)
- **Responsive Design**: Looks great on all devices
- **Client Dashboard**: Allows clients to log in and manage their account
- **Contact Management**: Add contacts and request reviews via SMS
- **Appointment Scheduling**: Calendar-based appointment booking system
- **Admin Dashboard**: Manage multiple business websites through a pipeline view
- **Business Site Creator**: Create new business websites with custom data

## Getting Started

### Prerequisites

- Node.js 14+ installed
- NPM or Yarn package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd website-template
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

### Viewing a Specific Business Site

Add the `site` parameter to the URL to view a specific business website:

```
http://localhost:3000/?site=bestelectricianbirminghamal
```

### Client Login

Login with the following credentials:
- Username: s
- Password: s

### Admin Dashboard

Access the admin dashboard at:

```
http://localhost:3000/admin
```

## Project Structure

- `/components`: React components for building the UI
- `/lib`: Utility functions and data handling
- `/pages`: Next.js pages and routes
- `/styles`: CSS styles
- `/public`: Static assets

## Data Structure

The business data is stored in JSON files in the `/electricians` directory. Each file represents a state (e.g., `alabama.json`, `arkansas.json`).

Each business object has the following structure:

```json
{
  "name": "Business Name",
  "site": "businessname",
  "phone": "+1 123-456-7890",
  "email_1": "example@example.com",
  "street": "123 Main St",
  "city": "City",
  "state": "State",
  "postal_code": "12345",
  "rating": 4.9,
  "reviews": 123,
  "reviews_link": "https://...",
  "working_hours": "{\"Monday\": \"9AM-5PM\", ...}",
  "logo": "https://..."
}
```

## Deployment

This project can be deployed on any platform that supports Next.js, such as Vercel.

To prepare for production:

```bash
npm run build
npm start
```

## Creating New Business Sites

In a production environment, the "Create New Business Site" feature would:

1. Create a new GitHub repository with the business name
2. Copy the website template with customized business information
3. Deploy to Vercel or similar platform
4. Provide a unique URL for the business

## License

[MIT License](LICENSE)