import React from "react";

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
