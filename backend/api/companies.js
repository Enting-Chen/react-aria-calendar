import Cors from "cors";

// Initialise CORS settings
const cors = Cors({
  methods: ["GET"], // Allowed HTTP methods
  origin: "*", // Allowed origin, "*" means it accepts all origins
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

// Mock data
const companies = [
  { id: 1, name: "Company A", color: "#FF5733" },
  { id: 2, name: "Company B", color: "#33FF57" },
  { id: 3, name: "Company C", color: "#3357FF" },
];

export default async function handler(req, res) {
  // Run CORS middleware
  await runMiddleware(req, res, cors);

  // Extract company ID from the URL (e.g., /companies/1)
  const companyId = parseInt(req.url.split("/")[2]);

  // Find company by ID
  const company = companies.find((c) => c.id === companyId);

  if (company) {
    res.status(200).json(company);
  } else {
    res.status(404).json({ error: "Company not found" });
  }
}
