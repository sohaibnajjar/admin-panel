import { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import { mainRoutes } from "../../routes/router";

const useSideNavigation = () => {
  const navigate = useNavigate();

  const menuItems: MenuProps["items"] = mainRoutes
    .filter((route) => route.isMainPage)
    .map((route) => ({
      key: route.path,
      icon: route.icon,
      route: route.path,
      label: route.label,
      onClick: () => {
        navigate(route.path);
      },
    }));

  return menuItems;
};

export default useSideNavigation;
