"use client";

import { useState } from "react";
import Footer from "./Footer";
import Lists from "./Lists";

export default function Home() {
  const [value, setValue] = useState("");
  const [lists, setLists] = useState([]);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  console.log(lists);

  const addTasks = () => {
    if (value.trim() !== "") {
      setLists((prevLists) => [
        ...prevLists,
        { task: value, id: Date.now(), isCompleted: false },
      ]);
      setValue("");
    }
  };
  const allButton = () => {
    setLists(setLists);
  };
  const activeButton = () => {
    list.isCompleted && setLists(lists.task);
  };
  const completedButton = () => {
    !list.isCompleted && setLists(lists.task);
  };
  return (
    <div className="bg-white p-4 shadow-2xl gap-5 flex flex-col rounded-xl">
      <h1 className="capitalize flex justify-center items-center text-xl font-semibold tracking-wider">
        to do list
      </h1>
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

      <nav className="flex gap-1 text-xs">
        <button
          onClick={allButton}
          className="py-1 px-3 bg-[#F3F4F6] rounded-md hover:bg-[#3C82F6] hover:text-white cursor-pointer "
        >
          All
        </button>
        <button
          onClick={activeButton}
          className="py-1 px-3 bg-[#F3F4F6] rounded-md hover:bg-[#3C82F6] hover:text-white cursor-pointer "
        >
          Active
        </button>
        <button
          onClick={completedButton}
          className="py-1 px-3 bg-[#F3F4F6] rounded-md hover:bg-[#3C82F6] hover:text-white cursor-pointer "
        >
          Completed
        </button>
      </nav>

      <section>
        <Lists lists={lists} setLists={setLists} />
      </section>

      <div>
        <Footer />
      </div>
    </div>
  );
}
