import React from 'react';
import '../App.css';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';




function Todo(props) {


  const [task1, addTask] = React.useState(
    { title: "", completed: true }
  );

  const handleSubmit = (e) => {
    console.log(task1);
    e.preventDefault()
    axios.post('http://127.0.0.1:8000/task/?format=json', task1)
      .then(function (response) {
        console.log(response)
        window.location.reload()

      })
      .catch(function (error) {
        console.log(error)
      })
  }



  return (

    <Grid container spacing={4}>


            <Grid item xs={12} sm={8}>
            <br></br>

            <TextField 
              size="small" 
              label="Add Task"
              id="outlined-size-normal"
              variant="outlined"
              onChange={(event) => {
                addTask({ title: event.target.value, completed: true })
              }}    
              fullWidth
              required />  
              </Grid>


          <Grid item xs={12} sm={4}>
            <br></br>
            <Button   
                      type="submit"
                      onClick={handleSubmit}
                      variant="contained" 
                      color="primary">
          Add Task
        </Button>
        </Grid>
    </Grid>      
    



  );
}

export default Todo;