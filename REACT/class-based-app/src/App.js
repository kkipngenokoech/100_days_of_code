import React from 'react'
import MyComponent from './components/component_1'

class Team extends React.Component {
  constructor (props) {
    super(props)
    this.state = {change : true}
  }
  render () {
    return (
      <div>
        <button onClick={() => {this.setState({change : !this.state.change})}}>Choose Team!</button>
        {
          this.state.change?(<h1>welcome to the Women's Team</h1>):(<h1>welcome to the Men's Team</h1>)
        }
        <MyComponent />
      </div>
    )
  }
}
class Player extends React.Component {
  render () {
    return <h1>Here's data about players</h1>
  }
}
class App extends React.Component {
  render () {
    return (
    <div>
      <h1>Chelsea Football Club</h1>
      <Player />
      <Team />
    </div>
    )
  }
}
export default App;
