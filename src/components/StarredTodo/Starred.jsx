import { TodoCard } from "../Todo/TodoCard";

export const Starred = ({
  starredTodos,
  deleteTodo,
  editTodo,
  completeTodo,
  starredTodo,
  isStarred,
}) => {
  return (
    <>
      <header className="w-full sm:flex sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">
            {starredTodos.length > 0 ? (
              <>
                <span className="text-todo-700">
                  {starredTodos.length} todo{starredTodos.length > 1 ? "s" : ""}
                </span>{" "}
                <span> marked as starred</span>
              </>
            ) : (
              "No todos marked as starred"
            )}
          </h2>
        </div>
      </header>
      <main className="w-full grid lg:grid-cols-2 grid-cols-1 gap-5 overflow-y-auto">
        {starredTodos.map((item) => {
          return (
            <TodoCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              date={item.date}
              time={item.time}
              completeTodo={completeTodo}
              starredTodo={starredTodo}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
              isStarred={item.isStarred}
            />
          );
        })}
      </main>
    </>
  );
};
