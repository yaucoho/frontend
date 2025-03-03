import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
          try {
              // 发起网络请求
              const response = await fetch('http://localhost:5000/api/data');
              // 检查响应状态
              if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
              }
              // 解析响应数据
              const result = await response.json();
              // 更新数据状态
              setData(result);
          } catch (err) {
              // 捕获错误并更新错误状态
              setError(err.message);
          } finally {
              // 无论请求成功还是失败，都将 loading 状态设置为 false
              setLoading(false);
          }
      };

      fetchData();
  }, []);


  return (
    <div className="App">
        <header className="App-header">
            {loading ? (
                // 正在加载时显示加载提示
                <p>Loading...</p>
            ) : error ? (
                // 出现错误时显示错误信息
                <p>Error: {error}</p>
            ) : data ? (
                // 数据存在时渲染列表
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            ) : (
                // 数据为空时显示提示信息
                <p>No data available.</p>
            )}
        </header>
    </div>
  );
}

export default App;