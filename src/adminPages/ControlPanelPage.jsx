import React, { useEffect } from "react";
import ControlPanel from "./components/control-panel";
import useLocalStorage from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

const ControlPanelPage = () => {
  const [isAdmin, setIsAdmin] = useLocalStorage("isAdmin", false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) {
      navigate("/admin");
    }
  }, [isAdmin, navigate]);

  return (
    <div>
      <ControlPanel />
      <button onClick={() => setIsAdmin(!isAdmin)}>Log Out</button>
    </div>
  );
};

export default ControlPanelPage;
