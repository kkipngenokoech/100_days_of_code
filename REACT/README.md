welcome to my thirty days of reactjs.
here I am going to build a real world react app
this are some of the react features I am going to learn:
    pagination
    client-side searching
    server-side searching
    sorting
React is all about building components.

# FUNDAMENTALS OF REACT JS
for REACT appliactions you need to have node and NPM installed in your machine.
    to verify node version - node --version
    to verify npm version - npm --version
## SETTING UP A REACTJS PROJECT
command used - `npx create-react-app hacker-stories`
then cd into the directory `cd hacker-stories`
then run `npm start`

## INSIDE THE HACKER-STORIES DIRECTORY
there are a number of files created inside the [hacker-stories directory](./hacker-stories/)
1. [node_modules](./hacker-stories/node_modules):
    it contains all node packages installed via npm, we don't need to make any changes on this app since almost everything is done via the terminal.
2. [package.json](./hacker-stories/package.json):
    this file shows a list of node packages dependencies and other project configurations.
3. [package-lock.json](./hacker-stories/package-lock.json):
    this file indicates npm how it will break down all node package versions - we are not going to touch this file
4. [.gitgnore](./hacker-stories/.gitgnore):
    this file displays all files that are not going to be added to our repo when we use git. - this include files and folders
5. [public](./hacker-stories/public/):
    this folder holds development files
6. [SRC](./hacker-stories/src/)
    this contains static files which include and not limited to all our css and js files

N/B: the react commands that we may need are found in the [package.json](./hacker-stories/package.json)
the scripts are run with a prefix of npm run, with an exceptions of `start` and `test`
you can just `npm start` and `npm test`

## MEET THE REACT COMPONENT
[app](./hacker-stories/src/App.js) : 
we are going to start customizing this page
we remove the code present there
```
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```
and replace with a more customized one
```
import React from 'react'
function App(){
  return (
    <div>
      <h1>Hello, world</h1>
    </div>
  )
}
export default App;
```

## REACT JSX - javascript XML
JSX - mixed HTML and Javascript.
you can define variables `const title = multiverse`
then you call it inside your function app
```
...
function app(){
  <div>
    <h1>hello {title}!</h1>
  </div>
}
...
```
check on [app.js](./hacker-stories/src/App.js)

N/B : reactjs uses camel case to ovveride some of the html elements such as `class` with `className`; it just tweaks a little bit of html.

#### creating javascript object in jsx - you use curly braces
```
...
const welcome = {
  greeting : "Hey",
  name : "Hudson"
}
function app(){
  return (
    <h1>{welcome.greeting} {welcome.name}, how are you doing</h1>
  )
}
...
```

to use javascript in html you use curly braces, as indicated above.

# LISTS IN JAVASCRIPT - you use square braces
let's define the variable list outside the react component
```
...
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
...
```
for it to be displayed on our webpage we need to map it using a function
```
...
      {
        list.map((item) => {
          return (
            <div key={item.object_id}>
              {item.title}
            </div>
            );
            })
      }
...
```