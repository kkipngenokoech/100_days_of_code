import React from 'react'
import "./App.css"
import Product from '../Product/product'

class App extends React.Component {
  styles = {
    fontStyle : "bold",
    color : "teal"
  }
  render(){
    return (
    <div className = "App">
      <h1 style={this.styles}>welcome to multiverse</h1>
      <Product />
    </div>
    )
  }
}
export default App;