import React from "react";

export const Completed = ({ completedTodo }) => {
  return (
    <>
      {completedTodo.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        );
      })}
    </>
  );
};
