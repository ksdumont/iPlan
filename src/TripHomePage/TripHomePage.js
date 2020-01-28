import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Member from "../Member/Member";
import List from "../List/List";
import AddCardForm from "../AddCardForm/AddCardForm";
import "./TripHomePage.css";
import TripContext from "../TripContext";

class TripHomePage extends Component {
  static contextType = TripContext;

  handleAddCard = listId => {
   this.context.toggleAddTaskForm()
  };
  handleDeleteCard = cardId => {
    this.context.deleteTask(cardId)
  };

  render() {
    const { trips, lists, allCards } = this.context;
    return (
      <>
        <Nav
          trip={trips.find(trip => trip.id == this.props.match.params.tripId)}
        />
        <div className="list">
          {lists.map(list => (
            <List
              key={list.id}
              id={list.id}
              header={list.header}
              cards={allCards.filter(
                card =>
                  card.list === list.id &&
                  card.trip == this.props.match.params.tripId
              )}
              onClickAdd={this.handleAddCard}
              onClickDelete={this.handleDeleteCard}
            />
          ))}
        </div>
        <Member
          trip={trips.find(trip => trip.id == this.props.match.params.tripId)}
        />
      </>
    );
  }
}

export default TripHomePage;
