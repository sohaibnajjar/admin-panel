import { Layout as AntLayout, Flex, Space } from "antd";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Content from "./Content";
import { useState } from "react";
import styles from "./Layout.module.css";

const Layout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const handleIsSidebarOpen = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  return (
    <Flex justify="center" align="center">
      <Space direction="vertical" className={styles.mainContainer}>
        <AntLayout className="fullHeight">
          <Navbar
            onSidebarOpenChange={handleIsSidebarOpen}
            isSidebarCollapsed={isSidebarCollapsed}
          />
          <AntLayout>
            <AntLayout>
              <Content />
            </AntLayout>
            <Sidebar isCollapsed={isSidebarCollapsed} />
          </AntLayout>
          <Footer />
        </AntLayout>
      </Space>
    </Flex>
  );
};

export default Layout;
