import { useContext } from "react";
import { TodoItemContext } from "../store/todo-item-store";
export default function ErrorMessage() {
  const { todoList } = useContext(TodoItemContext);
  return (
    <>
      <p className="text-center mt-4">
        {todoList.length === 0 ? `Click on "Add Todo" to add a new task` : ""}
      </p>
    </>
  );
}
