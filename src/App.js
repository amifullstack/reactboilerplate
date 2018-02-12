import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home'
import ProfilePage from './Components/Account/Profile/ProfilePage';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Router>
        <div>
          <h1>Minimal React Boilerplate!</h1>
          <Route exact path='/' component={Home} />
          <Route path ='/account/profile/:id' component={ProfilePage} />          
        </div>
      </Router>
    )
  }
}
export default App;