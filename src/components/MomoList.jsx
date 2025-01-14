import React from "react";
import MemoItem from "./MemoItem";

function MomoList({ memos, selectedMemoIndex, setSelectedMemoIndex, deleteMemo }) {
  return (
    <div>
      {memos.map((memo, index) => (
        <MemoItem
          key={index}
          onClick={() => {
            setSelectedMemoIndex(index);
          }}
          isSelected={index === selectedMemoIndex}
          onClickDelete={(e) => {
            deleteMemo(index);
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <h3>{memo.title}</h3>
        </MemoItem>
      ))}
    </div>
  );
}

export default MomoList;
