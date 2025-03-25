import React from 'react';
import './index.less';

const RSC: React.FC = () => {
  return (
    <div className="interview-page rsc-page">
      <h2>React Server Components (RSC)</h2>
      
      <section className="intro-section">
        <p>
          React Server Components 是 React 团队推出的一项革命性技术，允许开发者创建直接在服务器上运行的 React 组件，
          同时保持与客户端组件的无缝交互。
        </p>
      </section>
      
      <section className="key-concepts">
        <h3>关键概念</h3>
        <ul>
          <li>
            <strong>零客户端 JavaScript</strong> - 服务器组件不增加客户端包的大小
          </li>
          <li>
            <strong>直接访问后端资源</strong> - 可以直接访问数据库、文件系统等
          </li>
          <li>
            <strong>自动代码分割</strong> - 更细粒度的代码分割
          </li>
          <li>
            <strong>无瀑布请求</strong> - 减少网络请求序列
          </li>
        </ul>
      </section>
      
      <section className="code-examples">
        <h3>代码示例</h3>
        <div className="code-block">
          <h4>服务器组件示例</h4>
          <pre>
{`// 这是一个服务器组件
// 注意文件名通常为 page.tsx 或 layout.tsx

import db from '@/lib/db';

// 这个函数在服务器上运行，永远不会在客户端执行
async function UserProfile({ userId }) {
  // 直接从数据库获取数据，无需 API 调用
  const user = await db.user.findUnique({
    where: { id: userId },
  });
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}`}
          </pre>
        </div>
      </section>
      
      <section className="interview-questions">
        <h3>常见面试问题</h3>
        <div className="question">
          <h4>1. React Server Components 与传统服务器端渲染 (SSR) 有什么区别？</h4>
          <div className="answer">
            <p>
              虽然两者都在服务器上渲染内容，但有关键区别：
            </p>
            <ul>
              <li>SSR 生成 HTML 字符串发送给客户端，RSC 生成特殊格式供 React 消费</li>
              <li>SSR 渲染完成后，客户端需要"水合"(Hydration)整个应用，RSC 可以保持部分组件只在服务器运行</li>
              <li>RSC 允许服务器和客户端组件组合使用，而 SSR 是整个应用级别的</li>
            </ul>
          </div>
        </div>
        
        <div className="question">
          <h4>2. 如何决定一个组件应该是服务器组件还是客户端组件？</h4>
          <div className="answer">
            <p>服务器组件适用于：</p>
            <ul>
              <li>需要直接访问后端资源的组件</li>
              <li>包含敏感信息或大型依赖的组件</li>
              <li>不需要交互性的UI元素</li>
            </ul>
            <p>客户端组件适用于：</p>
            <ul>
              <li>需要使用浏览器API的组件</li>
              <li>需要添加事件监听器的交互式组件</li>
              <li>使用React hooks (useState, useEffect等)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RSC; 