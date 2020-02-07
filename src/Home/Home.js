import React from 'react';
import './Home.css'
import {Link, Route} from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <header>
                <h1>iPlan</h1>
            </header>
            <section className="description">
                <p>Welcome to iPlan. 
                <br />
                Your Smart Trip Planner. 
                <br />
                iPlan is an easy and convenient way to collaborate with friends and 
                divide up tasks to plan your next trip.
                <br /> 
                Get started by creating Your next adventure!</p>
            </section>
            
            <section className="home-buttons">
                <Route>
                    <Link to='/create'><button className="create">Create a Trip!</button></Link>
                    <Link to='/join'><button className="join">Join a Trip!</button></Link>
                </Route>
                
            </section>
        </div>
    )
}