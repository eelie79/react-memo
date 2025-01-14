import React from "react";

function MemoItem({ children, onClick, isSelected }) {
  return (
    <div onClick={onClick} className={"MemoItem" + (isSelected ? " selected" : "")}>
      {children}
    </div>
  );
}

export default MemoItem;
