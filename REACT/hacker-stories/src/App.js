import React from 'react'

const title = 'My Hacker stories';
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
      <h1>Welcome to {title}</h1>
      <p>{welcome.greetings} {welcome.name} this is your world</p>
      <label htmlFor='search'>search :  </label>  
      
      <input id='search' type='text' placeholder='Search' />
      <hr/>
      {/* we are going to render our lists here */}
      {
        list.map((item) => {
          return (
            <div key={item.object_id}>
              {item.title}
            </div>
            );
            })
      }
    </div>
  );
}

export default App;
