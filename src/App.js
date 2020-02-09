import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import config from './config';
import Home from "./Home/Home";
import Create from "./Create/Create";
import Join from "./Join/Join";
import TripHomePage from "./TripHomePage/TripHomePage";
import TripContext from "./TripContext";
require('dotenv').config()

class App extends Component {
  constructor() {
    super();
    this.state = {
      lists: [],
      trips: [],
      members: [],
      tasks: [],

      toggleAddTaskForm: (listId) => {
       const { lists } = this.state;
       const toggledLists = lists.map(l => {
         return listId === l.id ? 
         {...l, displayAddTaskForm: !l.displayAddTaskForm}
         : l
       })
       this.setState({lists: toggledLists})
      },
      
      createTrip: (title, cb) => {
        const newTrip = {
          title
        };
        fetch(`${config.API_BASE_URL}/api/trips`, {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(newTrip),
      })
        .then(res => res.json())
        .then(newTrip =>  
        this.setState({ trips: [...this.state.trips, newTrip] }, cb(newTrip))
        )  
      },
      addTask: (newTask) => {
        fetch(`${config.API_BASE_URL}/api/tasks`, {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(newTask),
      })
      .then(res => res.json())
      .then(newTask => 
        this.setState({tasks: [...this.state.tasks, newTask]}))
        .catch(error => {
          console.error({error});
        })
      },
      deleteTask: (taskId) => {
        fetch(`${config.API_BASE_URL}/api/tasks/${taskId}`, {
          method: 'DELETE',
          headers: {
              'content-type': 'application/json'
          }})
        const { tasks } = this.state;
        const remainingTasks = tasks.filter(task => task.id !== taskId)
        this.setState({
          tasks: remainingTasks
        })
      }, 
      addMember: (name, tripId, cb) => {
        const newMember = {
          name,
          trip: Number(tripId),
        }
        fetch(`${config.API_BASE_URL}/api/members`, {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(newMember),
      })
      .then(res => res.json())
      .then(newMember =>  
      this.setState({ members: [...this.state.members, newMember] }, cb(tripId))
      )
      },
    };
  }
  componentDidMount() {
    Promise.all([
      fetch(`${config.API_BASE_URL}/api/lists`),
      fetch(`${config.API_BASE_URL}/api/trips`),
      fetch(`${config.API_BASE_URL}/api/members`),
      fetch(`${config.API_BASE_URL}/api/tasks`)
    ])
    .then(([listsRes, tripsRes, membersRes, tasksRes]) => {
      if (!listsRes.ok)
        return listsRes.json().then(e => Promise.reject(e));
      if (!tripsRes.ok)
        return tripsRes.json().then(e => Promise.reject(e));
      if (!membersRes.ok)
        return membersRes.json().then(e => Promise.reject(e));
      if (!tasksRes.ok)
        return tasksRes.json().then(e => Promise.reject(e));
        return Promise.all([listsRes.json(), tripsRes.json(), membersRes.json(), tasksRes.json()]);
    })
    .then(([lists, trips, members, tasks]) => {
      this.setState({lists, trips, members, tasks});
    })
    .catch(error => {
      console.error({error});
    });
  }

  render() { 
    return (
      <TripContext.Provider value={this.state}>
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/create" component={Create} />
              <Route exact path="/join" component={Join} />
              <Route exact path="/trip/:tripId" component={TripHomePage} />
              <Route exact path="/" component={Home} />
            </Switch>
          </BrowserRouter>
        </div>
      </TripContext.Provider>
    );
  }
}

export default App;
