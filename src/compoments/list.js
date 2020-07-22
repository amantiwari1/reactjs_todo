import React  from 'react';
import '../App.css';
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';





function List(props) {

  const [taskUpdate, setTaskUpdate] = React.useState(
    { title: "", completed: false }
  );

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
      <div className="row list1">
    
    
    <div className="col-lg 8">
      <li
        key={props.list.id}
        className="list-group-item list-group-item-success">
        {props.list.title}
      </li>
      </div>

    <div className="col 2">
            <Button
              type="submit"
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
              variant="danger">
              Delete
              </Button>
          </div>


  <div className="col 2" >
          <Button 
          onClick={
            handleShow
            
            
          }
          variant="dark" >
              Edit
              </Button>
              </div>
        </div>
        <hr></hr>

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