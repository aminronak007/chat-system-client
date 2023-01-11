import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./views/home/LandingPage.jsx";
import Login from "./views/authentication/login/Login.jsx";
import "./App.css";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
      <Navigate to="/login" replace={true} />
    </Fragment>
  );
}

export default App;
