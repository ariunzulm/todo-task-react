import { toast } from "react-toastify";
export default function SummarySection({ lists, setLists }) {
  const updateCount = () => {
    const completedTasks = lists.filter((list) => !list.isComplete);
    return completedTasks.length;
  };

  const clearCompleted = () => {
    toast.info("Completed Items Deleted", { position: "top-right" });
    setLists(lists.filter((list) => !list.isComplete));
  };

  return (
    <div>
      <div className="flex justify-between p-2">
        <p className="text-gray-500 text-sm">
          {updateCount()} of {lists.length} tasks completed
        </p>
        <button
          onClick={clearCompleted}
          className="cursor-pointer font-medium topacity-0 group-hover:opacity-100 text-[#EF4444] text-sm px-3 py-1.5 bg-[#FEF2F2] hover:bg-[#FEE2E2] rounded-sm transition-opacity"
        >
          Clear completed
        </button>
      </div>
    </div>
  );
}
