import React, {useState} from 'react'
import '../styles/App.css'
import {v4 as uuidv4} from 'uuid'
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
        <input type='text' value = {item} onChange = {handleChange}></input>
        <button type='submit'>ADD</button>
      </form>
    </div>
  )
}
export default App;
