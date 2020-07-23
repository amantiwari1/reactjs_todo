import React  from 'react';
import '../App.css';
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  colorText: {
    backgroundColor: "#1abc9c"
  },
  button: {
    backgroundColor: "#7ed6df"
  },
  complete: {
    backgroundColor: "#f0932b"
  },
  uncomplete: {
    backgroundColor: "#009688"
  }
}));

function List(props) {

  const classes = useStyles();

  const [taskUpdate, setTaskUpdate] = React.useState(
    { title: "", completed: false }
  );

  let button1;
  let button2;

  if (props.list.completed) {
    button1 = "Complete";
    button2 = classes.complete;
  } else {
    button1 = "Uncomplete";
    button2 = classes.uncomplete;
  }

 

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
  <Grid container spacing={1}>
    
    
    <Grid item xs={12} sm={8}>

    <ListItem className={classes.colorText} alignItems='center' key={props.list.id}>
    <ListItemText alignItems="center">
    {props.list.title}
    </ListItemText>
    </ListItem>

    </Grid>


<Grid item xs={12} sm={4}>

      <ButtonGroup size="large" variant="contained"  aria-label="contained primary button group">
          <Button className={classes.button} onClick={handleShow} >Edit</Button>
          <Button onClick={(e) => {
                console.log({ title: props.list.title, completed: !props.list.completed });
                e.preventDefault()
                axios.put('http://127.0.0.1:8000/task/'+props.list.id + '/?format=json',
                { title: props.list.title, completed: !props.list.completed } )
                  .then(function (response) {
                    console.log(response)
                    window.location.reload()

                  })
                  .catch(function (error) {
                    console.log(error)
                  })
                }}
                className={button2} 
                > {button1} </Button>
          
          
          <Button type="submit"
              onClick={(e) => {
                e.preventDefault()
                axios.delete('http://127.0.0.1:8000/task/'+props.list.id + '/?format=json')
                  .then(function (response) {
                    console.log(response)
                    window.location.reload()
                  })
                  .catch(function (error) {
                    console.log(error)
                  })
              } }
              color="secondary"

               >Delete</Button>
      </ButtonGroup>
      </Grid>


        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup  className="mb-3">
      
    <Form.Control
      onChange={(event) => {
        setTaskUpdate({ title: event.target.value })
      }}
      placeholder="Update Task"
      aria-label="Update Task"
      aria-describedby="basic-addon2"
    />
   
  </InputGroup>
  </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => {
                e.preventDefault()
                axios.put('http://127.0.0.1:8000/task/'+props.list.id + '/?format=json',
                taskUpdate )
                  .then(function (response) {
                    console.log(response)
                    window.location.reload()
                  })
                  .catch(function (error) {
                    console.log(error)
                  })
                }} >
            Update task Changes
          </Button>
        </Modal.Footer>
      </Modal>
        
      
    </Grid>
  );
}

export default List;