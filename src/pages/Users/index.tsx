import React, { useState } from 'react';
import './index.less';

/**
 * 用户列表组件
 * 
 * 展示从API获取的用户数据
 */
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: '张三', email: 'zhang@example.com', role: '前端开发' },
    { id: 2, name: '李四', email: 'li@example.com', role: '后端开发' },
    { id: 3, name: '王五', email: 'wang@example.com', role: '全栈开发' },
    { id: 4, name: '赵六', email: 'zhao@example.com', role: 'UI设计师' },
  ]);

  return (
    <div className="users-page">
      <h2>用户管理</h2>
      <p>这是一个简单的用户管理界面示例，展示了如何在React应用中管理用户数据。</p>
      
      <div className="users-table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>姓名</th>
              <th>邮箱</th>
              <th>角色</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button className="btn edit">编辑</button>
                  <button className="btn delete">删除</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="user-actions">
        <button className="btn add">添加用户</button>
        <button className="btn refresh">刷新列表</button>
      </div>
      
      <div className="api-info">
        <h3>API 接口说明</h3>
        <p>在实际应用中，这些数据会从后端API获取。以下是典型的用户管理API端点：</p>
        <ul>
          <li><code>GET /api/users</code> - 获取所有用户</li>
          <li><code>GET /api/users/:id</code> - 获取单个用户</li>
          <li><code>POST /api/users</code> - 创建新用户</li>
          <li><code>PUT /api/users/:id</code> - 更新用户</li>
          <li><code>DELETE /api/users/:id</code> - 删除用户</li>
        </ul>
      </div>
    </div>
  );
};

export default Users;