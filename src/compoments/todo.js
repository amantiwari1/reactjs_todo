import React from 'react';
import '../App.css';

 function Todo() {
    return (
        <div>
    <div className="row">
    <div className="col text-center">
  <div className="form-group">
    <h1 htmlFor="usr">TASK TODO:</h1>
    <input type="text" class="form-control form-control-sm" id="usr" />
  </div>
  </div>
  </div>

    <div className="row">
    <div className="col text-center">
    <button type="button" className="btn btn-primary">Add Todo List</button>
    </div>
  </div>
  </div>
  );
}

export default Todo;