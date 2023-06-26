import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ChatWithPDF from "../pages/ChatWithPDF/ChatWithPDF";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
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
        element: <ChatWithPDF />,
      },
    ],
  },
]);

export default routes;
