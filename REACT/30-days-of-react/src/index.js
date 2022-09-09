import React from 'react'
import ReactDOM from 'react-dom'
import kipUser from './images/bugbunny.jpg'

const jsx_element = <h1>I am a JSX element</h1>
const root_element = document.getElementById('root')
const title = <h2>this is me learning 30 days of react</h2>
const header = (
  <header>
    <h1>suits</h1>
    <p>law Based tv series</p>
  </header>
)
const main = (
  <main>
      <p>its  main character is Harvey specter</p>
      <p>location: Newyork city </p>
  </main>
)
const footer = (
  <footer>
      <p>copywright: kkipngenokoech</p>
  </footer>
)
const user = (
  <div>
    <img src={kipUser} alt="kipngenokoech" />
  </div>
)
const app = (
  <div>
      {header}
      {title}
      {jsx_element}
      {user}
      {main}
      {footer}
  </div>
)

ReactDOM.render(app,root_element) 