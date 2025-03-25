import React from 'react';
import './index.less';

const StateManagement: React.FC = () => {
  return (
    <div className="interview-page state-page">
      <h2>React 状态管理</h2>
      
      <section className="intro-section">
        <p>
          状态管理是React应用开发中的核心部分，随着应用规模的增长，选择合适的状态管理方案变得至关重要。
          本专题讨论React中各种状态管理方案的优缺点及适用场景。
        </p>
      </section>
      
      <section className="key-concepts">
        <h3>关键概念</h3>
        <ul>
          <li>
            <strong>本地状态</strong> - useState、useReducer等React内置方案
          </li>
          <li>
            <strong>全局状态</strong> - Context API与状态管理库
          </li>
          <li>
            <strong>状态管理库</strong> - Redux、Zustand、Jotai、Recoil等
          </li>
          <li>
            <strong>状态持久化</strong> - 保存和恢复应用状态
          </li>
          <li>
            <strong>服务器状态</strong> - TanStack Query、SWR等
          </li>
        </ul>
      </section>
      
      <section className="code-examples">
        <h3>代码示例</h3>
        <div className="code-block">
          <h4>使用Zustand创建全局状态</h4>
          <pre>
{`// 使用Zustand创建全局状态管理
import { create } from 'zustand';

// 定义状态类型
interface BearStore {
  bears: number;
  fish: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  eatFish: () => void;
}

// 创建store
const useBearStore = create<BearStore>((set) => ({
  bears: 0,
  fish: 100,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  eatFish: () => set((state) => ({ 
    fish: state.fish > 0 ? state.fish - 1 : 0,
    bears: state.fish > 0 ? state.bears : Math.max(0, state.bears - 1)
  })),
}));

// 在组件中使用
function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  return <h1>{bears} bears around here...</h1>;
}

function Controls() {
  const { increasePopulation, removeAllBears, eatFish } = useBearStore();
  
  return (
    <div>
      <button onClick={increasePopulation}>增加熊</button>
      <button onClick={removeAllBears}>移除所有熊</button>
      <button onClick={eatFish}>吃鱼</button>
    </div>
  );
}

// 在另一个组件中跟踪鱼的数量
function FishCounter() {
  const fish = useBearStore((state) => state.fish);
  return <h2>还剩 {fish} 条鱼</h2>;
}`}
          </pre>
        </div>
      </section>
      
      <section className="interview-questions">
        <h3>常见面试问题</h3>
        <div className="question">
          <h4>1. 比较Redux和Context API的优缺点，以及各自的适用场景。</h4>
          <div className="answer">
            <p><strong>Redux优点：</strong></p>
            <ul>
              <li>强大的开发工具和中间件生态系统</li>
              <li>集中式状态管理，可预测性高</li>
              <li>时间旅行、状态持久化等高级功能</li>
              <li>适合大型复杂应用</li>
              <li>不引起不必要的重渲染（通过shallow comparison和选择器）</li>
            </ul>
            
            <p><strong>Redux缺点：</strong></p>
            <ul>
              <li>配置繁琐，样板代码较多</li>
              <li>学习曲线陡峭</li>
              <li>额外的包大小和性能开销</li>
            </ul>
            
            <p><strong>Context API优点：</strong></p>
            <ul>
              <li>React内置，无需额外依赖</li>
              <li>设置简单，API简洁</li>
              <li>适合轻量级应用或特定功能（如主题切换、多语言等）</li>
            </ul>
            
            <p><strong>Context API缺点：</strong></p>
            <ul>
              <li>性能问题：Context值变化会导致所有消费组件重渲染</li>
              <li>缺乏中间件和开发工具支持</li>
              <li>不适合频繁更新的状态</li>
              <li>深层嵌套可能导致"Context Hell"</li>
            </ul>
            
            <p><strong>适用场景：</strong></p>
            <ul>
              <li><strong>Redux</strong>：大型应用、复杂状态逻辑、频繁更新的状态、需要调试工具</li>
              <li><strong>Context</strong>：中小型应用、简单状态、主题/语言/用户偏好等全局但不频繁变化的状态</li>
            </ul>
            
            <p>
              现代React应用中，许多开发者采用混合方法：使用Context处理全局但不常变化的状态，
              同时使用更轻量的状态库如Zustand或Jotai处理复杂频繁变化的状态，舍弃传统Redux的复杂性。
            </p>
          </div>
        </div>
        
        <div className="question">
          <h4>2. React Query (TanStack Query)和传统状态管理有什么区别？它解决了什么问题？</h4>
          <div className="answer">
            <p>
              <strong>React Query与传统状态管理的关键区别</strong>在于它专注于服务器状态而非客户端状态管理。
            </p>
            
            <p><strong>主要区别：</strong></p>
            <ul>
              <li><strong>状态来源</strong>：传统状态管理处理客户端生成的状态，React Query处理服务器数据</li>
              <li><strong>数据生命周期</strong>：React Query自动处理缓存、失效、重新获取等复杂生命周期</li>
              <li><strong>声明式vs命令式</strong>：React Query采用声明式方法获取数据，而非手动dispatch actions</li>
              <li><strong>并发请求</strong>：自动去重和合并相同数据的请求，优化网络使用</li>
              <li><strong>数据同步</strong>：提供背景刷新、聚焦时重新获取、轮询等功能</li>
            </ul>
            
            <p><strong>React Query解决的问题：</strong></p>
            <ul>
              <li>消除手动管理异步数据状态（loading/error/success）的样板代码</li>
              <li>自动处理数据缓存和过期，减少冗余请求</li>
              <li>简化乐观更新和数据突变</li>
              <li>提供开箱即用的分页、无限滚动等复杂数据模式</li>
              <li>实现服务器状态与UI同步，确保数据新鲜度</li>
              <li>避免瀑布式请求，优化性能</li>
            </ul>
            
            <p><strong>实际使用：</strong></p>
            <p>
              最佳实践通常是结合使用：React Query管理服务器状态（API数据），
              而Zustand/Redux/Context等管理UI状态（主题、模态框状态、用户偏好等）。
              这种分离关注点的方法大大简化了应用架构，让每个工具专注于自己的优势领域。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StateManagement; 