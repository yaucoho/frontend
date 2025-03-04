import React, { useState } from 'react';
import './index.less';

// 用户接口
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const UserList: React.FC = () => {
  // 模拟用户数据
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: '张三', email: 'zhang@example.com', role: '管理员' },
    { id: 2, name: '李四', email: 'li@example.com', role: '编辑' },
    { id: 3, name: '王五', email: 'wang@example.com', role: '用户' },
  ]);

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // 处理用户选择
  const handleSelectUser = (user: User) => {
    setSelectedUser(user);
  };

  // 处理用户删除
  const handleDeleteUser = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
    if (selectedUser && selectedUser.id === id) {
      setSelectedUser(null);
    }
  };

  return (
    <div className="user-list">
      <h2>用户列表</h2>
      
      <table>
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
            <tr key={user.id} onClick={() => handleSelectUser(user)}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button className="delete-button" 
                    onClick={(e) => {
                        e.stopPropagation(); // 阻止事件冒泡
                        handleDeleteUser(user.id);}
                    }
                >删除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <div className="user-details">
          <h3>用户详情</h3>
          <p>姓名: {selectedUser.name}</p>
          <p>邮箱: {selectedUser.email}</p>
          <p>角色: {selectedUser.role}</p>
        </div>
      )}
    </div>
  );
};

export default UserList;