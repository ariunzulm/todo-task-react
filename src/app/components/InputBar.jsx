export default function InputBar({ value, handleChange, addTasks }) {
  return (
    <section className="flex gap-2.5 flex-row">
      <input
        className=" border border-gray-200 bg-white py-2 px-4 rounded-md w-70"
        type="text"
        placeholder="Add a new task..."
        value={value}
        onChange={handleChange}
      />
      <button
        className="bg-[#3C82F6] py-2 px-4 rounded-md text-white hover:bg-blue-700"
        type="submit"
        onClick={addTasks}
      >
        Add
      </button>
    </section>
  );
}
