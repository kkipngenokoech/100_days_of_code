# JSX ELEMENTS
javascript with html `const test_jsx = <h1>I am a JSX element</h1>`
you can as well create a react jsx element:
N/B: to create a valid jsx element it must be wrapped using html elements
we want to create a JSX element with more than one html element.
```
const header = (
    <header>
        <h1>this is a header</h2>
        <h1>it has more than one html file</h2>
        <h2>welcome to the jsx elements</h2>
    </header>
)
```
in the code above the header element is what makes all the inner htmls into one so that it can be relayed into the outer const header js.

## RENDERING JSX FILE.
ways to get started with react:
    using CDN
    using create-react-app
## too many react jsx elements?
1. jsx element for the header is written above
2. jsx element for the main part
```
const main = (
    <main>
        <h1>this is the main part</h1>
        <h2>this is where the body goes</h2>
    </main>
)
```
3. jsx element for the footer is
```
// JSX element
const footer = (
  <footer>
    <p>Copyright 2020</p>
  </footer>
)
```
to render all this three react js JSX elements we are going to create another jsx element to hold the same
```
const app = (
    <div>
        {header}
        {main}
        {footer}
    </div>
)
```

to inject dynamic data to jsx we use square brackets
# NODE
this is a javascript runtime environment that allow javascript to run on the server.
# REACT BOILERPLATE
node_modules - stores all the necessary node packages of the React applications.

Public

index.html - the only HTML file we have in the entire application

favicon.ico - an icon file

manifest.json - is used to make the application a progressive web app

other images - open graph images(open graph images are images which are visible when a link share on social media)

robots.txt - information, if the website allows web scraping

src

App.css, index.css - are different CSS files
index.js - a file which allows to connect all the components with index.html
App.js - A file where we usually import most of the presentational components
serviceWorker.js: is used to add progressive web app features
setupTests.js - to write testing cases
package.json- List of packages the applications uses

.gitignore - React boilerplate comes with git initiated, and the .gitingore allows files and folders not to be pushed to GitHub

README.md - Markdown file to write documentation

yarn.lock or package-lock.json - a means to lock the version of the package
## reduced react boilerplate:
in our [index.js](../30-days-of-react/src/index.js), import react and and ReactDOM packages, to render JSX on the DOM

## CSS STYLING IN REACT.
#### inline css
```
...
const headerStyles = {
    backgroundColor : "Black",
    fontFamily : 'san siro'
}
const header = (
    <header style = {headerStyles}>
    header jsx files
    </header>
)
...
```
#### internal styling
we put all the css elements in our index.html file.
how to call it into our react elements?
 `div className = 'header-wrapper'`
you introduce a new div section in the header/footer/main to wrap up the files you want to apply the styling 
### importing media in react
this include pictures videos, images and audio.
you create an image folder in the src folder and save images in.
then for the images you have to import them into your src file.

## react props
to create props you call the component you want to pass the properties and the elements
```
const Header = (props) => {
    <header>
        <h1>{props.welcome}</h1>
    </header>
}
const App = () => {
    <div>
        <header
        welcome = "...."
        title = "....."
        />
    </div>
}
```
working with array pops.
when you want to pass an array into a component as a prop:
we are going to employ the use of map functions here!

```
const arraycomp = (props) => {
    const skillList = props.skills.map((skill => <l1>{skill}</l1>)
    return <ul>{skilllist}</ul>
}
```

## DESTRUCTURING REACT PROPS.

## MAPPING ARRAYS
```
const app = () => {
    <div>
        <div>
            <h1>Numbers list</h1>
            {[1,2,3,4,5]}
        </div>
    </div>
}
```
the above code lists all the items in one line, to seperate them you:
```
...
const Numbers = ({numbers}) => {
    const list_passed = numbers.map((number) => <l1>{number}</l1>)
    return list_passed
}
const app = () => {
    const numbers = [1,2,3,4,5,6,10]
    return (
        <div>
            <div>
                <h1>Number's lists</h1>
                <ul><Numbers numbers={numbers}/><ul>
            </div>
        </div>
    )
}
...
```
##  REACT STATE
The state is an updatable structure that is used to contain data or information about the component. The state in a component can change over time. The change in state over time can happen as a response to user action or system event. A component with the state is known as stateful components. It is the heart of the react component which determines the behavior of the component and how it will render. They are also responsible for making a component dynamic and interactive.
a state can be set using the set state - setSate()

##### defining state
To define a state, you have to first declare a default set of values for defining the component's initial state. To do this, add a class constructor which assigns an initial state using this.state. The 'this.state' property can be rendered inside render() method.

setState() schedules an update to a component???s state object. When state changes, the component responds by re-rendering.

states act like variables declared within a function!
`this.state` holds the value of what's currently rendered in the screen.
###### more explanations
a state is an object that stores the values of properties to belonging to a component that could change over a period of time.
a state object is initialized in the constructor - it can store multiple properties
`this.setState()` - is used to change the value of the state object.
`setState()` - performs a shallow merge between the new and previous state 