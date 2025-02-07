function MemoFilter({ onFilter }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by title"
        className="w-full p-2 border rounded"
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}

export default MemoFilter;
