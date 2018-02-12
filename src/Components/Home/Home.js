import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <p>Welcome to Home Page.</p>        
        <Link to="/account/profile/wesbos">profile</Link>        
      </div>
    )
  }
}
export default Home;