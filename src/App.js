import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Todo from './compoments/todo';
import List from './compoments/list';
import { Grid } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  appbar: {
    flexGrow: 1,
    alignItems: 'center'
  }
}));

function App() {
  const classes = useStyles();
  const [task, getTask] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/task/?format=json')
      .then(result => getTask(result.data))
  }, [])




  return (
    <div className={classes.root} >
      <AppBar  className={classes.appbar} position="static">
      <Toolbar>
      <Typography variant="h6" color="inherit" className={classes.appbar}>
            TASK
          </Typography>
      </Toolbar>
      </AppBar>
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
</div>
  );
}

export default App;
