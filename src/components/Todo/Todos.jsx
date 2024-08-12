import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { LuLayoutDashboard, LuTrash2 } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";

import { AllTodo } from "./AllTodo";
import { Completed } from "./Completed";
import { Deleted } from "./Deleted";
import { Starred } from "./Starred";

export const Todos = ({ active, setActive }) => {
  const sectionHeight = {
    height: "calc(100vh - 80px)",
  };

  const [isForm, setIsForm] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  const handleIsFormActive = () => {
    setIsForm(!isForm);
  };
  const handleIsFormDisable = () => {
    setIsForm(!isForm);
  };

  const date = new Date();

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "First Task",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      date: `${date.getFullYear()}-${
        date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()
      }-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`,
      time: `${date.getHours()}-${
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
      }-${
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
      }`,
    },
  ]);

  const handleClearInputs = () => {
    setTitle("");
    setDescription("");
  }

  const handleSaveTodo = (e) => {
    e.preventDefault();

    const saveTodo = [...todo];
    const newTodo = {
      id: todo.length + 1,
      title: title,
      description: description,
      date: `${date.getFullYear()}-${
        date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()
      }-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`,
      time: `${date.getHours()}-${
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
      }-${
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
      }`,
    };

    saveTodo.push(newTodo);
    setTodo(saveTodo);
    setIsForm(false);
    handleClearInputs();
  };

  const handleDeleteTodo = (id) => {
    const deleteTodo = todo.filter((item) => item.id !== id);
    setTodo(deleteTodo);
  };

  const handleEditTodo = (id) => {
    setIsForm(true);
    setIsUpdate(true);
    const editTodo = todo.filter((item) => item.id === id);
    if (editTodo.length > 0) {
      setId(id);
      setTitle(editTodo[0].title);
      setDescription(editTodo[0].description);
    }
  };

  const handleUpdate = () => {
    const todoIndex = todo
      .map((item) => {
        return item.id;
      })
      .indexOf(id);

    const updateTodo = [...todo];
    updateTodo[todoIndex].title = title;
    updateTodo[todoIndex].description = description;
    updateTodo[todoIndex].date = `${date.getFullYear()}-${
      date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()
    }-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
    updateTodo[todoIndex].time = `${date.getHours()}-${
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
    }-${date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()}`;

    setTodo(updateTodo);
    setIsUpdate(false);
    setIsForm(false);
    handleClearInputs();
  };

  return (
    <section
      style={sectionHeight}
      className="w-full flex items-center justify-between relative"
    >
      <div
        className={`w-full lg:w-[25%] md:w-[30%] sm:w-[50%] md:absolute md:left-0 absolute z-10 left-[-100%] h-full bg-slate-100 border-r-[1px] border-slate-400 sm:p-5 left-side ${
          active ? "active" : ""
        }`}
      >
        <div className="w-full h-full p-5 flex flex-col gap-2 bg-todo-20 sm:rounded-2xl">
          <ul className="w-full flex flex-col gap-4">
            <li
              className={`w-full flex items-center gap-3 px-5 py-[14px] hover:bg-slate-100 rounded-xl transition-all duration-200 cursor-pointer ${
                activeTab === "all" ? "active" : ""
              }`}
              onClick={() => {
                setActiveTab("all");
                setActive(false);
              }}
            >
              <LuLayoutDashboard className="text-xl" />
              <span className="text-xl font-medium">All Todos</span>
            </li>
            <li
              className={`w-full flex items-center gap-3 px-5 py-[14px] hover:bg-slate-100 rounded-xl transition-all duration-200 cursor-pointer ${
                activeTab === "starred" ? "active" : ""
              }`}
              onClick={() => {
                setActiveTab("starred");
                setActive(false);
              }}
            >
              <FaRegStar className="text-xl" />
              <span className="text-xl font-medium">Starred</span>
            </li>
            <li
              className={`w-full flex items-center gap-3 px-5 py-[14px] hover:bg-slate-100 rounded-xl transition-all duration-200 cursor-pointer ${
                activeTab === "completed" ? "active" : ""
              }`}
              onClick={() => {
                setActiveTab("completed");
                setActive(false);
              }}
            >
              <FaRegCheckCircle className="text-xl" />{" "}
              <span className="text-xl font-medium">Completed</span>
            </li>
            <li
              className={`w-full flex items-center gap-3 px-5 py-[14px] hover:bg-slate-100 rounded-xl transition-all duration-200 cursor-pointer ${
                activeTab === "deleted" ? "active" : ""
              }`}
              onClick={() => {
                setActiveTab("deleted");
                setActive(false);
              }}
            >
              <LuTrash2 className="text-xl" />{" "}
              <span className="text-xl font-medium">Trash</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="lg:w-[75%] lg:absolute lg:left-[25%] md:w-[70%] md:absolute md:left-[30%] w-full h-full bg-slate-100 border-r-[1px] border-slate-300 sm:p-5 right-side">
        <div className="w-full h-full p-5 flex flex-col gap-5 bg-todo-20 sm:rounded-2xl">
          {activeTab === "all" && (
            <AllTodo
              todo={todo}
              setTodo={setTodo}
              handleIsFormActive={handleIsFormActive}
              deleteTodo={handleDeleteTodo}
              editTodo={handleEditTodo}
            />
          )}
          {activeTab === "starred" && <Starred />}
          {activeTab === "completed" && <Completed />}
          {activeTab === "deleted" && <Deleted />}
        </div>
      </div>
      <div
        style={sectionHeight}
        className={`w-full flex items-center justify-center bg-todo-20 absolute z-20 ${
          isForm ? "form-container" : "hidden"
        }`}
      >
        <div className="w-[500px] p-5 bg-todo-20 border border-todo-700 rounded-2xl flex flex-col gap-3 relative">
          <div className="absolute right-5 top-5" onClick={handleIsFormDisable}>
            <LiaTimesSolid className="text-2xl cursor-pointer" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-todo-700">
              Add New Todo
            </h1>
          </div>
          <form className="w-full flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <label className="text-xl font-semibold" htmlFor="todo-title">
                Title
              </label>
              <input
                className="w-full h-14 border px-3 text-lg focus:border-todo-700 valid:border-todo-700 border-slate-400 rounded-xl transition-all duration-200"
                type="text"
                name="todo-title"
                id="todo-title"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-xl font-semibold"
                htmlFor="todo-description"
              >
                Description
              </label>
              <textarea
                className="w-full h-28 border p-3 text-lg focus:border-todo-700 valid:border-todo-700 border-slate-400 rounded-xl transition-all duration-200"
                type="text"
                name="todo-title"
                id="todo-title"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="w-full flex justify-center">
              {!isUpdate ? (
                <button
                  className="w-32 h-10 text-todo-20 text-xl bg-todo-700 rounded-lg"
                  type="submit"
                  onClick={(e) => handleSaveTodo(e)}
                >
                  Save
                </button>
              ) : (
                <button
                  className="w-32 h-10 text-todo-20 text-xl bg-todo-700 rounded-lg"
                  type="submit"
                  onClick={(e) => handleUpdate(e)}
                >
                  Update
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
