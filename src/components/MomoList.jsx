import React from "react";
import MemoItem from "./MemoItem";

function MomoList({ memos, setSelectedMemoIndex }) {
  return (
    <div>
      {memos.map((memo, index) => (
        <MemoItem key={index} index={index} setSelectedMemoIndex={setSelectedMemoIndex}>
          {memo.title}
        </MemoItem>
      ))}
    </div>
  );
}

export default MomoList;
