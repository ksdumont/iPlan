import React, {Component} from 'react';
import './Create.css'
import store from '../store'
import uuid from 'uuid/v4'


export default class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            name: '',
          }
      }
      handleSubmit = (e) => {
          e.preventDefault()
          const {title, name} = this.state
          const id = uuid()
          const newTrip = {
              id,
              title,
              members: [name],
          }
          store.trips.push(newTrip)
          this.props.history.push(`/trip/${id}`)                 
      }
      handleTitleChange = e => {
        const title = e.target.value
        this.setState({
            title
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
                    <label>Trip Title:</label>
                    <input type='text' name='title' 
                        value={this.state.title} 
                        onChange={this.handleTitleChange} aria-label='Trip Name' required/>
                    <label>Your Name:</label>
                    <input type='text' name='name' 
                        value={this.state.name} 
                        onChange={this.handleNameChange} aria-label='Your Name' required/>
                    <button type='submit'>Create</button>
                </form>
            </div>
        );
    }

}