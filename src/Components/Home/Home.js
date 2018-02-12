import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';


class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <p>Welcome to Home Page.</p>        
        <Link to="/account/profile/wesbos">profile</Link>        
        <Button bsStyle="primary" bsSize="large">Click</Button>
        <button>Test</button>
      </div>
    )
  }
}
export default Home;