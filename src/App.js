import { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
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
    <div className="d-flex flex-column min-vh-100">
    <NavBar />
    <div className='App'>
      <h1>React Todo App</h1>

      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <Todolist list={todos} remove={deleteTodo} />

    </div>
    <Footer />
    </div>
  );
}

export default App;
