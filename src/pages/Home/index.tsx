import React from 'react';
import './index.less';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <h2>欢迎来到前端面试准备平台</h2>
      <p>这个平台集中了2025年前端开发者面试需要准备的关键技术和知识点。</p>
      
      <section className="features">
        <div className="feature-card">
          <h3>实战演练</h3>
          <p>通过真实项目示例掌握关键概念</p>
        </div>
        <div className="feature-card">
          <h3>最新技术</h3>
          <p>涵盖React 18+、TypeScript、Node.js等热门技术</p>
        </div>
        <div className="feature-card">
          <h3>面试技巧</h3>
          <p>学习如何在技术面试中展示你的能力</p>
        </div>
      </section>
      
      <section className="get-started">
        <h3>如何开始？</h3>
        <p>浏览左侧的导航栏，选择你感兴趣的主题开始学习。每个主题都包含概念讲解、代码示例和常见面试问题。</p>
      </section>
    </div>
  );
};

export default Home;