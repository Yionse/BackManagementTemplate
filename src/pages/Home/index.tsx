import React, { useState } from "react";
import { Card, Layout, Menu, theme } from "antd";
import logo from "@public/icon.ico";
import { Outlet, useNavigate } from "react-router-dom";
import { routes } from "@/routes";

const { Header, Content, Sider } = Layout;

const getSelectKeys = () => {
  if (location.pathname === "/home/index") {
    return ["home"];
  } else {
    return location.pathname.replace("/home", "").split("/");
  }
};

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isShowTitle, setIsShowTitle] = useState(true);
  const [title, setTitle] = useState("主页");
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => {
          setCollapsed(value);
          setIsShowTitle(!isShowTitle);
        }}
      >
        <div
          className="demo-logo-vertical flex flex-row my-4 box-border justify-center w-4/5 mx-auto"
          onClick={() => navigate("/home")}
        >
          <img src={logo} className="w-7 h-7" />
          {isShowTitle && (
            <p
              className="h-7 text-center pl-4"
              style={{ lineHeight: "28px", color: "white" }}
            >
              后台管理系统
            </p>
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={getSelectKeys()}
          defaultOpenKeys={getSelectKeys()}
          items={routes}
          onClick={({ keyPath, domEvent }: any) => {
            let path: string = "/home";
            for (let i = keyPath.length; i > 0; i--) {
              if (keyPath[i - 1] === "home") {
                path += "/index";
                break;
              }
              path += `/${keyPath[i - 1]}`;
            }
            setTitle(domEvent.target.innerText);
            navigate(path);
          }}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <h2 className="pl-6">{title}</h2>
        </Header>
        <Content style={{ margin: "16px" }}>
          <Card style={{ height: "100%" }}>
            <Outlet />
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
