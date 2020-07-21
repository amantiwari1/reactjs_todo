import React from 'react';
import '../App.css';

function Todo(props) {
  return (
    <div>
      <form className='white' onSubmit={props.onSubmit1}>
        <div className="row">
          <div className="col text-center">
            <div className="form-group">
              <h1 htmlFor="title">TASK TODO:</h1>
              <input type="text"
                class="form-control form-control-sm"
                id="usr"
                onChange={props.onChange1} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col text-center">
            <button
              type="submit"
              onClick={() => window.location.reload()}
              className="btn btn-primary">
              Add Todo List
              </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Todo;