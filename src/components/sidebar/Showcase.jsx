import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import "./style.css";


const Showcase = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
      setSidebarVisible(!sidebarVisible);
    };
    return (
      <div
        className={`app ${sidebarVisible ? "sidebar-visible" : ""}`}
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
        }}
      >
        <Sidebar />
        <Outlet />
      </div>
    );
}

export default Showcase