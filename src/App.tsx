import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ConfigProvider } from "antd";
const App = () => {
  return (
    <ConfigProvider direction="ltr">
      <RouterProvider router={router} />
    </ConfigProvider>
  );
};

export default App;
