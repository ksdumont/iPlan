import React, {Component} from 'react';
import Nav from '../Nav/Nav'
import Member from '../Member/Member'
import List from '../List/List'
import store from '../store'
import './TripHomePage.css'

class TripHomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            store
          }
    }
    render() { 
        const {store} = this.state;
        return (
        <>
            <Nav trips={store.trips[0]}/>
            <div className='list'>
                {store.lists.map(list => (
                    <List 
                        key={list.id}
                        id={list.id}
                        header={list.header}
                        cards={list.cards.map(id => id === store.allCards[id])}

                    />
                ))}
            </div>

            <Member trips={store.trips[0]}/>
        </>
        );
    }
}
 
export default TripHomePage;