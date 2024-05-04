import "../App.css";
import { Outlet } from "react-router-dom";
import Admin from "../adminPages/admin";
import ControlPanelPage from "../adminPages/ControlPanelPage";

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
    ],
  },
];

export default adminRoutes;
