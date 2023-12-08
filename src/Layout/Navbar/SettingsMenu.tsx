import { Menu, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

type MenuItem = Required<MenuProps>["items"][number];

const SettingsMenu = () => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    navigate("/login");
    localStorage.removeItem("token");
  };

  const items: MenuItem[] = [
    {
      label: "settings",
      key: "0",
      onClick: () => {
        console.log("clicked1");
      },
    },
    {
      label: "Logout",
      key: "1",
      onClick: handleLogoutClick,
    },
  ];

  return <Menu className={styles.settingsMenu} mode="inline" items={items} />;
};

export default SettingsMenu;
