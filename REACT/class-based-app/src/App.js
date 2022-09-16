import React from 'react'

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
      <Player/>
    </div>
    )
  }
}
export default App;
