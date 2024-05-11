import React from "react";
import {Routes, Route} from "react-router-dom";
import {AdminLogin} from "../pages/Admin/AdminLogin";
import {AdminDashboard} from "../pages/Admin/AdminDashboard";
import {Stream} from "../pages/Admin/Stream";
import {Subjects} from "../pages/Admin/Subjects";
import AdminStudentList from "../pages/Admin/AdminStudentList";
import {PrivateRoutes} from "./PrivateRoutes";

export const AllRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/streams" element={<Stream />} />
        <Route path="/admin/subjects" element={<Subjects />} />
        <Route path="/admin/student" element={<AdminStudentList />} />
      </Routes>
    </>
  );
};
