import React from 'react';
import './index.less';

/**
 * React Server Components演示页面
 * 
 * 展示React Server Components的概念、优势和用例
 */
const RSCDemo: React.FC = () => {
  return (
    <div className="rsc-page">
      <h2>React Server Components</h2>
      
      <div className="rsc-card">
        <h3 className="card-title">什么是React Server Components?</h3>
        <p>
          React Server Components (RSC) 是React的一个新特性，允许开发者创建只在服务器上渲染且不会发送到客户端的组件。
          这种方式可以减少客户端的JavaScript包大小，并允许服务器组件直接访问服务器资源。
        </p>
      </div>
      
      <div className="rsc-card">
        <h3 className="card-title">RSC的主要优势</h3>
        <ul className="feature-list">
          <li>减少客户端的JavaScript量</li>
          <li>服务器组件可以直接访问服务器资源（数据库、文件系统等）</li>
          <li>避免向客户端泄露敏感信息（API密钥、数据库凭证等）</li>
          <li>改善初始加载性能和交互时间</li>
          <li>更好的SEO和可访问性</li>
        </ul>
      </div>
      
      <div className="rsc-card">
        <h3 className="card-title">服务器组件 vs 客户端组件</h3>
        <div className="code-block">
          {`// 服务器组件示例 - 使用"use server"指令
'use server';
import { db } from '../lib/db';

export default async function UserProfile({ userId }) {
  // 直接从数据库获取数据
  const user = await db.user.findUnique({ where: { id: userId } });
  
  return <div>{user.name}</div>;
}

// 客户端组件示例 - 使用"use client"指令
'use client';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      点击次数: {count}
    </button>
  );
}`}
        </div>
      </div>
      
      <div className="rsc-card">
        <h3 className="card-title">面试中的常见问题</h3>
        <div className="question-card">
          <div className="question">React Server Components与传统SSR有什么区别?</div>
          <div className="answer">
            传统SSR会渲染整个页面并发送完整的HTML，客户端仍需加载React进行水合。
            RSC允许组件粒度的服务器渲染，客户端组件可以单独交互，而服务器组件完全在服务器上运行，不发送组件代码到客户端。
          </div>
        </div>
        
        <div className="question-card">
          <div className="question">RSC如何与数据获取结合?</div>
          <div className="answer">
            服务器组件可以直接使用async/await从数据库或API获取数据，无需使用useEffect或React Query等客户端数据获取方法。
            这简化了数据获取逻辑，并提高了性能，因为数据获取发生在更靠近数据源的服务器上。
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSCDemo; 