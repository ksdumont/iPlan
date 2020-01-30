import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Create from "./Create/Create";
import Join from "./Join/Join";
import TripHomePage from "./TripHomePage/TripHomePage";
import TripContext from "./TripContext";
import uuid from "uuid/v4";

class App extends Component {
  constructor() {
    super();
    this.state = {
      lists: [
        {
          id: 1,
          header: "To Do",
          displayAddTaskForm: false,
        },
        {
          id: 2,
          header: "Assigned",
          displayAddTaskForm: false,
        },
        {
          id: 3,
          header: "Done",
          displayAddTaskForm: false,
        }
      ],
      allTasks: [
        {
          id: 1,
          task: "beer",
          member: "keith",
          trip: 1,
          list: 1
        },
        {
          id: 2,
          task: "book house",
          member: "mika",
          trip: 1,
          list: 2
        },
        {
          id: 3,
          task: "rent car",
          member: "joe",
          trip: 2,
          list: 1
        },
        {
          id: 4,
          task: "food",
          member: "rebecca",
          trip: 3,
          list: 1
        }
      ],
      trips: [
        {
          id: 1,
          title: "Trip one",
          members: ["keith", "mika", "joe", "rebecca"]
        },
        {
          id: 2,
          title: "trip two",
          members: ["kyle", "mika", "joe", "susan"]
        },
        {
          id: 3,
          title: "trip three",
          members: ["kevin", "mika", "joe", "jordana"]
        }
      ],
      
      
      toggleAddTaskForm: (listId) => {
       const { lists } = this.state;
       const toggledLists = lists.map(l => {
         return listId === l.id ? 
         {...l, displayAddTaskForm: !l.displayAddTaskForm}
         : l
       })
       this.setState({lists: toggledLists})
      },
      
      createTrip: (title, name, cb) => {
        const id = uuid();
        const newTrip = {
          id,
          title,
          members: [name]
        };
        // fetch post call
        // .then(res=>res.json())
        // .then(newTrip=>)
        this.setState({ trips: [...this.state.trips, newTrip] }, () => {
          cb(id);
        });
      },
      joinTrip: (tripId, name, cb) => {
        const trips = this.state.trips.map(trip => {
          if (trip.id == tripId) {
            trip.members = [...trip.members, name]
          }
        });
        this.setState({trips: [...this.state.trips, trips]}, cb)
      },
      addTask: (newTask) => {
        const updateAllTasks = [...this.state.allTasks, newTask]
        this.setState({
          allTasks: updateAllTasks
        })
      },
      deleteTask: (taskId) => {
        const { allTasks } = this.state;
        const remainingTasks = allTasks.filter(task => task.id !== taskId)
        this.setState({
          allTasks: remainingTasks
        })
      }
    };
  }


  render() {
    return (
      <TripContext.Provider value={this.state}>
        <div>
          <Switch>
            <Route path="/create" component={Create} />
            <Route path="/join" component={Join} />
            <Route path="/trip/:tripId" component={TripHomePage} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </TripContext.Provider>
    );
  }
}

export default App;
