import React, {useState} from 'react'
import '../styles/App.css'
import {v4 as uuidv4} from 'uuid'
import item from '../components/items'

function App (){
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (input) => {
    const newItem = {
      id : uuidv4(),
      item : item,
      complete : false
    };
    input.preventDefault();
    if (item)
    {
      setList([...list, newItem]);
      setItem("");
    }
  };
  const handleChange = (input) => {
    setItem(input.target.value);
  };
  return (
    <div className='App'>
      <h1>Grocecy list</h1>
      <form onSubmit={handleSubmit}>
        <input className='input' type='text' value = {item} placeholder = 'enter the items' onChange = {handleChange}></input>
        {/* {edit ? (
          <button className = 'btn' type = 'submit'>Edit item</button>
        ) : (
          <button className = 'btn' type = 'submit'>Add item</button>
        ) */}
      {/* } */}
        
      </form>
      {/* <p> hello</p> */}
    </div>
  )
}
export default App;
