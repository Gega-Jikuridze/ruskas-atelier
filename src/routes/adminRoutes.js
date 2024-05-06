import "../App.css";
import { Outlet } from "react-router-dom";
import Admin from "../adminPages/admin";
import ControlPanelPage from "../adminPages/ControlPanelPage";
import Detailed from "../adminPages/Detailed";

const adminRoutes = [
  {
    element: (
      <div className="App">
        <Outlet />
      </div>
    ),
    path: "/admin",
    children: [
      {
        element: <Admin />,
        index: true,
      },
      {
        element: <ControlPanelPage />,
        path: "adminPanel",
      },
      {
        element: <Detailed />,
        path: "adminPanel/:id",
      },
    ],
  },
];

export default adminRoutes;
