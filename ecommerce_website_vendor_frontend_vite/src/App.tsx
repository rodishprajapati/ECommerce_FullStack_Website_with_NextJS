import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./tailwind.css";
import React from "react";
import Login from "./Auth/login";
import Dashboard from "./pages/dashBoard";
import SignUp from "./Auth/signUp";
import MainPage from "./pages/mainPage";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newAccount" element={<SignUp />} />

          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
