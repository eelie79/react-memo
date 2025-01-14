import React from "react";
import MomoList from "./MomoList";
import SideBarHeader from "./SideBarHeader";
import SideBarFooter from "./SideBarFooter";

function SideBar({ memos, setSelectedMemoIndex }) {
  return (
    <div className="SideBar">
      <SideBarHeader />
      <MomoList memos={memos} setSelectedMemoIndex={setSelectedMemoIndex} />
      <SideBarFooter />
    </div>
  );
}

export default SideBar;
