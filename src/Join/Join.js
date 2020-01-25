import React, {Component} from 'react';
import store from '../store'
import './Join.css'

export default class Join extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tripId: '',
            name: '',
          }
      }
      handleSubmit = (e) => {
        e.preventDefault()
        const name = this.state
        const tripId = Number(this.state.tripId)
        if (!store.trips.find(trip => trip.id === tripId)) {
            console.log('cant find id')
        } else {
            const trip = store.trips.find(trip => trip.id === tripId)
            trip.members.push(name)
            this.props.history.push(`/trip/${tripId}`) 
        }                
    }
    handleIdChange = e => {
      const tripId = e.target.value
      this.setState({
          tripId
      })
    }
    handleNameChange = e => {
      const name = e.target.value
      this.setState({
          name
      })
    }
    render() {
        return (
            <div>
                <header>
                    <h1>iPlan</h1>
                </header>
    
                <form onSubmit={this.handleSubmit}>
                    <label>Trip id:</label>
                    <input type='text' name='tripId' 
                        value={this.state.tripId} 
                        onChange={this.handleIdChange} 
                        aria-label='TripId' required />
                    <label>Your Name:</label>
                    <input type='text' name='name'
                        value={this.state.name} 
                        onChange={this.handleNameChange} 
                        aria-label='Your Name' required/>
                    <button type='submit'>Join</button>
                </form>
            </div>
        )
    }

}