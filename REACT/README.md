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
here app() function and the List () defined are react components
once we have defined a react component we can use it anywhere in our jsx as an html element. - this instatiating the react component 

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

so far we have been doing everything inside the react component app.
but we can introduce another component to specifically handle our lists.
```
function List (){
  return list.map((item) => {
      return (
        <div key={item.object_id}>
          <span><a href='item.url'>{item.title}</a></span>
          <br></br>
          <span>{item.author} </span>
          <span>{item.number_of_comments} </span>
          <span>{item.points}</span>
          </div>
          );
          });
}
```
then you can now use the listdisplay component inside the app component
  `<List/>` - once we have defined our react component, we can use it anywhere in our jsx as an html  element.

## JAVASCRIPT CLASSES
#### code below defines our developer class.
```
class Developer {
  constructor(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
  }
  getName(){
    return this.firstname + ' '+this.lastname
  }
}
```
each class has a constructor that take arguments and assign them to  a class instance.
a class can also have functions - class methods.
#### instantiating javascript classes
`const hudson = Developer("Billy","Hudson")`
`console.log(hudson.getName())` - accessing the methods inside a class

# REACT DOM
this is the app component instantiation.
for this we are going to concentrate on the [index.js](./hacker-stories/src/index.js) file.

ReactDOM.render() - this function uses an html node to replace it with jsx code. this integrates react into html.
`ReactDOM()` - expects two arguments:
    the first argument is to render JSX, it creates an instance of your app component.
    the second argument expects where it is going to render your html code. as per below code it expects an element with id [root.](./hacker-stories/public/index.html)
```
ReactDOM.render(
  <h1>Hello, multiverse</h1> or <app/>(the react app),
  document.getElementById('root')
)
```

## HANDLER FUNCTIONS - react events
when passing a function to JSX file, we use the name of the function only and not the name with the brackets as we usually do :
  `handle_change` and not `handle_change()`.

## REACT PROPS
react pops enables us to use react component variables in other react components from the different files.
