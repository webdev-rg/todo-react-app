import React from "react";
import { CompletedTodoCard } from "./CompletedTodoCard";

export const Completed = ({ completedTodo, deleteCompletedTodo }) => {
  return (
    <>
      <header className="w-full sm:flex sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">
            {completedTodo.length === 0 ? (
              <>
                <span className="text-todo-700">0</span>{" "}
                <span>task completed</span>
              </>
            ) : (
              <>
                <span className="text-todo-700">{completedTodo.length} </span>
                <span>task{completedTodo.length > 1 ? "s" : ""} completed</span>
              </>
            )}
          </h2>
        </div>
      </header>
      <main className="w-full grid lg:grid-cols-2 grid-cols-1 gap-5 overflow-y-auto">
        {completedTodo.map((item) => {
          return (
            <CompletedTodoCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              date={item.date}
              time={item.time}
              deleteTodo={deleteCompletedTodo}
            />
          );
        })}
      </main>
    </>
  );
};
