import React from "react";
import { GoTrash } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";

export const CompletedTodoCard = ({ id, title, description, date, time, deleteTodo, notCompleted }) => {
  return (
    <div className="w-full p-5 flex flex-col gap-5 bg-todo-20 border border-slate-300 rounded-2xl relative">
      <div className="title">
        <h2 className="text-xl font-semibold text-slate-950">{title}</h2>
      </div>
      <div className="description w-full h-28 overflow-auto">
        <p className="text-base text-slate-700">{description}</p>
      </div>
      <div className="w-full flex flex-col gap-3">
        <span className="text-slate-700 text-sm">
          Date - {date} - Time - {time}
        </span>
        <div className="mt-2 flex items-center flex-wrap gap-2 sm:m-0">
          <button className="px-4 py-2 flex items-center gap-1 bg-todo-700 rounded-md text-todo-20 hover:bg-todo-600 transition-all duration-200"
            onClick={() => notCompleted(id)}
          >
            <IoCloseOutline className="text-xl" />
            Not Completed
          </button>
          <button className="px-4 py-2 flex items-center gap-1 bg-red-700 rounded-md text-todo-20 hover:bg-red-600 transition-all duration-200"
          onClick={() => deleteTodo(id)}
          >
            <GoTrash />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
