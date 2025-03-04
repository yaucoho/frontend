import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Layout, Menu, Typography, theme } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // 菜单项配置
  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
      label: <Link to="/">首页</Link>,
    },
    {
      key: '/users',
      icon: <UserOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
      label: <Link to="/users">用户管理</Link>,
    },
    {
      key: '/settings',
      icon: <SettingOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
      label: <Link to="/settings">系统设置</Link>,
    },
  ];

  return (
    <Layout style={{ 
      minHeight: '100vh',
      display: 'flex',
      width: '100%'
    }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        trigger={null}
        breakpoint="lg"
        width={256}
      >
        <div className="logo" style={{
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: colorBgContainer
        }}>
          <Title level={3} style={{ margin: 0 }}>
            {collapsed ? 'AD' : 'Admin Dashboard'}
          </Title>
        </div>
        
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
        />
      </Sider>
      
      <Layout style={{ 
        flex: 1,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: `calc(100vw - ${collapsed ? 80 : 256}px)`
      }}>
        <Header style={{ 
          padding: 0,
          background: colorBgContainer,
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
        }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
            style: { fontSize: 20, marginLeft: 24 },
            onPointerEnterCapture: undefined,
            onPointerLeaveCapture: undefined
          })}
          <Title level={4} style={{ margin: '0 24px', flex: 1 }}>
            后台管理系统
          </Title>
        </Header>
        
        <Content style={{ 
          flex: 1,
          margin: '24px 16px', 
          padding: 24,
          background: colorBgContainer,
          borderRadius: 8,
          overflow: 'auto',
          minHeight: 0
        }}>
          <Outlet />
        </Content>
        
        <Footer style={{ 
          textAlign: 'center',
          background: colorBgContainer,
          boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.05)'
        }}>
          Admin Dashboard ©{new Date().getFullYear()} Created by You
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
