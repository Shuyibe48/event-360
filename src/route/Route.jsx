import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeLayout from "../layout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: '/',
            element: <HomeLayout/>
        }
    ]
  },
]);

export default router;
