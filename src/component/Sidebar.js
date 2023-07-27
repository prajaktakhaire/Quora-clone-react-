import React from "react";
import SidebarOptions from "./SidebarOptions";
import "../Css/Sidebar.css";

function Sidebar({setLoading, setCurrentLink}) {
  return (
    <div className="sidebar">
      <SidebarOptions setLoading={setLoading} setCurrentLink={setCurrentLink} />
    </div>
  );
}

export default Sidebar;
