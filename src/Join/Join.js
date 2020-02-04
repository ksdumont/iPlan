import React, { Component } from "react";
import TripContext from "../TripContext";
import "./Join.css";

export default class Join extends Component {
  static contextType = TripContext;
  constructor(props) {
    super(props);
    this.state = {
      tripId: "",
      name: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    const tripId = Number(this.state.tripId)

    if (!this.context.trips.find(trip => trip.id === tripId)) {
      return alert('trip does not exist');
    } else {
      this.context.addMember(name, tripId, () => {
        this.props.history.push(`/trip/${tripId}`);
      });
    }
  };
  handleIdChange = e => {
    const tripId = e.target.value;
    this.setState({
      tripId
    });
  };
  handleNameChange = e => {
    const name = e.target.value;
    this.setState({
      name
    });
  };
  render() {
    return (
      <div>
        <header>
          <h1>iPlan</h1>
        </header>

        <form onSubmit={this.handleSubmit} className='join-form'>
          <label>Trip id:</label>
          <input
            type="text"
            name="tripId"
            value={this.state.tripId}
            onChange={this.handleIdChange}
            aria-label="TripId"
            required
          />
          <label>Your Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleNameChange}
            aria-label="Your Name"
            required
          />
          <button className="join-submit" type="submit">
            Join
          </button>
        </form>
      </div>
    );
  }
}
