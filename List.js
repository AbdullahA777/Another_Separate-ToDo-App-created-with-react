import React from 'react'

function List({ tasks, setTasks, saveData }) {
  const handleDelete = (e) => {
    if (e.target.tagName === "SPAN") {
      const updatedTasks = tasks.filter(
        (task, index) =>
        index.toString() !== e.target.parentElement.getAttribute("data-key")
        );
        setTasks(updatedTasks) 
        saveData(updatedTasks)
        console.log(saveData(updatedTasks));
    } else if (e.target.tagName === "LI") {
     e.target.classList.toggle("through");
      saveData(tasks)
    }
  };
    return (
    <>
      <div className="tasks">
        <ol onClick={handleDelete}>
          {tasks.map((task, index) => (
            <li key={index} data-key={index}>
              {task} <span className="cross">&#10060;</span>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}


export default List