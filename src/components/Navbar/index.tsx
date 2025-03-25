import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.less';

/**
 * 导航栏组件
 * 
 * 提供应用的主要导航功能
 */
const Navbar: React.FC = () => {
  const location = useLocation();
  
  // 主导航链接
  const mainLinks = [
    { path: '/', label: '首页' },
    { path: '/users', label: '用户' },
  ];
  
  // 面试主题相关链接
  const interviewLinks = [
    { path: '/rsc', label: 'React Server Components' },
    { path: '/ai', label: 'AI 集成' },
    { path: '/typescript', label: 'TypeScript' },
    { path: '/performance', label: '性能优化' },
    { path: '/state', label: '状态管理' },
    { path: '/backend', label: '后端知识' },
  ];
  
  // 判断链接是否激活
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };
  
  return (
    <nav className="navbar">
      <div className="nav-group">
        <h3 className="nav-title">主导航</h3>
        <ul className="nav-links">
          {mainLinks.map((link) => (
            <li key={link.path} className={isActive(link.path) ? 'active' : ''}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="nav-group">
        <h3 className="nav-title">面试主题</h3>
        <ul className="nav-links interview-links">
          {interviewLinks.map((link) => (
            <li key={link.path} className={isActive(link.path) ? 'active' : ''}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 