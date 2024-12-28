const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// 模拟数据
const companies = [
  { id: 1, name: "Company A", color: "#FF5733" },
  { id: 2, name: "Company B", color: "#33FF57" },
  { id: 3, name: "Company C", color: "#3357FF" },
];

// 定义 API
app.get("/companies/:id", (req, res) => {
  const company = companies.find((c) => c.id === parseInt(req.params.id));
  if (!company) {
    return res.status(404).json({ error: "Company not found" });
  }
  res.json(company);
});

// 监听端口
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
