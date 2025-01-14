import React from "react";

function MemoItem({ children, index, setSelectedMemoIndex }) {
  return (
    <div
      onClick={() => {
        console.log("clicked!");
        setSelectedMemoIndex(index);
      }}
    >
      {children}
    </div>
  );
}

export default MemoItem;
