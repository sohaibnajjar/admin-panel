import { RouteObject, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/login";
import Layout from "../Layout";
import { SendOutlined, UserOutlined } from "@ant-design/icons";
import User from "../pages/users/user";
import Users from "../pages/users";
import Locations from "../pages/locations";

type MainRouteParams = Pick<RouteObject, "element" | "children"> & {
  path: string;
  label?: string;
  icon?: React.ReactNode;
  isMainPage?: boolean;
};

export const mainRoutes: MainRouteParams[] = [
  {
    path: "/",
    label: "Users",
    icon: <UserOutlined />,
    element: <Users />,
    isMainPage: true,
  },
  {
    path: "/locations",
    label: "Locations",
    icon: <SendOutlined />,
    element: <Locations />,
    isMainPage: true,
  },
  {
    path: "/users/:id",
    element: <User />,
  },
  {
    path: "/users/:id/edit",
    element: <>hello</>,
  },
];

export const PATH_LABELS = mainRoutes.reduce(
  (prev, current) => ({ ...prev, [current.path]: current.label }),
  {}
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: mainRoutes
          .filter((route) => route.isMainPage)
          .map((route) => ({
            path: route.path,
            element: route.element,
          })),
      },
      ...mainRoutes
        .filter((route) => !route.isMainPage)
        .map((route) => ({
          path: route.path,
          element: route.element,
        })),
    ],
    errorElement: <ErrorPage />,
  },
  { path: "/login", element: <Login /> },
  // { path: "*", element: <Navigate to="/login" replace /> },
]);

export default router;
