import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ControlPanel from "./components/control-panel";
import useLocalStorage from "../hooks/useLocalStorage";
import useFetch from "../hooks/useFetch";

const ControlPanelPage = () => {
  const [isAdmin, setIsAdmin] = useLocalStorage("isAdmin", false);
  const navigate = useNavigate();
  const [user, setUser] = useState(false);

  const { fetchRequest } = useFetch({
    url: "https://crudapi.co.uk/api/v1/users",
    method: "GET",
  });

  const users = fetchRequest?.items?.map((user) => ({
    name: user.name,
    surname: user.surname,
    number: user.number,
    email: user.email,
    id: user._uuid,
    desc: user.desc,
  }));

  useEffect(() => {
    if (!isAdmin) {
      navigate("/admin");
    }
  }, [isAdmin, navigate]);

  return (
    <div className="control-panel-page">
      <ControlPanel setUser={setUser} user={user} />
      {user && (
        <div className="users-table">
          <i className="bx bx-x-circle" onClick={() => setUser(!user)}></i>
          {users?.map((item) => (
            <div className="users-item" key={item.id}>
              <h1>{item.name}</h1>
              <h1>{item.surname}</h1>
              <h1>{item.email}</h1>
              <h1>{item.desc}</h1>
              <Link to={`/admin/adminPanel/${item.id}`} target="_blank">
                Details
              </Link>
            </div>
          ))}
        </div>
      )}
      <button onClick={() => setIsAdmin(!isAdmin)} className="log-out">
        გამოსვლა
      </button>
      {user && <div className="overlay" onClick={() => setUser(!user)}></div>}
    </div>
  );
};

export default ControlPanelPage;