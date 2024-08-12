import React from "react";
import { DeletedTodoCard } from "./DeletedTodoCard";

export const Deleted = ({ deletedTodo, restoreTodo, emptyTrash }) => {
  return (
    <>
      <header className="w-full sm:flex sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">
            {deletedTodo.length > 0 ? (
              <span className="text-todo-700">
                {deletedTodo.length} Todo{deletedTodo.length > 1 ? "s" : ""}{" "}
              </span>
            ) : (
              <span>No Todos </span>
            )}
            in Trash
          </h2>
        </div>
        <div className="mt-3 sm:mt-0">
          <button
            className="w-40 h-12 bg-todo-700 text-lg text-todo-20 rounded-lg font-medium hover:bg-todo-600 transition-all duration-200"
            onClick={emptyTrash}
          >
            Empty Trash
          </button>
        </div>
      </header>
      <main className="w-full grid lg:grid-cols-2 grid-cols-1 gap-5 overflow-y-auto">
        {deletedTodo.map((item) => {
          return (
            <DeletedTodoCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              date={item.date}
              time={item.time}
              restoreTodo={restoreTodo}
            />
          );
        })}
      </main>
    </>
  );
};
