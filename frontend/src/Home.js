import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  const isLoginTrue = JSON.parse(localStorage.getItem("login"));

  const userNotLogin = () => (
    <div style={welcomeContainerStyle}>
      <h2 style={welcomeHeaderStyle}>Welcome to the JWT Auth Test Website</h2>
      <p>
        It seems like you are not logged in. If you have an account, please{" "}
        <Link to="/login" style={linkStyle}>
          Log In
        </Link>
        . Don't have an account yet?{" "}
        <Link to="/register" style={linkStyle}>
          Register
        </Link>
        .
      </p>
    </div>
  );

  const userLoggedIn = () => (
    <div style={welcomeContainerStyle}>
      <h2 style={welcomeHeaderStyle}>Welcome Back!</h2>
      <Outlet />
    </div>
  );

  return (
    <div style={containerStyle}>
      {isLoginTrue && isLoginTrue.userLogin ? (
        <>{userLoggedIn()}</>
      ) : (
        <>{userNotLogin()}</>
      )}
    </div>
  );
};

const welcomeContainerStyle = {
  border: "1px solid #ccc",
  padding: "20px",
  borderRadius: "8px",
  backgroundColor: "#f9f9f9",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
};

const welcomeHeaderStyle = {
  fontSize: "24px",
  marginBottom: "10px",
  color: "#333",
};

const linkStyle = {
  color: "#007bff",
  textDecoration: "none",
};

const containerStyle = {
  marginTop: "100px",
  textAlign: "center",
  fontFamily: "Arial, sans-serif",
};

export default Home;