export default function List({ lists, toggleList, deleteButton, filter }) {
  const filteredList = lists.filter((listItem) => {
    if (filter === "active") {
      return !listItem.isComplete;
    }

    if (filter === "completed") {
      return listItem.isComplete;
    }
    if (filter === "all") return listItem;
  });

  return (
    <ul className="flex flex-col gap-2 w-full">
      {filteredList.map((list, index) => (
        <li
          className="group flex items-center justify-between bg-[#F9FAFB] hover:bg-white hover:shadow-sm p-4 rounded-lg border border-transparent hover:border-gray-200 transition-all "
          key={index}
        >
          <div className="flex items-center gap-3">
            <input
              onChange={() => {
                toggleList(list.id);
              }}
              type="checkbox"
              className="w-5 h-5 border-bg-700 bg-blue-600 active:bg-blue-500 cursor-pointer"
            />
            <span
              className={list.isComplete ? "text-gray-700 line-through" : ""}
            >
              {list.task}
            </span>
          </div>
          <button
            onClick={() => deleteButton(list.id)}
            className="topacity-0 group-hover:opacity-100 text-[#EF4444] text-xs font-medium px-3 py-1.5 bg-[#FEF2F2] hover:bg-[#FEE2E2] rounded-sm transition-opacity"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
