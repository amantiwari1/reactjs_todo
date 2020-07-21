import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Todo from './compoments/todo'
import List from './compoments/list'



function App() {
  const [task, setTask] = useState([]);

 useEffect(() => {
   axios
   .get('http://127.0.0.1:8000/task/?format=json')
   .then(result => setTask(result.data))
 }, [])
  return (
    <div className="container"> 
    <Todo />
    {
      task.map(todo => ( 
        <List list={todo.title} />
      ))
    }

    </div>
  );
}

export default App;
