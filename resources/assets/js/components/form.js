import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

//Form
const Form = (props) =>{
    
    function gotop(e){
        e.preventDefault();
        rsScroller.scrollToTop();
    }
    console.log(props);
    
    const rendering = props.confirmVisible ? <Confirm form={ props.form } returnForm={ props.returnForm } /> : <FormMain ajaxSubmit={ props.ajaxSubmit } form={ props.form } />
    const title = props.confirmVisible ? "Confirm" : "Form"
    
    return(
        <div>
            <h2>{ title }</h2>
            { rendering }
        </div>
    )
}

export default Form

const FormMain = (props) =>{
    console.log(props.form);
    return(
        <form action="#" id="form">
            { props.form.map((item, i) => {
                return(
                    <div key={ i }>
                        <label htmlFor="name">お名前 <span className="required">必須</span></label>
                        <input type="text" name="name" id="name" defaultValue={ item.name }/>
                        
                        <label htmlFor="zip">郵便番号 <span className="required">必須</span></label>
                        <input type="text" name="zip" id="zip" defaultValue={ item.zip }/>
                        
                        <label htmlFor="prefectures">都道府県 <span className="required">必須</span></label>
                        <input type="text" name="prefectures" id="prefectures" defaultValue={ item.prefectures }/>
                        
                        <label htmlFor="city">市区町村 <span className="required">必須</span></label>
                        <input type="text" name="city" id="city" defaultValue={ item.city }/>
                        
                        <label htmlFor="other">以降の住所 <span className="required">必須</span></label>
                        <input type="text" name="other" id="other" defaultValue={ item.other }/>
                        
                        <label htmlFor="apartment">マンション名等</label>
                        <input type="text" name="apartment" id="apartment" defaultValue={ item.apartment }/>
                    </div>
                )
            }) }
            
            <input type="submit" value="確認" onClick={ props.ajaxSubmit }/>
        </form>
    )
}

const Confirm = (props) =>{
    return(
        <div>
            <table className="confirm_table">
                
                { props.form.map((item, i) => {
                    return(
                        <tbody key={i}>
                            <tr>
                                <th>お名前</th>
                                <td>{ item.name }</td>
                            </tr>
                            <tr>
                                <th>郵便番号</th>
                                <td>{ item.zip }</td>
                            </tr>
                            <tr>
                                <th>都道府県</th>
                                <td>{ item.prefectures }</td>
                            </tr>
                            <tr>
                                <th>市区町村</th>
                                <td>{ item.city }</td>
                            </tr>
                            <tr>
                                <th>以降の住所</th>
                                <td>{ item.other }</td>
                            </tr>
                            <tr>
                                <th>マンション名等</th>
                                <td>{ item.apartment }</td>
                            </tr>
                        </tbody>
                    )
                }) }
                
            </table>
            
            <div className="return_btn">
                <a href="#" onClick={ props.returnForm }>戻って修正</a>
            </div>
        </div>
    )
}