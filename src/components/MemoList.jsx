import { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import MemoCard from "./MemoCard";
import MemoFilter from "./MemoFilter";

function MemoList() {
  const [memos, setMemos] = useLocalStorage("memos", []);
  const [keyword, setKeyword] = useState("");

  const filteredMemos = memos.filter((memo) =>
    memo.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const addMemo = () => {
    const newMemo = { id: Date.now(), title: "New Memo", content: "" };
    setMemos([...memos, newMemo]);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <MemoFilter onFilter={setKeyword} />
      <div className="grid gap-4 mt-4">
        {filteredMemos.map((memo) => (
          <MemoCard
            key={memo.id}
            memoId={memo.id}
            title={memo.title}
            content={memo.content}
          />
        ))}
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
        onClick={addMemo}
      >
        새 메모 추가
      </button>
    </div>
  );
}

export default MemoList;
