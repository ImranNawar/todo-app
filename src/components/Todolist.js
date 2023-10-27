import React, { useState } from 'react';
import Button from './Button';

const Todolist = ({ list, remove }) => {
  const [checkedItems, setCheckedItems] = useState([]);

  const toggleItemCompletion = (entry) => {
    if (checkedItems.includes(entry)) {
      setCheckedItems(checkedItems.filter((item) => item !== entry));
    } else {
      setCheckedItems([...checkedItems, entry]);
    }
  };

  return (
    <div>
      {/* The question mark (?) in "todos?.length" is an optional chaining operator that checks if the todos array exists and has a length greater than 0, avoiding errors if todos is null or undefined. */}
      {list?.length > 0 ? (
        <ul className="list-group">
          {list.map((entry, index) => (
            <div className="todo" key={index}>

              {/* Checked the list item */}
              <input
                type="checkbox"
                className="form-check-input"
                style={{ backgroundColor: '#44c0b6', height: '45px' }}
                checked={checkedItems.includes(entry)}
                onChange={() => toggleItemCompletion(entry)}
              />

              <li
                className="list-group-item-text"
                style={{ textDecoration: checkedItems.includes(entry) ? 'line-through' : 'none' }}
              >{entry}</li>

              {/* Delete Button */}
              <Button
                className="delete-button"
                onClick={() => {
                  remove(entry)
                }}>Delete</Button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>No task found</p>
        </div>
      )}
    </div>
  );
};

export default Todolist;