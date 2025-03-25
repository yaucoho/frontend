import React from 'react';
import { createBrowserRouter, RouteObject, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/index';

// 导入页面组件
import Home from '../pages/Home';
import Users from '../pages/Users';
import TypeScript from '../pages/TypeScript';

// 面试准备专题页面
import RSC from '../pages/interview/RSC';
import AI from '../pages/interview/AI';
import Performance from '../pages/interview/Performance';
import Backend from '../pages/interview/Backend';
import StateManagement from '../pages/interview/StateManagement';

/**
 * 根布局组件
 */
const RootLayout = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>React/TypeScript/Node 2025面试准备</h1>
        <Navbar />
      </header>
      <main className="app-content">
        <Outlet />
      </main>
      <footer className="app-footer">
        <p>© 2024 前端面试准备 | 拥抱现代Web技术</p>
      </footer>
    </div>
  );
};

// 定义路由配置
const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'rsc',
        element: <RSC />,
      },
      {
        path: 'ai',
        element: <AI />,
      },
      {
        path: 'typescript',
        element: <TypeScript />,
      },
      {
        path: 'performance',
        element: <Performance />,
      },
      {
        path: 'state',
        element: <StateManagement />,
      },
      {
        path: 'backend',
        element: <Backend />,
      }
    ]
  }
];

// 创建路由器
export const router = createBrowserRouter(routes);

export default router; 