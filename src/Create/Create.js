import React, { Component } from "react";
import "./Create.css";
import TripContext from "../TripContext";

export default class Create extends Component {
  static contextType = TripContext;
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      name: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    const { title, name } = this.state;
    this.context.createTrip(title, name)
    //this.props.history.push(`/trip/${id}`)
    //this.context.addMember(name, title)
  }
  handleTitleChange = e => {
    const title = e.target.value;
    this.setState({
      title
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

        <form onSubmit={this.handleSubmit} className='create-form'>
          <label>Trip Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleTitleChange}
            aria-label="Trip Name"
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
          <button className="create-submit" type="submit">
            Create
          </button>
        </form>
      </div>
    );
  }
}
