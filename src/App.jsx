import React, { useCallback } from "react";
import { useState } from "react";
import MemoContainer from "./components/MemoContainer";
import SideBar from "./components/SideBar";
import { setItem, getItem } from "./lib/storage";
import debounce from "lodash.debounce";

const debouncedSetItem = debounce(setItem, 5000); // setItem을 5초마다 실행

import "./App.css";

function App() {
  const [memos, setMemos] = useState(getItem("memos") || []);
  //const [memos, setMemos] = useState(JSON.parse(localStorage.getItem("memo")) || []);
  // const [memos, setMemos] = useState([
  //   {
  //     title: "Memo 1",
  //     content: "This is Memo 1",
  //     createAt: 1736757577410, // new Date().getTime()
  //     updateAt: 1736757577410, // new Date().getTime()
  //   },
  //   {
  //     title: "Memo 2",
  //     content: "This is Memo 2",
  //     createAt: 1736757643573, // new Date().getTime()
  //     updateAt: 1736757643573, // new Date().getTime()
  //   },
  // ]);

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  // const setMemo = (newMemo) => {
  //   memos[selectedMemoIndex] = newMemo; // 현제 배열에 새로운 배열을 바로 넣어주면 불변성이 훼손됨
  //   console.log("memos : ", memos);
  //   // setMemos(memos); // useState(0) 현제값이 변경이 안되서 리랜더링이 일어나지 않음
  //   setMemos([...memos]); // 새로운 reference를 만들어서 리랜더링이 일어나도록 함
  // };

  const setMemo = useCallback(
    (newMemo) => {
      // setMemos(newMemos); // newMemos 바뀐 레퍼런스를 넣어주면 리랜더링이 일어남
      setMemos((memos) => {
        const newMemos = [...memos];
        newMemos[selectedMemoIndex] = newMemo;
        debouncedSetItem("memos", newMemos);
        return newMemos;
      });
    },
    [selectedMemoIndex]
  );

  const addMemo = useCallback(() => {
    // setMemos(newMemos);
    setMemos(() => {
      const now = new Date().getTime();
      const newMemos = [
        ...memos,
        {
          title: "New Memo",
          content: "This is New Memo",
          createAt: now,
          updateAt: now,
        },
      ];
      debouncedSetItem("memos", newMemos);
      return newMemos;
    });
    setSelectedMemoIndex(memos.length); // isSelected(index = selectedMemoIndex)면 .selected
  }, [memos]);

  const deleteMemo = useCallback(
    (index) => {
      // setMemos(newMemos);
      setMemos(() => {
        const newMemos = [...memos];
        newMemos.splice(index, 1);
        debouncedSetItem("memos", newMemos);
        return newMemos;
      });
      if (index === selectedMemoIndex) {
        setSelectedMemoIndex(0);
      }
    },
    [selectedMemoIndex]
  );

  return (
    <>
      <div className="App">
        <SideBar
          memos={memos}
          selectedMemoIndex={selectedMemoIndex}
          setSelectedMemoIndex={setSelectedMemoIndex}
          addMemo={addMemo}
          deleteMemo={deleteMemo}
        />
        <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
      </div>
    </>
  );
}

export default App;
