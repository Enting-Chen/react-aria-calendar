// Mock 数据
const companies = [
    { id: 1, name: "Company A", color: "#FF5733" },
    { id: 2, name: "Company B", color: "#33FF57" },
    { id: 3, name: "Company C", color: "#3357FF" },
  ];
  
  export default function handler(req, res) {
    const { id } = req.query; // 从 URL 中获取公司 ID
    const company = companies.find((c) => c.id === parseInt(id));
  
    if (company) {
      res.status(200).json(company);
    } else {
      res.status(404).json({ error: "Company not found" });
    }
  }
  