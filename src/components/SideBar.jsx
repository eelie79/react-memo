import React from "react";
import MomoList from "./MomoList";
import SideBarHeader from "./SideBarHeader";
import SideBarFooter from "./SideBarFooter";

function SideBar({ memos, setSelectedMemoIndex, selectedMemoIndex }) {
  return (
    <div className="SideBar">
      <SideBarHeader />
      <MomoList
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
      />
      <SideBarFooter />
    </div>
  );
}

export default SideBar;
