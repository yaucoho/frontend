import React, { useState } from 'react';

// 状态接口
interface CounterState {
  count: number;
  lastUpdated: Date;
}

const Counter: React.FC = () => {
  // 使用useState并指定类型
  const [state, setState] = useState<CounterState>({
    count: 0,
    lastUpdated: new Date()
  });

  const increment = () => {
    setState({
      count: state.count + 1,
      lastUpdated: new Date()
    });
  };

  return (
    <div className="counter">
      <h3>Counter: {state.count}</h3>
      <p>Last updated: {state.lastUpdated.toLocaleTimeString()}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;