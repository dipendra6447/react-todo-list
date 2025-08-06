import { useRef } from "react";
import { useContext } from "react";
import { TodoItemContext } from "../store/todo-item-store";
export default function TodoInput() {
  const { handleAddTodo } = useContext(TodoItemContext);
  const nameInput = useRef();
  const dateInput = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameInput.current.value && dateInput.current.value) {
      handleAddTodo(nameInput.current.value, dateInput.current.value);
      nameInput.current.value = "";
      dateInput.current.value = "";
    }
  };
  return (
    <>
      <form className="row" onSubmit={handleSubmit}>
        <div className="col-lg-5">
          <input
            type="text"
            placeholder="Add a todo"
            className="w-100 p-2"
            ref={nameInput}
          />
        </div>
        <div className="col-lg-5">
          <input type="date" className="w-100 p-2" ref={dateInput} />
        </div>
        <div className="col-lg-2">
          <button className="btn btn-primary" type="submit">
            Add Todo
          </button>
        </div>
      </form>
    </>
  );
}
