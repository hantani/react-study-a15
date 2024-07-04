import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Charcters from "./screens/Characters";
import Character from "./screens/Character";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Charcters />,
      },
      {
        path: "/character/:id",
        element: <Character />,
      },
    ],
  },
]);

export default router;
