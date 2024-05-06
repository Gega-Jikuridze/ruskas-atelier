import React, { useEffect } from "react";
import ControlPanel from "./components/control-panel";
import useLocalStorage from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const ControlPanelPage = () => {
  const [isAdmin, setIsAdmin] = useLocalStorage("isAdmin", false);
  const navigate = useNavigate();

  // const { fetchRequest } = useFetch({
  //   url: "https://crudapi.co.uk/api/v1/users",
  //   method: "GET",
  // });

  // const users = fetchRequest?.items.map((user) => ({
  //   name: user.name,
  //   surname: user.surname,
  //   numper: user.number,
  //   email: user.email,
  //   id: user._uuid,
  // }));

  useEffect(() => {
    if (!isAdmin) {
      navigate("/admin");
    }
  }, [isAdmin, navigate]);

  return (
    <div>
      <ControlPanel />
      <div className="container">
        {/* {users?.map((item) => (
          <div
            key={item.id}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <h1>{item.name}</h1>
            <h1>{item.surname}</h1>
            <h1>{item.email}</h1>
          </div>
        ))} */}
      </div>
      <button onClick={() => setIsAdmin(!isAdmin)}>Log Out</button>
    </div>
  );
};

export default ControlPanelPage;
