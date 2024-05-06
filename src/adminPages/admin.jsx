import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isAdmin, setIsAdmin] = useLocalStorage("isAdmin", false);

  console.log(isAdmin);

  const navigate = useNavigate();

  const admin = {
    adminName: "ruska",
    adminPass: "ruska123",
  };

  useEffect(() => {
    if (isAdmin) {
      navigate("/admin/adminPanel");
    }
  }, [isAdmin, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === admin.adminName && password === admin.adminPass) {
      setError(false);
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className="admin-page container">
      <div className="admin-log">
        <h1>ადმინი</h1>
        <form className="admin-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="მომხმარებელი"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="პაროლი"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value={"შესვლა"} className="log-submit" />
        </form>
        <button onClick={() => navigate("/")} className="log-out">გამოსვლა</button>
        {error && (
          <p className="error">მომხმარებლის სახელი ან პაროლი არასწორია!</p>
        )}
      </div>
    </div>
  );
};

export default Admin;
