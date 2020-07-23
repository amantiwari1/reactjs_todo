import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Todo from './compoments/todo';
import List from './compoments/list';
import { Grid } from "@material-ui/core";




function App() {
  const [task, getTask] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/task/?format=json')
      .then(result => getTask(result.data))
  }, [])




  return (
    <Grid container direction="column">
        <Grid item container>
              <Grid item xs={false} sm={2} />
                <Grid item xs={12} sm={8}>
                          <Todo />
                        <br></br>
                        {
                          task.map(todo => (
                            <List list={todo} />
                          ))
                        }
                </Grid>
              
              <Grid item xs={false} sm={2} />
              </Grid>
    </Grid>

  );
}

export default App;
