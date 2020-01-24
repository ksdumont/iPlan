import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Home from './Home/Home'
import Create from './Create/Create'
import Join from './Join/Join'
import TripHomePage from './TripHomePage/TripHomePage'

class App extends Component {
  constructor(props) {
    super(props)
    this. state = {

      }
  }
  render() { 
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/create' component={Create} />
        <Route path='/join' component={Join} /> 
        <Route path='/trip/:tripId' component={TripHomePage} /> 
      </div>
      );
  }
}
 
export default App;

