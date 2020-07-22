import React  from 'react';
import '../App.css';
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup'
import ButtonGroup from 'react-bootstrap/ButtonGroup'





function List(props) {

  const [taskUpdate, setTaskUpdate] = React.useState(
    { title: "", completed: false }
  );

  let button1;

  if (props.list.completed) {
    button1 = <p>Complete</p>
  } else {
    button1 = <p>Uncomplete</p>
  }

 

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
      <div className="row list1">
    
    
    <div className="col-lg 9">
    <ListGroup>
    <ListGroup.Item variant="primary" key={props.list.id}>
        {props.list.title}
    </ListGroup.Item>
    </ListGroup>
      </div>

      <div className="col 3">
      <ButtonGroup size="lg"  aria-label="Basic example">
          <Button onClick={handleShow} variant="primary">Edit</Button>
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
                }} variant="success">
                  
                  
                  {button1}
                  
                  </Button>
          
          
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
               variant="danger">Delete</Button>
      </ButtonGroup>
      </div>

      </div>

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
        
      
    </div>
  );
}

export default List;