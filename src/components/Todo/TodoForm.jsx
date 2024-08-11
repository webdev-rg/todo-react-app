import React from "react";

export const TodoForm = () => {
  return (
    <>
      <div
        className={`w-full h-screen flex items-center justify-center bg-todo-20 absolute z-20`}
      >
        <div className="w-[500px] p-5 bg-todo-20 border border-todo-700 rounded-2xl flex flex-col gap-3">
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
                name="title"
                id="todo-title"
                placeholder="Enter Title"
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
                name="desc"
                id="todo-title"
                placeholder="Enter Description"
                required
              ></textarea>
            </div>
            <div className="w-full flex justify-center">
              <button
                className="w-32 h-10 text-todo-20 text-xl bg-todo-700 rounded-lg"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
