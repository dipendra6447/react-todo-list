import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { TodoItemContext } from "./store/todo-item-store";
import { useReducer } from "react";
const todoItemReducer = (curretState, action) => {
  let newTodoItem = curretState;
  if (action.type === "ADD_TODO") {
    newTodoItem = [
      ...curretState,
      { name: action.payload.name, date: action.payload.date },
    ];
  } else if (action.type === "DELETE_TODO") {
    newTodoItem = curretState.filter(
      (todo) => todo.name !== action.payload.todoIndex
    );
  }
  return newTodoItem;
};
function App() {
  const [todoList, itemDispatch] = useReducer(todoItemReducer, []);
  const handleAddTodo = (name, date) => {
    const newItemAddAction = {
      type: "ADD_TODO",
      payload: { name, date },
    };
    itemDispatch(newItemAddAction);
  };
  const handleDeleteTodo = (todoIndex) => {
    const newItemDeleteAction = {
      type: "DELETE_TODO",
      payload: { todoIndex },
    };
    itemDispatch(newItemDeleteAction);
  };
  return (
    <>
      <TodoItemContext.Provider
        value={{ todoList, handleAddTodo, handleDeleteTodo }}
      >
        <div className="todo_app_wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="text-center mt-5 mb-4">My Todo List</h1>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <TodoInput />
                <TodoList />
                <p className="text-center mt-4">
                  {todoList.length === 0
                    ? `Click on "Add Todo" to add a task`
                    : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </TodoItemContext.Provider>
    </>
  );
}

export default App;
