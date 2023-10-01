import { useState } from "react";
import TodoInput from "./components/TodoInput";
import Todolist from "./components/Todolist";
import './App.css';

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // To add a todo item to the todos list
  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  }

  return (
    <div className='App'>
      <h1>React Todo App</h1>

      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <Todolist list={todos} remove={deleteTodo} />

    </div>
  );
}

export default App;
