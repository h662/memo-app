function MemoDetail() {
  return (
    <div className="max-w-3xl mx-auto mt-10">
      <input
        type="text"
        placeholder="Enter memo title"
        className="w-full p-2 rounded text-xl font-bold mb-4"
      />
      <textarea
        placeholder="Enter memo content"
        className="w-full p-2 border rounded h-48 resize-none"
      />
      <div className="flex gap-4 mt-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          저장
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          삭제
        </button>
      </div>
    </div>
  );
}

export default MemoDetail;
