// import './App.css';
// import React, { Component } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NewsNavbar from './News_App_Components/NewsNavbar';
// import NewsComponents from './News_App_Components/NewsComponents';

// export default class App extends Component {
//   render() {
//     return (
//       <Router>
//         <>
//         <NewsNavbar />
//           <Routes>
//             <Route exact path="/" element={<NewsComponents key="general" category="general" country="in" />} />
//             <Route exact path="/business" element={<NewsComponents key="business" category="business" country="in" />} />
//             <Route exact path="/general" element={<NewsComponents key="general" category="general" country="in" />} />
//             <Route exact path="/health" element={<NewsComponents key="health" category="health" country="in" />} />
//             <Route exact path="/science" element={<NewsComponents key="science" category="science" country="in" />} />
//             <Route exact path="/sports" element={<NewsComponents key="sports" category="sports" country="in" />} />
//             <Route exact path="/technology" element={<NewsComponents key="technology" category="technology" country="in" />} />
//           </Routes>
//         </>
//       </Router>
//     );
//   }
// }

import './App.css';

import React, { useState, useEffect} from "react";
import TodoForm from './components/TodoForm'
import List from './components/List'


export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    showTask();
  }, []);
  
  function saveData(data) {
    localStorage.setItem("data", JSON.stringify(data));
  }

  function showTask() {
    const savedTasks = localStorage.getItem("data");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }
  return (
    <> 
     <div className="Container">
    <div className="fazool"></div>
    <div className="todo-app">
   <TodoForm tasks={tasks} setTasks={setTasks} saveData={saveData} />
   <List tasks={tasks} setTasks={setTasks} saveData={saveData} />
    </div>
    </div> 
    </>

  )
}
