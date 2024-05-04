
import React, { useState } from "react";
import ControlPanel from "../components/control-panel";

const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const admin = {
    adminName: "ruska",
    adminPass: "ruska123"
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === admin.adminName && password === admin.adminPass) {
      console.log(error);
      setError(true);
    } else {
      setError(false);
      console.log(error)
    }
  };

  return (
    <div className="admin-page">
      {!error ?     
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
          <input type="submit" value={"შესვლა"} className="log-submit"/>
        </form>
        {error && <p className="error">მომხმარებლის სახელი ან პაროლი არასწორია!</p>}
      </div> : <ControlPanel/>}

    </div>
  );
};

export default Admin;
