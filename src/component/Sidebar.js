import React from "react";
import SidebarOptions from "./SidebarOptions";
import "../Css/Sidebar.css";

function Sidebar({setLoading, setCurrentLink, currentLink}) {
  return (
    <div className="sidebar">
      <SidebarOptions setLoading={setLoading} currentLink={currentLink} setCurrentLink={setCurrentLink} />
    </div>
  );
}

export default Sidebar;
