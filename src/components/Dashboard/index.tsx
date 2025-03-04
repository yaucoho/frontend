import React from 'react';

// 定义组件Props的接口
interface DashboardProps {
  title: string;
  description?: string; // 可选属性
}

// 使用React.FC<Props>定义函数组件
const Dashboard: React.FC<DashboardProps> = ({ title, description }) => {
  return (
    <div className="dashboard">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
};

export default Dashboard;