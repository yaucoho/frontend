import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import './App.less';

/**
 * 应用根组件
 * 
 * 负责渲染路由和顶层布局
 */
const App: React.FC = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
