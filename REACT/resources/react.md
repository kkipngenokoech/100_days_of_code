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
