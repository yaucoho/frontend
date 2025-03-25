import React from 'react';
import './index.less';

const AI: React.FC = () => {
  return (
    <div className="interview-page ai-page">
      <h2>AI 集成与前端开发</h2>
      
      <section className="intro-section">
        <p>
          随着人工智能技术的快速发展，前端开发者需要了解如何在Web应用中集成AI功能，以及如何利用AI工具提高开发效率。
          本专题探讨前端领域中的AI集成技术和实践。
        </p>
      </section>
      
      <section className="key-concepts">
        <h3>关键概念</h3>
        <ul>
          <li>
            <strong>AI API集成</strong> - 如何在前端应用中集成OpenAI、Gemini等AI服务API
          </li>
          <li>
            <strong>本地模型运行</strong> - 使用TensorFlow.js或ONNX.js在浏览器中运行轻量级模型
          </li>
          <li>
            <strong>AI辅助开发</strong> - 使用GitHub Copilot、Claude等AI工具辅助代码编写
          </li>
          <li>
            <strong>AI驱动的UI</strong> - 智能表单、预测性UI和个性化体验
          </li>
        </ul>
      </section>
      
      <section className="code-examples">
        <h3>代码示例</h3>
        <div className="code-block">
          <h4>集成OpenAI API示例</h4>
          <pre>
{`// OpenAI API集成示例
import { useState } from 'react';

export default function AIChat() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const result = await fetch('/api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
      
      const data = await result.json();
      setResponse(data.text);
    } catch (error) {
      console.error('Error:', error);
      setResponse('发生错误，请稍后再试');
    } finally {
      setIsLoading(false);
    }
  }
  
  return (
    <div className="ai-chat">
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="输入你的问题..."
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? '处理中...' : '发送'}
        </button>
      </form>
      
      {response && (
        <div className="response">
          <h3>AI回应:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}`}
          </pre>
        </div>
      </section>
      
      <section className="interview-questions">
        <h3>常见面试问题</h3>
        <div className="question">
          <h4>1. 前端开发者如何处理AI API调用中的高延迟问题？</h4>
          <div className="answer">
            <p>
              处理AI API调用中的高延迟问题可以采用以下策略：
            </p>
            <ul>
              <li>实现流式响应(Streaming Response)，显示部分结果</li>
              <li>添加骨架屏或精心设计的加载状态</li>
              <li>使用乐观UI更新，预先显示可能的结果</li>
              <li>在客户端缓存常见查询结果</li>
              <li>实现请求防抖和节流，减少不必要的API调用</li>
              <li>在后端使用任务队列和WebSockets推送结果</li>
            </ul>
          </div>
        </div>
        
        <div className="question">
          <h4>2. 在前端应用中集成AI功能时，有哪些安全和隐私考虑？</h4>
          <div className="answer">
            <ul>
              <li>避免直接在客户端存储API密钥，始终通过后端代理请求</li>
              <li>明确用户数据的使用范围，获取适当的用户许可</li>
              <li>实现输入验证，防止提示注入攻击</li>
              <li>设置速率限制，防止API滥用</li>
              <li>考虑数据本地化处理，减少敏感信息传输</li>
              <li>为用户提供清除其数据的选项</li>
              <li>遵循相关隐私法规(GDPR, CCPA等)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AI; 