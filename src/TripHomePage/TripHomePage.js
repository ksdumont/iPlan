import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Member from "../Member/Member";
import List from "../List/List";
import "./TripHomePage.css";
import TripContext from "../TripContext";

class TripHomePage extends Component {
  static contextType = TripContext;

  handleAddTask = listId => {
    this.context.toggleAddTaskForm(listId);
  };
  handleDeleteTask = taskId => {
    this.context.deleteTask(taskId);
  };

  render() {
    const { trips, lists, tasks, members } = this.context
   
    return this.context !== undefined ? (
      <>
        <Nav
          trip={trips.find(trip => trip.id === Number(this.props.match.params.tripId))}
        />
        <div className="list">
          {lists.map(list => (
            <List
              key={list.id}
              id={list.id}
              list={list}
              header={list.title}
              tasks={tasks.filter(
                task =>
                  task.list === list.id &&
                  task.trip === Number(this.props.match.params.tripId)
              )}
              onClickAdd={this.handleAddTask}
              onClickDelete={this.handleDeleteTask}
              tripId={this.props.match.params.tripId}
            />
          ))}
        </div>
        <Member 
          members={members.filter(
            m => m.trip === Number(this.props.match.params.tripId)
          )}
        />
      </>
    ) : ''
  }
}

export default TripHomePage;
