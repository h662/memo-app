import { Link } from "react-router-dom";

function MemoCard({ memoId, title, content }) {
  return (
    <Link
      to={`/memo/${memoId}`}
      className="p-4 border rounded shadow hover:bg-gray-100 transition max-w-3xl"
    >
      <h3 className="font-bold text-lg truncate">{title}</h3>
      <p className="text-gray-600 text-sm truncate">{content}</p>
    </Link>
  );
}

export default MemoCard;
