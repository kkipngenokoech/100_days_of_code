import React from 'react'
import "./App.css"
class App extends React.Component {
  styles = {
    fontStyle : "bold",
    color : "teal"
  }
  render(){
    return (
    <div className = "App">
      <h1 style={this.styles}>welcome to multiverse</h1>
    </div>
    )
  }
}
export default App;