import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Todo from './compoments/todo';
import List from './compoments/list';





function App() {
  const [task, getTask] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/task/?format=json')
      .then(result => getTask(result.data))
  }, [])




  return (
    <div className="container">
      <Todo />
      <br></br>
      {
        task.map(todo => (
          <List list={todo} />
        ))
      }
    </div>
  );
}

export default App;
