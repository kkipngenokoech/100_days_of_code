import React from 'react'

//class based component
class Header extends React.Component {
  render () {
    const {
      welcome, title, subtitle, author: {FirstName, LastName}, date
    } = this.props.data
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {FirstName} {LastName}
        </p>
        <small>{date}</small>
        <p>select a country for your next holiday</p>
      </div>
    </header>
  )
  }
}
class App extends React.Component {
  state = {
    logged_in : false
  }
  render () {
    const metadata = {
      welcome : "Multiverse",
      title : "getting started with the multiverse ",
      subtitle : "the multiverse theory",
      author : {FirstName : "kipngeno", LastName : "koech"},
      date : 'sep 17, 2022'

    }
// conditional rendering based on if ....else
    let status
    if (this.state.logged_in)
    {
      status = <h3>Welcome to Multiverse</h3>
    }
    else {
      status = <h3>Please log in</h3>
    }
    return (
      <div className='app'>
        <Header data = {metadata} />
        {status}
      </div>
    )
  }
}

export default App;
