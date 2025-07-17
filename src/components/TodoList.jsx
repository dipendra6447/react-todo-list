export default function TodoList({ todos, clickOnDeleteTodo }) {
  return (
    <>
      {todos.map((todo, index) => (
        <div className="row mt-4" key={index}>
          <div className="col-lg-1">
            <p className="fw-bold p-2 m-0">{index + 1}</p>
          </div>
          <div className="col-lg-5">
            <p className="fw-bold p-2 m-0">{todo.name}</p>
          </div>
          <div className="col-lg-4">
            <p className="fw-bold p-2 m-0">{todo.date}</p>
          </div>
          <div className="col-lg-2">
            <button
              className="btn btn-danger"
              onClick={() => clickOnDeleteTodo(todo.name)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
