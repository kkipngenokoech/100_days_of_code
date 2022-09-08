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
  const handle_change = event => {
    console.log(event.target.value)
  }
  return (
    <div>
      <h1>Welcome to {title}</h1>
      <p>{welcome.greetings} {welcome.name} this is your world</p>
      <label htmlFor='search'>search :  </label>  
      
      <input id='search' type='text' placeholder='Search' onChange={handle_change}/>
      <hr/>
      {/* we are going to render our lists here */}
      {/* {
        list.map((item) => {
          return (
            <div key={item.object_id}>
              <span><a href='item.url'>{item.title}</a></span>
              <br></br>
              <span>{item.author} </span>
              <span>{item.number_of_comments} </span>
              <span>{item.points}</span>
            </div>
            );
            })
      } */}
      <List />
    </div>
  );
}
function List() {
  return (
    <ul>
      {list.map(function (item) {
        return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <br></br>
            <span>{item.author} </span>
            <span>{item.number_of_comments} </span>
            <span>{item.points}</span>
          </li>
        );
      })}
    </ul>
  );
}


export default App;
