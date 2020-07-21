import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Todo from './compoments/todo'
import List from './compoments/list'





function App() {
  const [task, getTask] = useState([]);

  const [task1, addTask] = useState(
    { title: "", completed: false }
  );



  const handleSubmit = (e) => {
    console.log(task1);
    e.preventDefault()
    axios.post('http://127.0.0.1:8000/task/?format=json', task1)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/task/?format=json')
      .then(result => getTask(result.data))
  }, [])




  return (
    <div className="container">
      <Todo
        onSubmit1={handleSubmit}
        onChange1={(event) => {
          addTask({ title: event.target.value })
        }} />
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
