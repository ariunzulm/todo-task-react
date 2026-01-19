export default function Lists({ lists, setLists }) {
  const deleteButton = (id) => {
    setLists(lists.filter((list) => id !== list.id));
  };
  const toggleList=(id)=>{
if(id==)
  }
  return (
    <div className="w-full py-4">
      <section className="flex flex-col w-full">
        {lists.length > 0 ? (
          <ul className="flex flex-col gap-2 w-full">
            {lists.map((list, index) => (
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
                    className="w-4 h-4 border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <p className="text-gray-700">{list.task}</p>
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
        ) : (
          <p className="text-[#6B7280] text-sm">No tasks yet. Add one above!</p>
        )}
      </section>
    </div>
  );
}
