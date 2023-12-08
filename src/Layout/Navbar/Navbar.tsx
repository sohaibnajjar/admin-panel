import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Flex, Popover, Typography } from "antd";
import { FC } from "react";
import styles from "./Navbar.module.css";
import SettingsMenu from "./SettingsMenu";
import { useLocation } from "react-router-dom";
import { PATH_LABELS } from "../../routes/router";

interface NavbarProps {
  onSidebarOpenChange: () => void;
  isSidebarCollapsed: boolean;
}

const Navbar: FC<NavbarProps> = ({
  onSidebarOpenChange,
  isSidebarCollapsed,
}) => {
  const location = useLocation();

  const headerTitle =
    PATH_LABELS[location.pathname as keyof typeof PATH_LABELS];

  return (
    <Flex
      className={styles.mainContainer}
      justify="space-between"
      align="center"
    >
      <Popover content={<SettingsMenu />} title="User Name" trigger="click">
        <Button shape="circle" size="large">
          <UserOutlined />
        </Button>
      </Popover>
      <Typography.Title level={5} className={styles.title}>
        {headerTitle}
      </Typography.Title>
      <Button
        onClick={onSidebarOpenChange}
        type="text"
        size="large"
        className={styles.sidebarTrigger}
        icon={
          isSidebarCollapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />
        }
      />
    </Flex>
  );
};

export default Navbar;
