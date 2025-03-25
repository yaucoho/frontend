import React from 'react';
import './index.less';

/**
 * 微前端架构演示页面
 * 
 * 展示微前端架构的概念、优势和实现方式
 */
const MicroFrontendDemo: React.FC = () => {
  return (
    <div className="micro-page">
      <h2>微前端架构</h2>
      
      <div className="micro-card">
        <h3 className="card-title">什么是微前端?</h3>
        <p>
          微前端是一种前端架构风格，将前端应用分解为独立的、可自包含的小型应用，
          每个应用可以独立开发、测试和部署，最终组合成一个统一的产品。这种架构允许大型团队
          更有效地协作，并增强了大型前端应用的可维护性和可扩展性。
        </p>
      </div>
      
      <div className="micro-card">
        <h3 className="card-title">微前端的主要优势</h3>
        <ul className="feature-list">
          <li>技术栈灵活性 - 不同团队可以使用不同的技术栈</li>
          <li>独立部署 - 每个微前端可以独立发布</li>
          <li>团队自治 - 大型团队可以并行工作，互不干扰</li>
          <li>渐进式升级 - 老系统可以逐步现代化</li>
          <li>代码隔离 - 提高系统稳定性</li>
        </ul>
      </div>
      
      <div className="micro-card">
        <h3 className="card-title">实现微前端的常见方法</h3>
        <ol className="method-list">
          <li><strong>iframes</strong> - 最简单但功能有限的方法</li>
          <li><strong>Web Components</strong> - 使用浏览器原生组件封装</li>
          <li><strong>Module Federation</strong> - Webpack 5引入的动态模块共享功能</li>
          <li><strong>单一SPA</strong> - 使用single-spa框架来编排多个微前端</li>
          <li><strong>服务器端组合</strong> - 在服务器上组装各个微前端</li>
        </ol>
      </div>
      
      <div className="micro-card">
        <h3 className="card-title">Module Federation示例</h3>
        <div className="code-block">
          {`// Webpack 5 Module Federation配置示例
// 主应用(Host)的webpack.config.js
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  // ...其他配置...
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        // 从远程应用加载模块
        userProfile: 'userProfile@http://localhost:3001/remoteEntry.js',
        productCatalog: 'productCatalog@http://localhost:3002/remoteEntry.js'
      },
      shared: ['react', 'react-dom']
    })
  ]
};

// 远程应用(Remote)的webpack.config.js
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  // ...其他配置...
  plugins: [
    new ModuleFederationPlugin({
      name: 'userProfile',
      filename: 'remoteEntry.js',
      exposes: {
        // 暴露组件给主应用
        './UserProfile': './src/components/UserProfile',
        './UserSettings': './src/components/UserSettings'
      },
      shared: ['react', 'react-dom']
    })
  ]
};`}
        </div>
      </div>
      
      <div className="micro-card">
        <h3 className="card-title">微前端中使用远程组件</h3>
        <div className="code-block">
          {`// 在主应用中使用远程组件
import React, { lazy, Suspense } from 'react';

// 懒加载远程组件
const RemoteUserProfile = lazy(() => import('userProfile/UserProfile'));
const RemoteProductList = lazy(() => import('productCatalog/ProductList'));

function App() {
  return (
    <div>
      <h1>我的微前端应用</h1>
      
      <Suspense fallback={<div>加载用户资料...</div>}>
        <RemoteUserProfile userId="123" />
      </Suspense>
      
      <Suspense fallback={<div>加载产品列表...</div>}>
        <RemoteProductList category="electronics" />
      </Suspense>
    </div>
  );
}`}
        </div>
      </div>
      
      <div className="micro-card">
        <h3 className="card-title">面试问题</h3>
        <div className="question-card">
          <div className="question">微前端架构面临的主要挑战有哪些?</div>
          <div className="answer">
            主要挑战包括：(1)性能开销 - 多个应用可能增加加载时间和资源消耗；
            (2)样式隔离 - 确保各微前端的CSS不互相影响；
            (3)共享状态管理 - 在微前端间安全地共享数据；
            (4)路由管理 - 协调多个应用的路由系统；
            (5)版本控制 - 管理共享依赖的版本；
            (6)开发复杂性增加 - 需要更多的工程化实践和团队协作。
          </div>
        </div>
        
        <div className="question-card">
          <div className="question">微前端如何处理共享状态?</div>
          <div className="answer">
            处理共享状态的常见方法包括：(1)使用全局事件总线进行通信；
            (2)通过URL参数传递状态；
            (3)使用localStorage或sessionStorage；
            (4)使用自定义事件进行微前端间通信；
            (5)实现共享的状态管理存储（如Redux、MobX）；
            (6)使用Web组件的属性和事件机制。选择哪种方法取决于应用的具体需求和架构。
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroFrontendDemo; 