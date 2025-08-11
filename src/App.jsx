import ErrorMessage from "./components/ErrorMessage";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoItemContextProvider from "./store/todo-item-store";

function App() {
  return (
    <>
      <TodoItemContextProvider>
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
                <ErrorMessage />
              </div>
            </div>
          </div>
        </div>
      </TodoItemContextProvider>
    </>
  );
}

export default App;
