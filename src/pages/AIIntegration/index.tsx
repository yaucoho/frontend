import React from 'react';
import './index.less';

/**
 * AI集成示例页面
 * 
 * 展示2025年React应用中集成AI功能的常见模式和最佳实践
 */
const AIIntegration: React.FC = () => {
  return (
    <div className="ai-page">
      <h2>AI集成与前端开发</h2>
      
      <div className="ai-card">
        <h3 className="card-title">前端AI集成的主要场景</h3>
        <p>
          随着AI技术的快速发展，前端开发中集成AI功能已成为一种趋势。以下是一些常见的AI集成场景：
        </p>
        <ul className="feature-list">
          <li>聊天机器人和对话界面</li>
          <li>智能搜索和推荐系统</li>
          <li>内容生成（文本、图像、代码）</li>
          <li>用户行为分析和个性化</li>
          <li>自然语言处理集成</li>
        </ul>
      </div>
      
      <div className="ai-card">
        <h3 className="card-title">常用AI集成工具和库</h3>
        <ul className="feature-list">
          <li><strong>OpenAI API</strong> - 集成GPT模型进行文本生成和理解</li>
          <li><strong>TensorFlow.js</strong> - 在浏览器中运行机器学习模型</li>
          <li><strong>Hugging Face Transformers.js</strong> - 在前端使用预训练模型</li>
          <li><strong>ML5.js</strong> - 友好的机器学习工具</li>
          <li><strong>Langchain.js</strong> - 用于构建基于LLM的应用</li>
        </ul>
      </div>
      
      <div className="ai-card">
        <h3 className="card-title">前端AI集成示例：OpenAI API调用</h3>
        <div className="code-block">
          {`// 使用OpenAI API的简单React组件
import { useState } from 'react';

export function AICompletionForm() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/ai/completion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });
      
      const data = await response.json();
      setResult(data.text);
    } catch (error) {
      console.error('AI请求失败:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea 
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="输入提示词..."
        />
        <button type="submit" disabled={loading}>
          {loading ? '生成中...' : '生成内容'}
        </button>
      </form>
      {result && (
        <div className="result">
          <h4>生成结果:</h4>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}`}
        </div>
      </div>
      
      <div className="ai-card">
        <h3 className="card-title">面试问题</h3>
        <div className="question-card">
          <div className="question">如何在前端应用中保护AI API密钥?</div>
          <div className="answer">
            永远不应在前端代码中直接包含API密钥。相反，创建一个后端服务来处理API调用，前端只与您的后端通信。
            您还可以使用环境变量、令牌轮换和请求速率限制等技术来进一步保护API访问。
          </div>
        </div>
        
        <div className="question-card">
          <div className="question">前端AI集成面临的主要挑战是什么?</div>
          <div className="answer">
            主要挑战包括：性能和延迟问题（特别是对于大型模型）、保护API密钥和用户数据、处理不可预测的AI输出、
            确保可访问性和包容性、处理API成本和配额限制，以及保持与快速发展的AI技术同步。
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIIntegration; 