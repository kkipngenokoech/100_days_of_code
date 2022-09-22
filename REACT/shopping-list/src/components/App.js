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
    }
  }
}
export default App;
