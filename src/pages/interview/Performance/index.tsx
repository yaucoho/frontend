import React from 'react';
import './index.less';

const Performance: React.FC = () => {
  return (
    <div className="interview-page performance-page">
      <h2>React 性能优化</h2>
      
      <section className="intro-section">
        <p>
          性能优化是前端开发中不可忽视的一环，尤其是在复杂的React应用中。本专题讨论React应用常见的性能问题及其解决方案，
          帮助开发者构建高性能的用户界面。
        </p>
      </section>
      
      <section className="key-concepts">
        <h3>关键概念</h3>
        <ul>
          <li>
            <strong>渲染优化</strong> - 避免不必要的渲染和高效组件更新
          </li>
          <li>
            <strong>代码分割</strong> - 懒加载和动态导入，减小初始包体积
          </li>
          <li>
            <strong>状态管理优化</strong> - 选择合适的状态管理策略
          </li>
          <li>
            <strong>网络优化</strong> - 数据获取策略和缓存技巧
          </li>
          <li>
            <strong>虚拟列表</strong> - 高效渲染大数据集
          </li>
        </ul>
      </section>
      
      <section className="code-examples">
        <h3>代码示例</h3>
        <div className="code-block">
          <h4>使用 React.memo 防止不必要的重渲染</h4>
          <pre>
{`// 使用 React.memo 避免不必要的渲染
import React from 'react';

// 不使用 memo 的普通组件
function RegularComponent({ value, onClick }) {
  console.log('RegularComponent rendered');
  return (
    <div onClick={onClick}>
      Regular value: {value}
    </div>
  );
}

// 使用 memo 的组件
const MemoizedComponent = React.memo(function MemoizedComponent({ value, onClick }) {
  console.log('MemoizedComponent rendered');
  return (
    <div onClick={onClick}>
      Memoized value: {value}
    </div>
  );
});

// 使用自定义比较函数的 memo 组件
const CustomMemoComponent = React.memo(
  function CustomMemoComponent({ user, onClick }) {
    console.log('CustomMemoComponent rendered');
    return (
      <div onClick={onClick}>
        User name: {user.name}, age: {user.age}
      </div>
    );
  },
  (prevProps, nextProps) => {
    // 只有当名字变化时才重新渲染
    return prevProps.user.name === nextProps.user.name;
  }
);

// 父组件
export default function App() {
  const [count, setCount] = React.useState(0);
  const [user, setUser] = React.useState({ name: 'John', age: 25 });
  
  // 每次渲染创建新的函数引用
  const handleRegularClick = () => console.log('Regular clicked');
  
  // 使用 useCallback 保持函数引用稳定
  const handleMemoizedClick = React.useCallback(
    () => console.log('Memoized clicked'),
    [] // 空依赖数组意味着函数引用永远不变
  );
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increment count: {count}
      </button>
      <button onClick={() => setUser(prev => ({ ...prev, age: prev.age + 1 }))}>
        Increment age: {user.age}
      </button>
      
      {/* 每次父组件重新渲染，这个组件也会重新渲染 */}
      <RegularComponent value={count} onClick={handleRegularClick} />
      
      {/* 只有当 count 变化或 handleMemoizedClick 变化时才重新渲染 */}
      <MemoizedComponent value={count} onClick={handleMemoizedClick} />
      
      {/* 只有当 user.name 变化时才重新渲染 */}
      <CustomMemoComponent user={user} onClick={handleMemoizedClick} />
    </div>
  );
}`}
          </pre>
        </div>
      </section>
      
      <section className="interview-questions">
        <h3>常见面试问题</h3>
        <div className="question">
          <h4>1. 在React应用中，导致性能问题的最常见原因是什么？</h4>
          <div className="answer">
            <p>
              React应用中常见的性能问题原因包括：
            </p>
            <ul>
              <li><strong>不必要的重渲染</strong> - 父组件更新导致所有子组件重渲染，即使它们的props没有变化</li>
              <li><strong>过大的初始加载包</strong> - 没有实施代码分割和懒加载</li>
              <li><strong>低效的事件处理</strong> - 在渲染函数中创建新的函数引用</li>
              <li><strong>过度使用昂贵的计算</strong> - 没有使用memoization缓存计算结果</li>
              <li><strong>不恰当的状态管理</strong> - 状态结构不合理或状态更新过于频繁</li>
              <li><strong>频繁的DOM操作</strong> - 绕过React直接操作DOM</li>
              <li><strong>未优化的列表渲染</strong> - 渲染大量数据时没有使用虚拟列表</li>
            </ul>
          </div>
        </div>
        
        <div className="question">
          <h4>2. 请解释React中的useMemo和useCallback钩子，以及何时应该使用它们？</h4>
          <div className="answer">
            <p><strong>useMemo:</strong></p>
            <ul>
              <li>用于缓存计算值，防止昂贵的计算在每次渲染时重复执行</li>
              <li>接受一个创建函数和依赖项数组，仅在依赖项变化时重新计算值</li>
              <li><code>const memoizedValue = useMemo(() {'=>'} computeExpensiveValue(a, b), [a, b]);</code></li>
            </ul>
            
            <p><strong>useCallback:</strong></p>
            <ul>
              <li>用于缓存函数引用，防止函数在每次渲染时创建新的引用</li>
              <li>对传递给子组件的回调函数特别有用</li>
              <li><code>const memoizedCallback = useCallback(() {'=>'} doSomething(a, b), [a, b]);</code></li>
            </ul>
            
            <p><strong>使用时机:</strong></p>
            <ul>
              <li>当计算过程复杂或资源密集时使用useMemo</li>
              <li>当函数传递给使用React.memo或shouldComponentUpdate优化的子组件时使用useCallback</li>
              <li>当函数是useEffect等钩子的依赖项时使用useCallback</li>
              <li>当创建的对象或函数作为prop传递给React.memo包装的组件时</li>
            </ul>
            
            <p><strong>注意事项:</strong></p>
            <ul>
              <li>过度使用这些钩子可能导致记忆开销超过获得的好处</li>
              <li>在大多数情况下，应该先测量性能问题，再应用这些优化</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Performance; 