import React from 'react';
import '../App.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


function Todo(props) {
  const [task1, addTask] = React.useState(
    { title: "", completed: false }
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
    <div>
    <br></br>
      <InputGroup  className="mb-3">
      <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">TASK : </InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control
      onChange={(event) => {
        addTask({ title: event.target.value })
      }}
      placeholder="Add New Task"
      aria-label="Add New Task"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button type="submit"
              onClick={handleSubmit}
               variant="primary">Add Task</Button>
    </InputGroup.Append>
  </InputGroup>

    </div>
  );
}

export default Todo;