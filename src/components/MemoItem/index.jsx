import React from "react";
import "./index.css";

function MemoItem({ children, onClick, isSelected, onClickDelete }) {
  return (
    <div onClick={onClick} className={"MemoItem" + (isSelected ? " selected" : "")}>
      {children}
      <button className="delete button" onClick={onClickDelete}>
        X
      </button>
    </div>
  );
}

export default MemoItem;
