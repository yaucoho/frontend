import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.less';

/**
 * 应用入口文件
 * 
 * 负责将React应用挂载到DOM，并提供必要的全局配置
 */
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);