import React, {Component} from 'react';
import Nav from '../Nav/Nav'
import Member from '../Member/Member'
import List from '../List/List'
import AddCardForm from '../AddCardForm/AddCardForm'
import store from '../store'
import './TripHomePage.css'

class TripHomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            store
          }
        }
    handleAddCard = (listId) => {
        console.log(listId)
        return <AddCardForm />
}
    handleDeleteCard = (cardId) => {
        const {lists, allCards} = this.state.store
        const cardToDelete = Object.values(allCards)
                            .filter(card => card.id === cardId)
       
    }
    
    render() { 
        const {store} = this.state;
        return (
        <>
            <Nav trip={store.trips.find(trip => trip.id == this.props.match.params.tripId)} /> 
            <div className='list'>
                {store.lists.map(list => (
                    <List 
                        key={list.id}
                        id={list.id}
                        header={list.header}
                        cards={list.cards.map(id => store.allCards[id]) && 
                               Object.values(store.allCards).filter(card => card.trip == this.props.match.params.tripId)}
                        onClickAdd={this.handleAddCard}
                        onClickDelete={this.handleDeleteCard}
                    />
                ))}    
            </div>
            <Member trip={store.trips.find(trip => trip.id == this.props.match.params.tripId)} />
        </>
        );
    }
}
 
export default TripHomePage;