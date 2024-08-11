import { TodoCard } from "./TodoCard";

export const AllTodo = ({ todo, setTodo, handleIsFormActive }) => {
  return (
    <>
      <header className="w-full flex justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">
            You've{" "}
            <span className="text-todo-700">
              {todo.length} Task{todo.length > 1 ? "s" : ""}
            </span>{" "}
            Todo
          </h2>
        </div>
        <div>
          <button
            className="w-40 h-12 bg-todo-700 text-todo-20 rounded-lg font-medium hover:bg-todo-600 transition-all duration-200"
            onClick={handleIsFormActive}
          >
            Add New Todo
          </button>
        </div>
      </header>
      <main className="w-full grid lg:grid-cols-2 grid-cols-1 gap-5 overflow-y-auto">
        {todo.map((item) => {
          return (
            <TodoCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              date={item.date}
              time={item.time}
            />
          );
        })}
      </main>
    </>
  );
};
