import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

//components
import Home from './home'
import About from './about'
import Form from './form'
import NoMatch from './nomatch'

//Main Component
const Main = (props) =>{
    return(
        <main className="main">
            <nav>
                <ul className="links">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/friends'>Friends</Link></li>
                </ul>
            </nav>
            
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/form' render={() => <Form ajaxSubmit={ props.ajaxSubmit } returnForm={ props.returnForm } form={ props.form } confirmVisible={ props.confirmVisible } />} />
                <Route path='*' component={NoMatch} />
            </Switch>
        </main>
    )
}

export default Main