import React from 'react'
import ReactDOM from 'react-dom'
import kipUser from './images/bugbunny.jpg'

// all the following are jsx elements
const jsx_element = <h1>I am a JSX element</h1>
const root_element = document.getElementById('root')
const title = <h2>this is me learning 30 days of react</h2>
const user = (
  <div>
    <img src={kipUser} alt="kipngenokoech" />
  </div>
)
const header = (
  <header>
    <h1>suits</h1>
    <p>law Based tv series</p>
    {title}
    {jsx_element}
  </header>
)
const main = (
  <main>
      <p>its  main character is Harvey specter</p>
      <p>location: Newyork city </p>
      {user}
  </main>
)
const footer = (
  <footer>
      <p>copywright: kkipngenokoech</p>
  </footer>
)

// const app = (
//   <div>
//       {header}
//       {title}
//       {jsx_element}
//       {/* {user} */}
//       {main}
//       {footer}
//   </div>
// )

// ReactDOM.render(app,root_element) 
// react components go here
const Header = () => {
  return header
}
const Main = () => {
  return main
}
const Footer = () => {
  return footer
}
// const buttonStyles = {
//         padding: '10px 20px',
//         background: 'rgb(0, 255, 0',
//         border: 'none',
//         borderRadius: 5,
//       }
// const button = () => {
//   <div>
//     <button style={buttonStyles}>action</button>
//   </div>
// }

// rendering the react elements
const App = () => {
  return (
    <div>
      <Header />
      <Main />
      {/* <button/> */}
      <Footer />
    </div>
  )
}
ReactDOM.render(<App/>, root_element)
