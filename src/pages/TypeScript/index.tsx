import React from 'react';
import './index.less';

/**
 * TypeScript进阶特性演示页面
 * 
 * 展示TypeScript在前端开发中的高级用法和面试常见知识点
 */
const TypeScript: React.FC = () => {
  return (
    <div className="typescript-page">
      <h2>TypeScript 进阶知识</h2>
      
      <section className="intro-section">
        <p>
          TypeScript已经成为现代前端开发的标准工具之一，掌握其高级特性可以让你的代码更加健壮、可维护，同时提高开发效率。
          本专题详细介绍TypeScript的进阶知识点，帮助你在面试中展示深入的技术理解。
        </p>
      </section>
      
      <section className="key-concepts">
        <h3>关键概念</h3>
        <ul>
          <li>
            <strong>高级类型</strong> - 联合类型、交叉类型、条件类型等
          </li>
          <li>
            <strong>泛型编程</strong> - 泛型函数、泛型约束、泛型工具类型
          </li>
          <li>
            <strong>类型推断与类型保护</strong> - 如何利用TS的智能分析
          </li>
          <li>
            <strong>声明文件</strong> - 创建和使用.d.ts文件
          </li>
          <li>
            <strong>装饰器与元数据</strong> - 利用装饰器实现面向切面编程
          </li>
        </ul>
      </section>
      
      <section className="code-examples">
        <h3>代码示例</h3>
        <div className="code-block">
          <h4>高级类型的使用</h4>
          <pre>
{`// 高级类型示例

// 1. 条件类型（Conditional Types）
type IsArray<T> = T extends any[] ? true : false;
type WithArray = IsArray<string[]>; // true
type WithoutArray = IsArray<string>; // false

// 2. 映射类型（Mapped Types）
type Readonly<T> = {
  readonly [K in keyof T]: T[K];
}
interface User {
  id: number;
  name: string;
}
type ReadonlyUser = Readonly<User>; // { readonly id: number; readonly name: string }

// 3. 联合类型与交叉类型
type Admin = { id: number; privileges: string[] };
type Employee = { id: number; startDate: Date };

// 联合类型：Admin 或 Employee
type AdminOrEmployee = Admin | Employee;

// 交叉类型：同时具有Admin和Employee的所有属性
type AdminAndEmployee = Admin & Employee;

// 4. 类型守卫（Type Guards）
function isAdmin(staff: AdminOrEmployee): staff is Admin {
  return (staff as Admin).privileges !== undefined;
}

function processStaff(staff: AdminOrEmployee) {
  if (isAdmin(staff)) {
    // TypeScript知道在这个分支中staff是Admin类型
    console.log("管理员权限: " + staff.privileges.join(', '));
  } else {
    // TypeScript知道在这个分支中staff是Employee类型
    console.log("入职日期: " + staff.startDate);
  }
}

// 5. 工具类型
// Partial - 使所有属性可选
type PartialUser = Partial<User>; // { id?: number; name?: string }

// Pick - 从类型中选择部分属性
type NameOnly = Pick<User, 'name'>; // { name: string }

// Omit - 从类型中省略部分属性
type WithoutId = Omit<User, 'id'>; // { name: string }

// ReturnType - 获取函数返回值类型
function createUser() {
  return { id: 1, name: "John" };
}
type CreatedUser = ReturnType<typeof createUser>; // { id: number; name: string }

// 6. 模板字面量类型
type EventName = 'click' | 'scroll' | 'mousemove';
type EventHandler<T extends string> = \`on\${Capitalize<T>}\`;
type MouseEventHandler = EventHandler<'click'>; // 'onClick'`}
          </pre>
        </div>
      </section>
      
      <section className="interview-questions">
        <h3>常见面试问题</h3>
        <div className="question">
          <h4>1. TypeScript中的泛型是什么？请解释其作用并给出一个实际应用场景。</h4>
          <div className="answer">
            <p>
              <strong>泛型</strong>是TypeScript的一个核心特性，允许在定义函数、接口或类时不预先指定具体的类型，而是在使用时再指定类型。泛型提供了类型重用的能力，使我们能够创建可复用的组件，同时保持类型安全。
            </p>
            
            <p><strong>泛型的主要作用：</strong></p>
            <ul>
              <li>实现类型的参数化，增强代码复用</li>
              <li>在保持类型安全的前提下处理多种数据类型</li>
              <li>捕获传入参数的类型，用于表达参数之间或返回值与参数之间的关系</li>
              <li>允许类型检查器使用传入的类型检查代码</li>
            </ul>
            
            <p><strong>实际应用场景：</strong>创建一个通用的HTTP请求函数</p>
            <pre>
{`// 泛型HTTP请求函数示例
async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(\`HTTP error! status: \${response.status}\`);
  }
  const data = await response.json();
  return data as T;
}

// 定义数据类型
interface User {
  id: number;
  name: string;
  email: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
  userId: number;
}

// 使用泛型函数获取不同类型的数据
async function loadUserData() {
  // TypeScript知道这里返回的是User类型
  const user = await fetchData<User>('/api/users/1');
  console.log(user.name); // 类型安全，编辑器有自动完成
  
  // TypeScript知道这里返回的是Post[]类型
  const posts = await fetchData<Post[]>('/api/posts?userId=1');
  console.log(posts[0].title); // 类型安全，编辑器有自动完成
}`}
            </pre>
            <p>
              在这个例子中，<code>fetchData</code>函数可以处理任何类型的数据，而不需要为每种响应类型创建单独的函数。
              泛型参数<code>T</code>确保了类型安全，使开发者在使用返回数据时获得正确的类型提示和检查。
            </p>
          </div>
        </div>
        
        <div className="question">
          <h4>2. 解释TypeScript中的类型兼容性原则，结构类型系统与名义类型系统有什么区别？</h4>
          <div className="answer">
            <p>
              <strong>TypeScript的类型兼容性</strong>基于结构类型系统（Structural Typing），而不是名义类型系统（Nominal Typing）。
            </p>
            
            <p><strong>结构类型系统：</strong></p>
            <ul>
              <li>关注类型的实际结构/形状，而不是其声明的名称</li>
              <li>如果两个类型的成员兼容，则这两个类型兼容</li>
              <li>更灵活，适合JavaScript这样的动态语言</li>
            </ul>
            
            <p><strong>名义类型系统：</strong></p>
            <ul>
              <li>基于类型的名称或显式的子类型关系来确定兼容性</li>
              <li>即使两个类型结构完全相同，如果它们的名称不同，它们也被视为不兼容</li>
              <li>Java、C#等强类型语言通常使用名义类型系统</li>
            </ul>
            
            <p><strong>示例：结构类型系统的工作方式</strong></p>
            <pre>
{`// 结构类型系统示例
interface Point2D {
  x: number;
  y: number;
}

interface Named {
  name: string;
}

// 显式实现接口
class Point implements Point2D {
  x: number;
  y: number;
  
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

// 没有显式实现任何接口
class Person {
  name: string;
  age: number;
  
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// 结构兼容性演示
let point: Point2D;
let named: Named;

// 正常工作 - Point实现了Point2D接口
point = new Point(10, 20);

// 也正常工作 - Person有一个name属性，满足Named接口的结构
named = new Person("John", 25);

// 这也能工作，因为Person有所有Point2D需要的属性！
const person = new Person("John", 25);
person.x = 10;
person.y = 20;
point = person; // 结构上兼容

// 这在名义类型系统中不会工作，因为Person没有声明实现Point2D接口`}
            </pre>
            
            <p>
              结构类型系统的优点是灵活性和适应性，特别适合JavaScript的动态本质。缺点是可能导致意外的类型兼容，有时需要采用额外技术（如品牌类型/标称类型）来增强类型安全。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TypeScript; 