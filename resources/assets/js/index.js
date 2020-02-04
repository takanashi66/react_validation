import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import rsScroller from 'react-smooth-scroller'

//components
import Main from './components/main'

class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            count: 10
        };
    }
    
    ajaxSubmit(e){
        e.preventDefault()
        rsScroller.scrollToTarget('test');
        console.log("submit");
    }
    
    render(){
        return(
            <BrowserRouter>
                <div className="wrap">
                    <header>
                        <h1>タイトル!</h1>
                    </header>
                    
                    <Main ajaxSubmit={ this.ajaxSubmit } />
                    
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
