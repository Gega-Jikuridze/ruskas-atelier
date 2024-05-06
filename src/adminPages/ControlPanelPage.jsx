import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ControlPanel from "./components/control-panel";
import useLocalStorage from "../hooks/useLocalStorage";
// import useFetch from "../hooks/useFetch";

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
  //   number: user.number,
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
            className="users"
            key={item.id}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <h1>{item.name}</h1>
            <h1>{item.surname}</h1>
            <h1>{item.email}</h1>
            <button onClick={() => navigate(`/admin/adminPanel/${item.id}`)}>
              Details
            </button>
          </div>
        ))} */}
      </div>
      <button onClick={() => setIsAdmin(!isAdmin)} className="log-out">გამოსვლა</button>
    </div>
  );
};

export default ControlPanelPage;
