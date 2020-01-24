import React, {Component} from 'react';
import Nav from '../Nav/Nav'
import Member from '../Member/Member'
import store from '../store'


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
            {/* <List /> */}
            <Member trips={store.trips[0]}/>
        </>
        );
    }
}
 
export default TripHomePage;