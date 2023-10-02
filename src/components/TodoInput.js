import React from "react";
import Button from "./Button";

const TodoInput = ({ todo, setTodo, addTodo }) => {
  return (
    <div className='input-wrapper'>
      <input
        type='text'
        name='todo'
        value={todo}
        placeholder='Create a new todo'
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <Button className='add-button' onClick={addTodo}>
        Add
      </Button>
    </div>
  );
};

export default TodoInput;