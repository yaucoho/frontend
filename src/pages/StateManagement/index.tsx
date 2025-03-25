import React from 'react';
import './index.less';

/**
 * 现代状态管理演示页面
 * 
 * 展示2025年React应用中流行的状态管理方案
 */
const StateManagement: React.FC = () => {
  return (
    <div className="state-page">
      <h2>React状态管理</h2>
      
      <div className="state-card">
        <h3 className="card-title">React状态管理概述</h3>
        <p>
          状态管理是React应用中的核心挑战之一。随着应用复杂度的增加，管理状态的方式也需要相应地演化。
          从组件内的简单useState到全局状态管理解决方案，选择正确的状态管理策略对构建可维护的React应用至关重要。
        </p>
      </div>
      
      <div className="state-card">
        <h3 className="card-title">状态管理方案对比</h3>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>解决方案</th>
              <th>适用场景</th>
              <th>优势</th>
              <th>劣势</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>useState/useReducer</td>
              <td>组件级状态、简单应用</td>
              <td>简单、React内置、零依赖</td>
              <td>状态共享需要提升、prop drilling问题</td>
            </tr>
            <tr>
              <td>Context API</td>
              <td>中小型应用、主题/用户状态</td>
              <td>React内置、避免prop drilling</td>
              <td>性能问题、调试困难</td>
            </tr>
            <tr>
              <td>Redux</td>
              <td>大型应用、复杂状态逻辑</td>
              <td>可预测、强大的调试工具、中间件</td>
              <td>模板代码多、学习曲线陡峭</td>
            </tr>
            <tr>
              <td>Zustand</td>
              <td>中小型应用、需要简化的Redux</td>
              <td>API简洁、体积小、性能好</td>
              <td>生态系统较小</td>
            </tr>
            <tr>
              <td>Jotai/Recoil</td>
              <td>原子化状态管理需求</td>
              <td>细粒度更新、优化性能</td>
              <td>概念理解门槛、实验性质</td>
            </tr>
            <tr>
              <td>MobX</td>
              <td>偏向OOP的应用</td>
              <td>响应式、自动追踪依赖</td>
              <td>与React理念差异大</td>
            </tr>
            <tr>
              <td>XState</td>
              <td>有限状态机需求</td>
              <td>可视化状态、处理复杂流程</td>
              <td>概念复杂度高</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="state-card">
        <h3 className="card-title">现代React状态管理趋势</h3>
        <ul className="feature-list">
          <li><strong>原子化状态</strong> - 将状态拆分为最小单元（如Jotai、Recoil）</li>
          <li><strong>不可变状态</strong> - 强调状态的不可变性（如Immer在Redux中的应用）</li>
          <li><strong>更简洁的API</strong> - 减少样板代码（如Redux Toolkit、Zustand）</li>
          <li><strong>状态与UI分离</strong> - 将状态逻辑与UI渲染逻辑解耦</li>
          <li><strong>服务器状态管理</strong> - 专门管理来自API的数据（如React Query、SWR）</li>
          <li><strong>响应式状态</strong> - 自动跟踪和更新依赖（如MobX、Solid.js）</li>
        </ul>
      </div>
      
      <div className="state-card">
        <h3 className="card-title">Zustand简单示例</h3>
        <div className="code-block">
          {`// 使用Zustand创建状态存储
import create from 'zustand';

// 定义存储
const useStore = create((set) => ({
  bears: 0,
  fish: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  decreasePopulation: () => set((state) => ({ bears: state.bears - 1 })),
  removeAllBears: () => set({ bears: 0 }),
  addFish: (count) => set((state) => ({ fish: state.fish + count })),
}));

// 在组件中使用
function BearCounter() {
  const bears = useStore((state) => state.bears);
  const increasePopulation = useStore((state) => state.increasePopulation);
  const decreasePopulation = useStore((state) => state.decreasePopulation);
  
  return (
    <div>
      <h2>熊的数量: {bears}</h2>
      <button onClick={increasePopulation}>增加</button>
      <button onClick={decreasePopulation}>减少</button>
    </div>
  );
}

function FishCounter() {
  const fish = useStore((state) => state.fish);
  const addFish = useStore((state) => state.addFish);
  
  return (
    <div>
      <h2>鱼的数量: {fish}</h2>
      <button onClick={() => addFish(5)}>添加5条鱼</button>
    </div>
  );
}`}
        </div>
      </div>
      
      <div className="state-card">
        <h3 className="card-title">面试问题</h3>
        <div className="question-card">
          <div className="question">什么时候应该使用全局状态管理而不是本地状态?</div>
          <div className="answer">
            应在以下情况考虑全局状态管理：(1)多个不相关组件需要同一状态；
            (2)状态需要在整个应用周期中保持；(3)状态逻辑复杂且涉及多个交互；
            (4)需要缓存或持久化状态；(5)需要在不相关的组件树之间共享状态。
            对于只在单个组件或小组件树中使用的简单状态，本地状态通常更合适。
          </div>
        </div>
        
        <div className="question-card">
          <div className="question">Redux的核心原则是什么，它们为什么重要?</div>
          <div className="answer">
            Redux的核心原则是：(1)单一数据源 - 整个应用状态存储在单一的状态树中；
            (2)状态是只读的 - 唯一改变状态的方式是触发action；
            (3)使用纯函数进行修改 - reducer必须是纯函数。
            这些原则确保状态变更可预测、可跟踪和可调试，简化了复杂应用的状态管理，
            并支持时间旅行调试、状态持久化和撤销/重做等高级功能。
          </div>
        </div>
        
        <div className="question-card">
          <div className="question">如何优化依赖Context API的组件重新渲染问题?</div>
          <div className="answer">
            优化Context重渲染的策略包括：(1)拆分Context - 将不同关注点的状态分到多个Context；
            (2)使用memo - 用React.memo包装消费Context的组件；
            (3)状态选择器 - 只订阅组件需要的特定状态；
            (4)使用useMemo - 缓存计算值和对象；
            (5)考虑其他库 - 如Zustand，它们内置了状态选择和渲染优化。
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateManagement; 