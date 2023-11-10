
import React, { useState } from 'react';

function TodoForm({tasks, setTasks}) {
  const [inputValue, setInputValue] = useState('');
  const addFunc = () => {
    if (inputValue === "") {
      alert("Kindly fill the text box.");
    } else {
      const newTasks = [...tasks, inputValue];
      setTasks(newTasks);
      setInputValue("");;
    }
  };
  return (
    <>
          <h2>ToDo List</h2>
          <div className="row">
            <input
              type="text"
              placeholder="Add your task"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button id="addBtn" onClick={addFunc}>
              Add
            </button>
          </div>
    </>
  );
}

export default TodoForm;
