export default function FilterableCategory({ onChangeFilter }) {
  return (
    <nav className="flex gap-1 text-xs">
      <button
        onClick={() => onChangeFilter("all")}
        className="py-2 px-4 bg-[#F3F4F6] rounded-md hover:bg-[#3C82F6] hover:text-white cursor-pointer "
      >
        All
      </button>
      <button
        onClick={() => onChangeFilter("active")}
        className="py-2 px-4 bg-[#F3F4F6] rounded-md hover:bg-[#3C82F6] hover:text-white cursor-pointer "
      >
        Active
      </button>
      <button
        onClick={() => onChangeFilter("completed")}
        className="py-2 px-4 bg-[#F3F4F6] rounded-md hover:bg-[#3C82F6] hover:text-white cursor-pointer "
      >
        Completed
      </button>
    </nav>
  );
}
