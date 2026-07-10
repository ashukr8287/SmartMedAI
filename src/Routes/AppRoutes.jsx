import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../Pages/Landing";
import Features from "../Pages/Features";
import About from "../Pages/About";
import Pricing from "../Pages/Pricing";
import Contact from "../Pages/Contact";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import DashboardLayout from "../Components/DashboardLayout";
import Dashboard from "../Pages/Dashboard";
import DashMedicines from "../Pages/DashMedicines";
import DashReports from "../Pages/DashReports";
import DashProfile from "../Pages/DashProfile";
import ProtectedRoute from "./ProtectedRoutes";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/About" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
          <Route path="medicines" element={<DashMedicines />} />
          <Route path="reports" element={<DashReports />} />
          <Route path="profile" element={<DashProfile />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
