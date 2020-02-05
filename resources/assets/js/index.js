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
            confirmVisible: false,
            form: [{}]
        }
        
        this.ajaxSubmit = this.ajaxSubmit.bind(this)
        this.returnForm = this.returnForm.bind(this)
    }
    
    ajaxSubmit(e){
        e.preventDefault()
        //rsScroller.scrollToTarget('test');
        
        const name = document.querySelector('#form input[name=name]').value
        const zip = document.querySelector('#form input[name=zip]').value
        const prefectures = document.querySelector('#form input[name=prefectures]').value
        const city = document.querySelector('#form input[name=city]').value
        const other = document.querySelector('#form input[name=other]').value
        const apartment = document.querySelector('#form input[name=apartment]').value
        
        this.setState({
            confirmVisible: true,
            form: [{
                name: name,
                zip: zip,
                prefectures: prefectures,
                city: city,
                other: other,
                apartment: apartment
            }]
        })
        
        
    }
    
    returnForm(e){
        e.preventDefault()
        
        this.setState({
            confirmVisible: false
        })
    }
    
    render(){
        return(
            <BrowserRouter>
                <div className="wrap">
                    <header>
                        <h1>タイトル!</h1>
                    </header>
                    
                    <Main ajaxSubmit={ this.ajaxSubmit } returnForm={ this.returnForm } form={ this.state.form } confirmVisible={ this.state.confirmVisible }/>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
