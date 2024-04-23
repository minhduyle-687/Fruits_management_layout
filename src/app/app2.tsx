import React, { useState } from 'react';
import {
  AppstoreOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DesktopOutlined,
  TeamOutlined,
  UserOutlined,
  SettingOutlined ,
  QuestionCircleOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  GiftOutlined,
  LineChartOutlined,
  HomeOutlined,
  TransactionOutlined,
  TruckOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';

const { Header, Sider, Content, Footer } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Overview', '1', <AppstoreOutlined />),
  getItem('Sale', '2', <TransactionOutlined />),
  getItem('Products', 'sub1', <ShopOutlined />,[
    getItem('Categories', '3'),
    getItem('Providers', '4'),
    getItem('Store Management', '5'),
  ]),
  getItem('Orders', 'sub2', <ShoppingCartOutlined />,[
    getItem('Create Orders', '6'),
    getItem('List Orders', '7'),
    getItem('Orders Return', '8'),
  ]),
  getItem('Coupons', '9', <GiftOutlined />),
  getItem('Customers', '10', <UserOutlined />),
  getItem('Reports', '11', <LineChartOutlined />),
  getItem('Accounts', '12', <TeamOutlined />),
  getItem('Settings', '13', <SettingOutlined />),
  getItem('Help', '14', <QuestionCircleOutlined />),
  
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
