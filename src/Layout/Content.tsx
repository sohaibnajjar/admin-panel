import { Content as AntContent } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

const Content = () => {
  return (
    <AntContent>
      <Outlet />
    </AntContent>
  );
};

export default Content;
