import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import Dashboard from "../components/Dashboard";
import RequireAuth from "../components/requireAuth";

const App = () => {
  const AuthDashboard = RequireAuth(Dashboard);
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignupForm />} />
        <Route path="dashboard" element={<AuthDashboard />} />
      </Routes>
    </div>
  );
};

export default App;
