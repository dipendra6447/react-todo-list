import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useState } from "react";
function App() {
  const [todoList, setTodoList] = useState([]);
  const handleAddTodo = (name, date) => {
    setTodoList([...todoList, { name, date }]);
  };
  const handleDeleteTodo = (todoIndex) => {
    const upatedTodoList = todoList.filter((todo) => todo.name !== todoIndex);
    setTodoList(upatedTodoList);
  };
  return (
    <>
      <div className="todo_app_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center mt-5 mb-4">My Todo List</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <TodoInput clickOnAddTodo={handleAddTodo} />
              <TodoList todos={todoList} clickOnDeleteTodo={handleDeleteTodo} />
              <p className="text-center mt-4">
                {todoList.length === 0
                  ? `Click on "Add Todo" to add a task`
                  : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
