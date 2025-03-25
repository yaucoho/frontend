import React from 'react';
import './index.less';

/**
 * React设计模式演示页面
 * 
 * 展示2025年React应用中常用的设计模式和最佳实践
 */
const ReactPatternDemo: React.FC = () => {
  return (
    <div className="pattern-page">
      <h2>React设计模式</h2>
      
      <div className="pattern-card">
        <h3 className="card-title">2025年的React设计模式概述</h3>
        <p>
          随着React的发展，一系列设计模式已经成为构建可维护、高性能React应用的基础。
          这些模式重点关注组件组合、状态管理、性能优化和代码组织，帮助开发者构建
          更加清晰、可维护的组件和应用。
        </p>
      </div>
      
      <div className="pattern-card">
        <h3 className="card-title">组合模式 (Composition Pattern)</h3>
        <p>
          组合模式是React最重要的设计模式之一，它利用组件组合而不是继承来复用代码。
          通过props和children，实现灵活的组件设计。
        </p>
      </div>
      
      <div className="pattern-card">
        <h3 className="card-title">自定义Hook模式</h3>
        <p>
          自定义Hook是React函数组件中复用状态逻辑的主要方式。它将相关逻辑抽象到
          可复用的函数中，同时保持React的状态和生命周期特性。
        </p>
      </div>
      
      <div className="pattern-card">
        <h3 className="card-title">性能优化模式</h3>
        <p>
          React应用性能优化是2025年前端面试的重要话题。常见的优化技术包括：
        </p>
        <ul className="feature-list">
          <li>使用React.memo避免不必要的渲染</li>
          <li>使用useCallback缓存函数引用</li>
          <li>使用useMemo缓存计算结果</li>
          <li>虚拟化长列表</li>
          <li>代码分割与懒加载</li>
        </ul>
      </div>
      
      <div className="pattern-card">
        <h3 className="card-title">面试问题</h3>
        <div className="question-card">
          <div className="question">什么是受控组件和非受控组件，它们各有什么优缺点？</div>
          <div className="answer">
            <p><strong>受控组件：</strong>由React状态驱动的表单元素，其值由React组件的state控制。优点包括可以即时验证、格式化输入、条件禁用按钮；缺点是需要为每个表单元素编写处理代码，可能导致冗余，每次输入都会触发渲染。</p>
            <p><strong>非受控组件：</strong>保持自己的内部状态，数据存储在DOM中。优点是代码量少、适合简单表单和第三方库集成、减少渲染次数；缺点是难以实现动态表单验证、对表单状态的控制较少。</p>
          </div>
        </div>
        
        <div className="question-card">
          <div className="question">解释React中的组合模式，以及它相比继承有什么优势？</div>
          <div className="answer">
            组合模式通过嵌套和组合组件而不是继承来创建复杂UI。主要通过props和children实现组件组合。组合相比继承的优势包括：更高的灵活性、更好的封装、更容易测试、避免深层继承问题、更符合React的设计理念、更好的类型支持。
          </div>
        </div>
        
        <div className="question-card">
          <div className="question">React性能优化的关键技术有哪些，以及它们的适用场景？</div>
          <div className="answer">
            React性能优化的关键技术包括：避免不必要的渲染(React.memo, useMemo, useCallback)、虚拟列表渲染大数据集、代码分割与懒加载、状态管理优化、服务器端渲染。选择优化策略时应先识别实际性能瓶颈，使用React DevTools Profiler定位问题组件，并考虑开发者体验和代码可维护性。
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactPatternDemo; 