import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

//FormMain
const FormMain = (props) =>{
    console.log(props.formData);
    return(
        <form action="#" id="form">
            { props.formData && props.formData.map((item, i) => {
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
            
            <input type="submit" value="確認" onClick={ props.goToConfirm }/>
        </form>
    )
}

export default FormMain