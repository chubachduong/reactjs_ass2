import React from 'react'
import { Layout, Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import "../index.css";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
const { Sider } = Layout;
const { SubMenu } = Menu;

type Props = {}

const AdminSidebar = (props: Props) => {
  return (
    <Sider collapsible>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <NavLink to="/admin/dashboard">Dashboard</NavLink>
        </Menu.Item>
        {/* <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item> */}
        <SubMenu key="sub1" icon={<UserOutlined />} title="Products Manager">
            <Menu.Item key="3">
                <NavLink to="/admin/products">Products</NavLink>
            </Menu.Item>
          <Menu.Item key="4">
                <NavLink to="/admin/products/add">Add Product</NavLink>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Categories Manager">
          <Menu.Item key="5">
            <NavLink to="/admin/categories">Categories</NavLink>
          </Menu.Item>
          <Menu.Item key="6">
            <NavLink to="/admin/categories/add">Add Category</NavLink>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="7" icon={<UserOutlined />}>
          <NavLink to="/admin/users">Users</NavLink>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default AdminSidebar