import React from 'react';

const Todolist = ( {list, remove} ) => {
  return (
    <>
    {/* The question mark (?) in "todos?.length" is an optional chaining operator that checks if the todos array exists and has a length greater than 0, avoiding errors if todos is null or undefined. */}
      {list?.length > 0 ? (
          <ul className="todo-list">
            {list.map((entry, index) => (
              <div className="todo" key={index}>
                <li>{entry}</li>

                <button
                  className="delete-button"
                  onClick={() => {
                    remove(entry)
                  }}>Delete</button>
              </div>
            ))}
          </ul>
        ) : (
          <div className="empty">
            <p>No task found</p>
          </div>
        )}
    </>
  )
}

export default Todolist;