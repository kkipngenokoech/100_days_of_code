import React from 'react'

const title = 'Multiverse';
const welcome = {
  greetings : "Hi",
  name : "hudson"
}
const list = [
  {
    title : 'portfolio',
    url : 'https://kipngenokoech.netlify.app/',
    author : 'kipngenokoech',
    number_of_comments : 4,
    points : 10,
    object_id : 0,
  },
  {
    title : 'blog',
    url : 'https://medium.com/@kkipngenokoech',
    author : 'kipngenokoech',
    number_of_comments : 2,
    points : 5,
    object_id : 1,
  }
];
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
