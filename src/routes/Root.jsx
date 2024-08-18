// src/routes/Root.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
