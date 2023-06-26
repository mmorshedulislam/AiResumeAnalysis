import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <div>Login</div>,
      },
      {
        path: "/signup",
        element: <div>Signup</div>,
      },
      {
        path: "/chat",
        element: <div>Chat</div>,
      },
    ],
  },
]);

export default routes;
