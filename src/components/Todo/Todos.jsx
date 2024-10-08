import { useState } from "react";
import logo from "../../assets/images/logo.svg";
import { CgMenuRight } from "react-icons/cg";

import { LiaTimesSolid } from "react-icons/lia";
import { LuLayoutDashboard, LuTrash2 } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";

import { AllTodo } from "./AllTodo";
import { Completed } from "../CompletedTodo/Completed";
import { Deleted } from "../DeletedTodo/Deleted";
import { Starred } from "../StarredTodo/Starred";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Todos = () => {
  const sectionHeight = {
    height: "calc(100vh - 80px)",
  };

  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive((prevActive) => !prevActive);
  };

  const [isForm, setIsForm] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isStarred, setIsStarred] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [todo, setTodo] = useState([]);
  const [deletedTodo, setDeletedTodo] = useState([]);
  const [completedTodo, setCompletedTodo] = useState([]);
  const [starredTodo, setStarredTodo] = useState([]);

  const handleClearInputs = () => {
    setTitle("");
    setDescription("");
  };

  const handleIsFormActive = () => {
    setIsForm(true);
  };
  const handleIsFormDisable = () => {
    setIsForm(false);
    setIsUpdate(false);
    handleClearInputs();
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

  const handleDeleteTodo = (id) => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      const deletedItem = todo.find((item) => item.id === id);

      if (deletedItem) {
        setDeletedTodo((prevDeletedTodos) => {
          const newDeletedTodos = [deletedItem, ...prevDeletedTodos];
          return newDeletedTodos;
        });

        const updatedTodos = todo.filter((item) => item.id !== id);
        setTodo(updatedTodos);

        if (deletedItem.isStarred) {
          setStarredTodo((prevStarredTodos) =>
            prevStarredTodos.filter((item) => item.id !== id)
          );
        }
      } else {
        console.error("Todo not found!");
      }
      toast.warn("One task deleted", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleRestoreDeletedTodo = (id) => {
    const restoredItem = deletedTodo.find((item) => item.id === id);

    if (restoredItem) {
      setTodo([restoredItem, ...todo]);
      setDeletedTodo(deletedTodo.filter((item) => item.id !== id));

      if (restoredItem.isStarred) {
        setStarredTodo((prevStarredTodos) => [
          restoredItem,
          ...prevStarredTodos,
        ]);
      }
      toast.success("Task restored", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    } else {
      console.error("Error");
    }
  };

  const handleDeletePermanantly = (id) => {
    if (
      window.confirm("Are you sure you want to permanantly delete this todo?")
    ) {
      const deletedItem = deletedTodo.find((item) => item.id === id);

      if (deletedItem) {
        setDeletedTodo((prevDeletedTodos) => {
          return prevDeletedTodos.filter((item) => item.id !== id);
        });
      } else {
        console.error("Todo not found!");
      }

      toast.error("Task deleted permanantly", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleEmptyTrash = () => {
    if (deletedTodo.length > 0) {
      if (window.confirm("Are you sure you empty trash?")) {
        setCompletedTodo((prevCompletedTodos) => {
          prevCompletedTodos.filter((item) => item.id !== id);
        });
        setDeletedTodo([]);
        toast.info("All tasks deleted", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      alert(`There are ${deletedTodo.length} task in trash`);
    }
  };

  const handleCompletedTodo = (id) => {
    const completedTodo = todo.find((item) => item.id === id);

    if (completedTodo) {
      setCompletedTodo((prevCompletedTodos) => [
        ...prevCompletedTodos,
        completedTodo,
      ]);

      if (completedTodo.isStarred) {
        setStarredTodo((prevStarredTodos) =>
          prevStarredTodos.filter((item) => item.id !== id)
        );
      }

      const updatedTodos = todo.filter((item) => item.id !== id);
      setTodo(updatedTodos);

      toast.success("One task completed", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    } else {
      console.error("Todo not found!");
    }
  };

  const handleDeleteCompletedTodo = (id) => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      const deletedItem = completedTodo.find((item) => item.id === id);

      if (deletedItem) {
        setDeletedTodo((prevDeletedTodos) => {
          const newDeletedTodos = [deletedItem, ...prevDeletedTodos];
          return newDeletedTodos;
        });
      }

      const updatedTodos = completedTodo.filter((item) => item.id !== id);
      setCompletedTodo(updatedTodos);

      toast.warn("One task deleted", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleNotCompleted = (id) => {
    const notCompleted = completedTodo.find((item) => item.id === id);

    if (notCompleted) {
      setTodo([notCompleted, ...todo]);

      setCompletedTodo((prevCompletedTodos) =>
        prevCompletedTodos.filter((item) => item.id !== id)
      );

      if (notCompleted.isStarred) {
        setStarredTodo((prevStarredTodos) => [
          notCompleted,
          ...prevStarredTodos,
        ]);
      }

      toast.success("Task restored", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleStarredTodo = (id) => {
    const updatedTodos = todo.map((item) => {
      if (item.id === id) {
        return { ...item, isStarred: !item.isStarred };
      }
      return item;
    });
    setTodo(updatedTodos);

    const newStarredTodos = updatedTodos.filter((item) => item.isStarred);
    setStarredTodo(newStarredTodos);

    toast.info("Task marked as starred", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <ToastContainer />
      <header className="w-full h-20 px-5 flex items-end justify-between bg-todo-20 border-b-[1px] border-slate-400">
        <div className="h-20 flex items-center">
          <img className="w-28" src={logo} alt="logo" />
        </div>
        <div className="h-20 md:hidden flex items-center">
          <CgMenuRight
            className="text-3xl cursor-pointer"
            onClick={toggleActive}
          />
        </div>
      </header>
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
                completeTodo={handleCompletedTodo}
                starredTodo={handleStarredTodo}
                editTodo={handleEditTodo}
                deleteTodo={handleDeleteTodo}
                isStarred={isStarred}
              />
            )}
            {activeTab === "starred" && (
              <Starred
                starredTodos={starredTodo}
                completeTodo={handleCompletedTodo}
                starredTodo={handleStarredTodo}
                editTodo={handleEditTodo}
                deleteTodo={handleDeleteTodo}
                isStarred={isStarred}
              />
            )}
            {activeTab === "completed" && (
              <Completed
                completedTodo={completedTodo}
                deleteCompletedTodo={handleDeleteCompletedTodo}
                notCompleted={handleNotCompleted}
              />
            )}
            {activeTab === "deleted" && (
              <Deleted
                deletedTodo={deletedTodo}
                deletePermanantly={handleDeletePermanantly}
                restoreTodo={handleRestoreDeletedTodo}
                emptyTrash={handleEmptyTrash}
              />
            )}
          </div>
        </div>
      </section>
      {isForm ? (
        <TodoForm
          closeForm={handleIsFormDisable}
          clearForm={handleClearInputs}
          isUpdate={isUpdate}
          setIsUpdate={setIsUpdate}
          todo={todo}
          setTodo={setTodo}
          setIsForm={setIsForm}
          id={id}
          title={title}
          setTitle={setTitle}
          desc={description}
          setDesc={setDescription}
        />
      ) : null}
    </>
  );
};

//? Add Todo Form

const TodoForm = ({
  closeForm,
  clearForm,
  isUpdate,
  setIsUpdate,
  todo,
  setTodo,
  setIsForm,
  id,
  title,
  setTitle,
  desc,
  setDesc,
}) => {
  const date = new Date();

  const handleSaveTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: todo.length + 1,
      title: title,
      description: desc,
      date: `${date.getFullYear()}-${
        date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()
      }-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`,
      time: `${date.getHours()}-${
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
      }-${
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
      }`,
      isStarred: false,
    };

    const saveTodo = [...todo, newTodo];
    setTodo(saveTodo);
    setIsForm(false);
    clearForm();

    toast.success("One task added", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const todoIndex = todo
      .map((item) => {
        return item.id;
      })
      .indexOf(id);

    const updateTodo = [...todo];
    updateTodo[todoIndex].title = title;
    updateTodo[todoIndex].description = desc;
    updateTodo[todoIndex].date = `${date.getFullYear()}-${
      date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()
    }-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
    updateTodo[todoIndex].time = `${date.getHours()}-${
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
    }-${date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()}`;

    setTodo(updateTodo);
    setIsUpdate(false);
    setIsForm(false);
    clearForm();

    toast.success("Task updated successfully", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <section className="absolute top-0 left-0 w-full h-screen md:p-20 py-20 sm:px-10 px-5 bg-todo-blur-bg z-20">
        <div className="md:w-[700px] bg-todo-20 p-7 rounded-2xl mx-auto relative">
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold text-todo-700">
              Add New Task
            </h1>
            <div
              className="w-10 h-10 flex items-center justify-center bg-todo-50 rounded-xl cursor-pointer hover:border hover:border-todo-700 transition-all duration-100"
              onClick={closeForm}
            >
              <LiaTimesSolid className="text-xl text-slate-800" />
            </div>
          </div>

          <form>
            <div className="flex flex-col gap-7 mt-7">
              <div className="w-full">
                <label
                  htmlFor="task-title"
                  className="text-lg font-medium text-slate-900"
                >
                  Title
                </label>
                <input
                  type="text"
                  className="w-full h-16 px-3 mt-3 text-xl font-semibold placeholder:font-normal text-slate-900 focus:bg-todo-50 border rounded-2xl border-slate-400 focus:border-todo-700 valid:border-b valid:border-todo-700 transition-all duration-200"
                  placeholder="Task title"
                  id="task-title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  autoFocus
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="task-description"
                  className="text-lg font-medium text-slate-900"
                >
                  Description
                </label>
                <textarea
                  className="w-full h-32 px-3 py-2 mt-3 text-slate-900 border border-slate-400 focus:bg-todo-50 focus:border-todo-700 valid:border-b valid:border-todo-700 rounded-2xl resize-none transition-all duration-200"
                  placeholder="Task description"
                  id="task-description"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>

            <div className="w-full flex justify-end gap-3 mt-7">
              {!isUpdate ? (
                <button
                  className="w-32 h-10 text-todo-20 text-xl bg-todo-700 hover:bg-todo-600 rounded-lg transition-all duration-200"
                  onClick={handleSaveTodo}
                >
                  Save
                </button>
              ) : (
                <button
                  className="w-32 h-10 text-todo-20 text-xl bg-todo-700 hover:bg-todo-600 rounded-lg transition-all duration-200"
                  type="button"
                  onClick={handleUpdate}
                >
                  Update
                </button>
              )}

              <button
                className="w-32 h-10 text-todo-20 text-xl bg-red-700 hover:bg-red-600 rounded-lg transition-all duration-200"
                type="button"
                onClick={clearForm}
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
