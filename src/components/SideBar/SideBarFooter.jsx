import React from "react";

function SideBarFooter({ className, onClick }) {
  return (
    <div className={className}>
      <button className="button" onClick={onClick}>
        Add Memo
      </button>
    </div>
  );
}

export default SideBarFooter;
