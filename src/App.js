import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './Home/Home'
import Create from './Create/Create'
import Join from './Join/Join'
import TripHomePage from './TripHomePage/TripHomePage'
import store from './store'

class App extends Component {
  constructor(props) {
    super(props)
    this. state = {
        store,
        title: '',
        name: '',
      }
  }

  render() { 
    return (
      <div>
        <Switch>
          <Route path='/create' component={Create} />
          <Route path='/join' component={Join} /> 
          <Route path='/trip/:tripId' component={TripHomePage} /> 
          <Route exact path='/' component={Home} />
        </Switch>

      </div>
      );
  }
}
 
export default App;

