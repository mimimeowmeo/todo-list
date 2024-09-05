const Item = ({ item, onComplete, onDelete }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between mb-4 p-4 border rounded-lg bg-white shadow-sm">
      <div className="flex items-center mb-2 mr-0 sm:mr-4 sm:mb-0">
        <span
          className={`mr-4 text-lg ${
            item.completed ? "text-green-500" : "text-yellow-500"
          }`}
        >
          {item.completed ? "✔️" : "😄"}
        </span>
        <span className="text-lg">{item.value}</span>
      </div>
      <div className="flex space-x-2">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition disabled:bg-green-200 disabled:cursor-not-allowed"
          onClick={(e) => {
            e.preventDefault();
            onComplete(item.id);
          }}
          disabled={item.completed}
        >
          Complete
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          onClick={(e) => {
            e.preventDefault();
            onDelete(item.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Item;
