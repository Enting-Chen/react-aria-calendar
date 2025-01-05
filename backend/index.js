const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());

// Mock data
const companies = [
  { id: 1, name: "Company A", color: "#FF5733" },
  { id: 2, name: "Company B", color: "#33FF57" },
  { id: 3, name: "Company C", color: "#3357FF" },
];

// Define route
app.get('/companies/:id', (req, res) => {
  const companyId = parseInt(req.params.id);
  const company = companies.find(c => c.id === companyId);

  if (company) {
    res.status(200).json(company);
  } else {
    res.status(404).json({ error: "Company not found" });
  }
});

// Start server
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
