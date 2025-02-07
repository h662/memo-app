import { Link } from "react-router-dom";

function MemoCard({ memoId }) {
  return (
    <Link
      to={`/memo/${memoId}`}
      className="p-4 border rounded shadow hover:bg-gray-100 transition max-w-3xl"
    >
      <h3 className="font-bold text-lg truncate">Sample Memo title</h3>
      <p className="text-gray-600 text-sm truncate">Sample Memo Content...</p>
    </Link>
  );
}

export default MemoCard;
