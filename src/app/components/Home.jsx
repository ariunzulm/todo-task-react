import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import Footer from "./FooterSection";
import InputBar from "./InputBar";
import FilterableCategory from "./FilterableCategory";
import SummarySection from "./SummarySection";
import ListsTable from "./ListsTable";

export default function Home() {
  const [value, setValue] = useState("");
  const [lists, setLists] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const addTasks = () => {
    if (!value) {
      toast.error("Pleave Provide Value", { position: "top-right" });
      return;
    } else {
      toast.success("Item Added To The List", { position: "top-right" });
    }
    if (value.trim() !== "") {
      setLists((prevLists) => [
        ...prevLists,
        { task: value, id: Date.now(), isCompleted: false },
      ]);
      setValue("");
    }
  };

  return (
    <div className="bg-white p-4 shadow-2xl gap-5 flex flex-col rounded-xl">
      <h1 className="capitalize flex justify-center items-center text-xl font-semibold tracking-wider">
        to do list
      </h1>

      <InputBar value={value} handleChange={handleChange} addTasks={addTasks} />

      <FilterableCategory onChangeFilter={setFilter} />

      <ListsTable lists={lists} setLists={setLists} filter={filter} />

      <SummarySection lists={lists} setLists={setLists} />

      <Footer />
      <ToastContainer />
    </div>
  );
}
