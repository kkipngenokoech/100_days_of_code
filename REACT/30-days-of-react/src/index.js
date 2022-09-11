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
// const main = (
//   <main>
//       <p></p>
//       <p>location: Newyork city </p>
//       {user}
//   </main>
// )
// const footer = (
//   <footer>
//       <p>copywright: kkipngenokoech</p>
//   </footer>
// )

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
const showDate= (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'july',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return `${month} ${date} ${year}`
}
const Button = (props) => {
  <button onClick={props.onClick}>{props.text}</button>
}
const Main = (props) => {
  return (
    <main>
        <div>
          <p>{props.first_paragraph}</p>
          <p>{props.second_paragraph}</p>
          {user}
        </div>
    </main>
  )
}
const Footer = (props) => {
  return (
    <footer>
      <p>{props.Copywright}</p>
    </footer>
  )
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
  // creating a prop object
  const data = {
    welcome : "Hi, welome to multiverse",
    
  }
  const handleTime =() => {
    alert(showDate(new Date()))
  }
  const greetPeople = () => {
    alert("welcome to 30-days-of-react")
  }
  const copywright = 'copywright: kkipngenokoech'
  return (
    <div>
      <Header />
      <Main
      first_paragraph = 'its  main character is Harvey specter'
      second_paragraph = 'Newyork city'
       />
      {/* <button/> */}
      <Button text = 'show time' onClick = {handleTime}/>
      <Button text = 'greet People' onClick = {greetPeople}/>
      <Footer
        Copywright = {copywright}
      />
    </div>
  )
}
ReactDOM.render(<App/>, root_element)
