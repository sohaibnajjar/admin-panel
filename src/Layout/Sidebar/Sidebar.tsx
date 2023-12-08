import { Button, Flex, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { FC, useState } from "react";

import useSideNavigation from "./useSideNavigation";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

interface SidebarProps {
  isCollapsed: boolean;
}

const Sidebar: FC<SidebarProps> = ({ isCollapsed }) => {
  const menuItems = useSideNavigation();
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  const handleIsSidebarHidden = () => {
    setIsSidebarHidden((prev) => !prev);
  };

  return (
    <Sider
      collapsible
      collapsed={isCollapsed}
      trigger={null}
      collapsedWidth={isSidebarHidden ? 0 : 60}
      style={{ overflow: "hidden" }}
    >
      <Flex vertical style={{ height: "100%" }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["/"]}
          style={{ height: "100%" }}
          items={menuItems}
        />
        <Button
          onClick={handleIsSidebarHidden}
          type="default"
          style={{ borderRadius: 0, borderColor: "#fff" }}
        >
          {isSidebarHidden ? <LeftOutlined /> : <RightOutlined />}
        </Button>
      </Flex>
    </Sider>
  );
};

export default Sidebar;
