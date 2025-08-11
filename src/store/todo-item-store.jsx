import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemContext = createContext({
  todoList: [],
  handleAddTodo: () => {},
  handleDeleteTodo: () => {},
});

const todoItemReducer = (curretState, action) => {
  let newTodoItem = curretState;
  if (action.type === "ADD_TODO") {
    newTodoItem = [
      ...curretState,
      { name: action.payload.name, date: action.payload.date },
    ];
  } else if (action.type === "DELETE_TODO") {
    newTodoItem = curretState.filter(
      (todo) => todo.name !== action.payload.todoName
    );
  }
  return newTodoItem;
};

const TodoItemContextProvider = ({ children }) => {
  const [todoList, itemDispatch] = useReducer(todoItemReducer, []);
  const handleAddTodo = (name, date) => {
    const newItemAddAction = {
      type: "ADD_TODO",
      payload: { name, date },
    };
    itemDispatch(newItemAddAction);
  };
  const handleDeleteTodo = (todoName) => {
    const newItemDeleteAction = {
      type: "DELETE_TODO",
      payload: { todoName },
    };
    itemDispatch(newItemDeleteAction);
  };
  return (
    <TodoItemContext.Provider
      value={{ todoList, handleAddTodo, handleDeleteTodo }}
    >
      {children}
    </TodoItemContext.Provider>
  );
};

export default TodoItemContextProvider;
