import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from "./Login";
import Home from "./Home"; 
import NavBar from "./NavBar";
import Register from "./Register";

function App() {
  const [logoutUser, setLogoutUser] = React.useState(false);

  const headingStyle = {
    fontSize: "24px",
    textAlign: "center",
    margin: "20px 0",
    color: "#333",
  };

  return (
    <BrowserRouter>
      <div className="App">
        <h2 style={headingStyle}>JWT Authentication</h2>
        <Routes>
          <Route
            path="/"
            element={
              <NavBar
                logoutUser={logoutUser}
                setLogoutUser={setLogoutUser}
              />
            }
          />
          <Route path="/login" element={<Outlet />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login setLogoutUser={setLogoutUser} />} />
          <Route path="/register" element={<Register setLogoutUser={setLogoutUser} />} />
          <Route path="/" element={<Home logoutUser={logoutUser}/>} /> {}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
