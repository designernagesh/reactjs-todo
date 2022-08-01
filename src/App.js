import { useState } from 'react';
import './App.css';

function App() {
  let [ input, setInput ] = useState("");
  let [ tasks, setTasks ] = useState([]);

  let inputHandler = (e) => {
    setInput(e.target.value)
  }

  let submitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, input])
    setInput("")
  }

  let deleteTask = (id) => {
    let finalTasks = tasks.filter( (item, i) => {
      return i !== id;
    });

    setTasks(finalTasks)
  }
  
  return (
    <div className="container">
      <h2 className='my-4 text-center'>Todo App</h2>
      <form onSubmit={ submitHandler }>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Careate Todo..."
                value={ input } onChange={ inputHandler } />
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit"> Create Todo </button>
          </div>
        </div>
      </form>

      <div className='card'>
        <div className='card-body'>
            {
              tasks.map( (item, i) => {
                return <div key={i} 
                className="d-flex border-bottom pb-2 mb-3"> 
                { item } 
                <button className='btn btn-danger btn-sm ml-auto'
                onClick={ () => deleteTask(i)}> Delete </button> 
                </div>
              })
            }
        </div>
      </div>
    </div>
  );
}

export default App;
