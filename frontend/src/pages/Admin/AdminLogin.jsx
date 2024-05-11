import React, {useState} from "react";

import {useNavigate} from "react-router-dom";

export const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleAdminLogin = (event) => {
    event.preventDefault();
    if (username === "admin@gmail.com" && password === "admin") {
      navigate("/admin/dashboard");
    } else {
      alert("Invalid username or password'");
    }
  };
  return (
    <>
      <div style={{width:"400px", height:"400px", margin:'auto'}}>
        <form
          onSubmit={handleAdminLogin}
          className="m-3  "
          style={{
            
            border: "1px solid teal",
            padding: "15px",
            borderRadius: "10px",
            width: "400px",
          }}
        >
          <h3 style={{ textAlign:"center"}}>Admin Login</h3>
          <div className="mb-3 ">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              value={username}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setUsername(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              value={password}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
