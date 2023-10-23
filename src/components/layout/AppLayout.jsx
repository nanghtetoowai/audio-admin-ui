import { Layout } from "antd";
import React from "react";
import "./AppLayout.scss";
import SideBarContent from "./SideBarContent";
import HeaderContent from "./HeaderContent";
import FooterBar from "./Footer";

const { Header, Footer, Sider, Content } = Layout;

export default function AppLayout({ children }) {
  return (
    <Layout style={{ height: "100vh" }}>
      <Layout hasSider style={{ backgroundColor: "#c7497f" }}>
        <Sider className="sider-style">
          <SideBarContent />
        </Sider>
        <Content className="contentStyle">
          <div>
            <Header className="headerStyle">
              <HeaderContent />
            </Header>
          </div>
          {children}
        </Content>
      </Layout>
      <Footer className="footerStyle">
        <FooterBar/>
      </Footer>
    </Layout>
  );
}
