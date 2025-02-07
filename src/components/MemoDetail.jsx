import { useParams, useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

function MemoDetail() {
  const { id } = useParams();

  const [memos, setMemos] = useLocalStorage("memos", []);
  const memo = memos.find((memo) => memo.id === Number(id));

  const navigate = useNavigate();

  const updateMemo = (field, value) => {
    setMemos((prev) =>
      prev.map((m) => (m.id === Number(id) ? { ...m, [field]: value } : m))
    );
  };

  const deleteMemo = () => {
    setMemos((prev) => prev.filter((m) => m.id !== Number(id)));
    navigate("/");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <input
        type="text"
        value={memo?.title || ""}
        onChange={(e) => updateMemo("title", e.target.value)}
        placeholder="Enter memo title"
        className="w-full p-2 rounded text-xl font-bold mb-4"
      />
      <textarea
        value={memo?.content || ""}
        onChange={(e) => updateMemo("content", e.target.value)}
        placeholder="Enter memo content"
        className="w-full p-2 border rounded h-48 resize-none"
      />
      <div className="flex gap-4 mt-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={() => navigate("/")}
        >
          저장
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={deleteMemo}
        >
          삭제
        </button>
      </div>
    </div>
  );
}

export default MemoDetail;
