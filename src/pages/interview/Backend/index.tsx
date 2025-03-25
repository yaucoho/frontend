import React from 'react';
import './index.less';

const Backend: React.FC = () => {
  return (
    <div className="interview-page backend-page">
      <h2>前端开发者必备的后端知识</h2>
      
      <section className="intro-section">
        <p>
          现代前端开发者越来越需要了解后端知识，特别是在全栈开发和微服务架构越来越普遍的环境中。
          本专题介绍前端开发者应掌握的核心后端概念和技术。
        </p>
      </section>
      
      <section className="key-concepts">
        <h3>关键概念</h3>
        <ul>
          <li>
            <strong>Node.js生态系统</strong> - Express、Koa、Nest.js等框架
          </li>
          <li>
            <strong>API设计原则</strong> - RESTful API、GraphQL、RPC
          </li>
          <li>
            <strong>数据库基础</strong> - SQL vs NoSQL、基本查询和优化
          </li>
          <li>
            <strong>认证与授权</strong> - JWT、OAuth、Session管理
          </li>
          <li>
            <strong>服务器部署</strong> - Docker、CI/CD、云服务
          </li>
        </ul>
      </section>
      
      <section className="code-examples">
        <h3>代码示例</h3>
        <div className="code-block">
          <h4>使用Express创建基本REST API</h4>
          <pre>
{`// 使用Express创建REST API
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');

// 初始化Express应用
const app = express();
const PORT = process.env.PORT || 3001;

// 中间件
app.use(cors());
app.use(express.json());

// 连接MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB连接成功'))
.catch(err => console.error('MongoDB连接失败:', err));

// 定义用户模型
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// 认证中间件
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) return res.status(401).json({ message: '未提供访问令牌' });
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: '令牌无效或已过期' });
    req.user = user;
    next();
  });
};

// 路由
// 注册新用户
app.post('/api/users', async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const user = new User({ username, password, email });
    await user.save();
    res.status(201).json({ message: '用户创建成功' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// 用户登录
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    
    if (!user || user.password !== password) {
      return res.status(401).json({ message: '用户名或密码不正确' });
    }
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 获取当前用户信息 (需要认证)
app.get('/api/users/me', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ message: '用户不存在' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 启动服务器
app.listen(PORT, () => {
  console.log(\`服务器运行在端口 \${PORT}\`);
});`}
          </pre>
        </div>
      </section>
      
      <section className="interview-questions">
        <h3>常见面试问题</h3>
        <div className="question">
          <h4>1. 什么是RESTful API？它有哪些设计原则？</h4>
          <div className="answer">
            <p>
              RESTful API是一种基于REST(表现层状态转移)架构风格的API设计方法，主要设计原则包括：
            </p>
            <ul>
              <li><strong>资源导向</strong> - API围绕资源设计，使用名词而非动词</li>
              <li><strong>HTTP方法语义</strong> - 使用GET(读取)、POST(创建)、PUT/PATCH(更新)、DELETE(删除)</li>
              <li><strong>无状态</strong> - 服务器不存储客户端状态，每个请求包含所有必要信息</li>
              <li><strong>分层系统</strong> - 客户端无法直接识别是连接到终端服务器还是中间服务器</li>
              <li><strong>统一接口</strong> - 资源有统一的识别方式，通过表现层操作资源</li>
              <li><strong>HATEOAS</strong> - 超媒体作为应用状态引擎，响应中包含进一步操作的链接</li>
              <li><strong>合适的状态码</strong> - 使用标准HTTP状态码表达操作结果</li>
            </ul>
            <p>例如，一个符合RESTful设计的API端点可能是：</p>
            <ul>
              <li>获取所有用户: <code>GET /api/users</code></li>
              <li>获取特定用户: <code>GET /api/users/{id}</code></li>
              <li>创建用户: <code>POST /api/users</code></li>
              <li>更新用户: <code>PUT /api/users/{id}</code></li>
              <li>删除用户: <code>DELETE /api/users/{id}</code></li>
            </ul>
          </div>
        </div>
        
        <div className="question">
          <h4>2. JWT认证的工作原理是什么？与传统session认证相比有什么优缺点？</h4>
          <div className="answer">
            <p><strong>JWT工作原理：</strong></p>
            <ol>
              <li>用户登录后，服务器创建包含用户身份信息的JWT令牌</li>
              <li>JWT由三部分组成：头部(header)、载荷(payload)和签名(signature)</li>
              <li>服务器将令牌返回给客户端，客户端存储（通常在localStorage或Cookie中）</li>
              <li>客户端在后续请求中通过Authorization头发送令牌</li>
              <li>服务器验证令牌签名和有效期，授权访问</li>
            </ol>
            
            <p><strong>与传统session认证相比的优点：</strong></p>
            <ul>
              <li><strong>无状态</strong> - 服务器不需要存储会话信息，更容易扩展</li>
              <li><strong>跨域友好</strong> - 适用于各种客户端和分布式系统</li>
              <li><strong>移动应用兼容性好</strong> - 不依赖Cookie，适合移动环境</li>
              <li><strong>减轻服务器负担</strong> - 无需在服务器端查询会话数据库</li>
            </ul>
            
            <p><strong>缺点：</strong></p>
            <ul>
              <li><strong>令牌大小</strong> - 包含更多数据，增加请求大小</li>
              <li><strong>不可撤销</strong> - 一旦签发，在过期前很难撤销（需要额外的黑名单机制）</li>
              <li><strong>存储敏感数据风险</strong> - payload部分仅做Base64编码，不是加密</li>
              <li><strong>安全实现复杂</strong> - 需要正确处理令牌存储、过期和刷新</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Backend; 