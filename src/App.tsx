// 主应用组件
import { useState } from 'react';
import Dashboard from './components/Dashboard';
import Counter from './components/Counter';
import UserList from './components/UserList';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="App">
        <header className="App-header">
          <h1>Admin Dashboard</h1>
        </header>
        <main>
          <Dashboard title="Sales Analytics" description="View your sales performance" />
          <Counter />
          <UserList />
        </main>
      </div>
    </>
    /* 
      <></>是Fragment语法。 
      因为React规定组件必须返回一个根节点，所以需要使用Fragment来包裹多个子节点
      优点是：不会在DOM中生成多余的节点且不会破坏Flex、Grid布局
    */
  )
}

export default App
