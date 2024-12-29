import React, { useEffect, useState } from "react";
import { Calendar } from "react-aria-components";
import "./CalendarStyles.css"; // 使用 CSS Modules 或全局样式以隔离样式

const CalendarContainer = ({ companyId }) => {
  const [color, setColor] = useState("#FFFFFF"); // 默认颜色（白色）
  const [error, setError] = useState(null);

  // 向后端请求公司颜色
  useEffect(() => {
    const fetchCompanyColor = async () => {
      try {
        const response = await fetch(
          `https://calendar-backend-enting.vercel.app/api/companies?id=${companyId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch company data");
        }
        const data = await response.json();
        setColor(data.color); // 动态设置颜色
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCompanyColor();
  }, [companyId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="calendar-container" style={{ borderColor: color }}>
      <h3 style={{ color: color }}>Company Calendar</h3>
      <Calendar>
        {/* 日历逻辑 */}
        <div className="calendar-grid">
          {/* 假设这里放置日历天数 */}
          {[...Array(30)].map((_, index) => (
            <div key={index} className="calendar-day">
              {index + 1}
            </div>
          ))}
        </div>
      </Calendar>
    </div>
  );
};

export default CalendarContainer;
