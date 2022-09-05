import React from 'react'

const title = 'Multiverse';
function App() {
  return (
    <div>
      <h1>Hello, {title}</h1>
      <label htmlFor='search'>search :  </label>  
      
      <input id='search' type='text' placeholder='Search' />
    </div>
  );
}

export default App;
