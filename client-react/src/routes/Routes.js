import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ChatWithPDF from "../pages/ChatWithPDF/ChatWithPDF";
import Login from "../pages/Form/Login/Login";
import SignUp from "../pages/Form/SignUp/SignUp";
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
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/chat",
        element: <ChatWithPDF />,
      },
    ],
  },
]);

export default routes;
