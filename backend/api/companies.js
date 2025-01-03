import Cors from "cors";

// initialise CORS settings
const cors = Cors({
  methods: ["GET"], // allowed HTTP methods
  origin: "*", // allowed origin，"*" means it accepts all origins
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
  // run CORS middleware
  await runMiddleware(req, res, cors);

  const { id } = req.query; // get company ID from URL
  const company = companies.find((c) => c.id === parseInt(id));

  if (company) {
    res.status(200).json(company);
  } else {
    res.status(404).json({ error: "Company not found" });
  }
}
