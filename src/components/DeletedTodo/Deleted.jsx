import React from "react";

export const Deleted = ({ deletedTodo, restoreTodo }) => {
  return (
    <>
      {deletedTodo.map((item) => {
        return <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <button onClick={() => restoreTodo(item.id)}>Restore Todo</button>
        </div>
      })}
    </>
  );
};
