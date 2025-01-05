# Reusable Calendar Component with React-Aria

This project implements a reusable calendar component using React-Aria. It fetches company-related data (such as color) from a backend service and dynamically applies styles based on the `companyId` provided.

## Overview

The calendar component:

* Displays the current month and date by default.
* Dynamically applies a custom color on the selected calendar cell based on the company ID.
* Is built using React-Aria for accessible calendar functionality.
* Can be embedded into other websites with minimal setup.

The backend service provides company data (including an `id`, a `name` and a `color`) that can be fetched by the frontend component.

## Features

* **Reusable** : The calendar is a standalone component that can be easily embedded in any website.
* **Dynamic Styling** : The calendar adjusts its style based on the `companyId` parameter.
* **Isolated Styling** : The calendar uses styled-components to avoid conflicts with host website styles.

## Backend

The backend is a lightweight API built with Node.js and Express. It provides a single endpoint:

### Endpoint:

```
GET /companies/:id
```

### Example Link and Response:

For company with `id==1(or 2, 3)`: https://calendar-backend-enting.vercel.app/companies/1 (or 2, 3)

```json
{
  "id": 1,
  "name": "Company A",
  "color": "#FF5733"
}
```

### Mock Data:

The backend uses mock data stored in-memory to simulate database interactions:

```javascript
const companies = [
  { id: 1, name: "Company A", color: "#FF5733" },
  { id: 2, name: "Company B", color: "#33FF57" },
  { id: 3, name: "Company C", color: "#3357FF" },
];
```

### Error Handling:

* Returns a 404 status if the `companyId` does not exist.

## Frontend

The frontend is built with React and React-Aria. It is a standalone calendar component that fetches data from the backend and dynamically applies the color associated with the company ID.

## Installation

### Prerequisites

* Node.js and npm installed.
* A platform like Render to deploy the frontend and backend.

### Steps to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Enting-Chen/react-aria-calendar.git
   ```
2. Start the backend:
   ```bash
   cd react-aria-calendr/backend
   npm install
   npm start
   ```
3. Change the link `https://calendar-backend-enting.vercel.app/companies/${companyId}` in `src/CalandarComponent.js` to `http://localhost:3001/companies/${companyId}`
4. Start the frontend:
   ```bash
   cd react-aria-calendar
   npm start
   ```
5. The calendar for company with `id==1(or 2, 3)` should now be available at `http://localhost:3000/1` (or 2, 3) .

## Deployment

You can deploy the backend and frontend to a platform like Vercel.

* Create a new service and connect to your GitHub repository.
* Follow the platform's instructions to deploy the backend and frontend. Make sure the link in `src/CalandarComponent.js` can access the backend.

### Live Demo

* [Frontend Live Demo](https://calendar-frontend-enting.vercel.app/1)
* For company with `id==1(or 2, 3)`: https://calendar-frontend-enting.vercel.app/1 (or 2, 3)

## Embedding the Calendar

The calendar can be embedded into other websites as a script.

1. Make sure the company data is in `backend/index.js`.
2. Deploy updated backend to plaform.
3. Make sure the link in `src/CalandarComponent.js` can access the backend, and `companyId` is set to the corresponding company in `src/CalendarEmbed.js`.
4. Pack the calendar into `dist/calendar.js`. Configurations are in `webpack.config.js` and `.babelrc`:

   ```bash
   cd react-aria-calendar
   npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/preset-react css-loader style-loader
   npx webpack
   ```
5. Host the output javascript `dist/calendar.js`. Here I use https://www.jsdelivr.com/. So the link to the script is https://cdn.jsdelivr.net/gh/Enting-Chen/react-aria-calendar@00f1bde/dist/calendar.js.
6. Add the following to your html, replacing the link as needed. An example html is `./index.html`.

```html
<script crossorigin src="https://cdn.jsdelivr.net/gh/Enting-Chen/react-aria-calendar@00f1bde/dist/calendar.js"></script>
```

7. The calendar will automatically fetch data for the specified `companyId` and apply the corresponding styles.

An example webpage project is at https://github.com/Enting-Chen/calandar-website. The webpage is at https://calandar-website.vercel.app/.

## Contributing

Feel free to fork the project and submit issues or pull requests if you would like to contribute. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.
