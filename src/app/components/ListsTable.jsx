import List from "./List";

export default function Lists({ lists, setLists, filter }) {
  const deleteButton = (deleteId) => {
    setLists(lists.filter((list) => deleteId !== list.id));
  };
  const toggleList = (toggleId) => {
    const newList = lists.map((list) => {
      if (list.id !== toggleId) {
        return list;
      } else {
        return { ...list, isComplete: !list.isComplete };
      }
    });
    setLists(newList);
  };

  console.log(lists.length);
  return (
    <div className="w-full py-4">
      <section className="flex flex-col w-full p-2">
        {lists.length > 0 ? (
          <List
            lists={lists}
            toggleList={toggleList}
            deleteButton={deleteButton}
            filter={filter}
          />
        ) : (
          <p className="text-[#6B7280] text-sm">No tasks yet. Add one above!</p>
        )}
      </section>
    </div>
  );
}
