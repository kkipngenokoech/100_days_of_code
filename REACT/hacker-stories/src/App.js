import React from 'react'

const title = 'Multiverse';
const welcome = {
  greetings : "Hi",
  name : "hudson"
}
function App() {
  return (
    <div>
      <h1>Welcome, {title}</h1>
      <p>{welcome.greetings} {welcome.name} this is your world</p>
      <label htmlFor='search'>search :  </label>  
      
      <input id='search' type='text' placeholder='Search' />
    </div>
  );
}

export default App;
