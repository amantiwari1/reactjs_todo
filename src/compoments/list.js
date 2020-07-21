import React from 'react';
import '../App.css';
import axios from 'axios'


function List(props) {
  return (
    <div>
      <li
        key={props.list.id}
        className="list-group-item list-group-item-success">
        {props.list.title}
      </li>
      <div className="row">
          <div className="col text-center">
            <br></br>
            <button
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
              className="btn btn-danger">
              Delete
              </button>
          </div>
        </div>
      <hr></hr>
    </div>
  );
}

export default List;