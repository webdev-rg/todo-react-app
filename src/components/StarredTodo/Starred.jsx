export const Starred = ({ starredTodo }) => {
  return (
    <>
      {starredTodo.length > 0 ? (
        starredTodo.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))
      ) : (
        <p>No starred todos.</p>
      )}
    </>
  );
};
