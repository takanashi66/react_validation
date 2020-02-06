import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

//components
import FormMain from './formMain'
import Confirm from './confirm'

//Form
const Form = (props) =>{
    
    function gotop(e){
        e.preventDefault();
        rsScroller.scrollToTop();
    }
    
    const rendering = props.confirmVisible ? <Confirm formData={ props.formData } returnForm={ props.returnForm } submitFormData={ props.submitFormData } /> : <FormMain goToConfirm={ props.goToConfirm } formData={ props.formData } validate={ props.validate } setValidate={ props.setValidate } hasError={ props.hasError } setHasError={ props.setHasError } />
    const title = props.confirmVisible ? "Confirm" : "Form"
    
    return(
        <div>
            <h2>{ title }</h2>
            { rendering }
        </div>
    )
}

export default Form