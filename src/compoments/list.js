import React from 'react';
import '../App.css';

 function List(props) {
    return (
        <div>
    <hr></hr>
    <li className="list-group-item list-group-item-success">{props.list}</li>
    <hr></hr>
  </div>
  );
}

export default List;