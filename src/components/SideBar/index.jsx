import React from "react";
import "./index.css";

import MomoList from "../MemoList";
import SideBarHeader from "./SideBarHeader";
import SideBarFooter from "./SideBarFooter";

function SideBar({ memos, setSelectedMemoIndex, selectedMemoIndex, addMemo, deleteMemo }) {
  return (
    <div className="SideBar">
      <SideBarHeader />
      <MomoList
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        deleteMemo={deleteMemo}
      />
      <SideBarFooter className="SideBarFooter" onClick={addMemo} />
    </div>
  );
}

export default SideBar;
