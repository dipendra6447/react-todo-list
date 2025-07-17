import { useState } from "react";
export default function TodoInput({ clickOnAddTodo }) {
  const [TodoName, setTodoName] = useState();
  const addTodoName = (e) => {
    setTodoName(e.target.value);
  };
  const [TodoDate, setTodoDate] = useState();
  const addTodoDate = (e) => {
    setTodoDate(e.target.value);
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-5">
          <input
            type="text"
            placeholder="Add a todo"
            className="w-100 p-2"
            onChange={addTodoName}
          />
        </div>
        <div className="col-lg-5">
          <input type="date" className="w-100 p-2" onChange={addTodoDate} />
        </div>
        <div className="col-lg-2">
          <button
            className="btn btn-primary"
            onClick={() => clickOnAddTodo(TodoName, TodoDate)}
          >
            Add Todo
          </button>
        </div>
      </div>
    </>
  );
}
