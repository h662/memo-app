import MemoCard from "./MemoCard";
import MemoFilter from "./MemoFilter";

function MemoList() {
  return (
    <div className="max-w-3xl mx-auto mt-10">
      <MemoFilter />
      <div className="grid gap-4 mt-4">
        <MemoCard memoId={1} />
        <MemoCard memoId={2} />
        <MemoCard memoId={3} />
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">
        새 메모 추가
      </button>
    </div>
  );
}

export default MemoList;
