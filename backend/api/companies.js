// 引入 CORS
import Cors from "cors";

// 初始化 CORS 配置
const cors = Cors({
  methods: ["GET"], // 允许的 HTTP 方法
  origin: "*", // 允许的来源，"*" 表示接受所有来源
});

// 用于处理中间件的函数
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

// Mock 数据
const companies = [
  { id: 1, name: "Company A", color: "#FF5733" },
  { id: 2, name: "Company B", color: "#33FF57" },
  { id: 3, name: "Company C", color: "#3357FF" },
];

export default async function handler(req, res) {
  // 运行 CORS 中间件
  await runMiddleware(req, res, cors);

  const { id } = req.query; // 从 URL 中获取公司 ID
  const company = companies.find((c) => c.id === parseInt(id));

  if (company) {
    res.status(200).json(company);
  } else {
    res.status(404).json({ error: "Company not found" });
  }
}
