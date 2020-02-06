import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import { Textbox, Radiobox, Checkbox, Select, Textarea } from 'react-inputs-validation';

//FormMain
const FormMain = (props) =>{
    
    return(
        <form id="form">
            { props.formData && props.formData.map((item, i) => {
                return(
                    <div key={ i }>
                        <label htmlFor="name">お名前 <span className="required">必須</span></label>
                        <Textbox
                            attributesInput={{
                                id: 'name',
                                name: 'name',
                                type: 'text',
                            }}
                            value={ item.name }
                            onBlur={(e) => {}}
                            validationOption={{
                                name: 'name',
                                check: true,
                                required: true,
                            }}
                        />

                        <label htmlFor="zip">郵便番号 <span className="required">必須</span></label>
                        <Textbox
                            attributesInput={{
                                id: 'zip',
                                name: 'zip',
                                type: 'text',
                            }}
                            value={ item.zip }
                            onBlur={(e) => {}}
                            onKeyUp={(e) => {}}
                            validationOption={{
                                name: 'zip',
                                check: true,
                                required: true,
                                min: 7,
                                max: 8
                            }}
                        />
                        
                        <label htmlFor="prefectures">都道府県 <span className="required">必須</span></label>
                        <Textbox
                            attributesInput={{
                                id: 'prefectures',
                                name: 'prefectures',
                                type: 'text',
                            }}
                            value={ item.prefectures }
                            onBlur={(e) => {}}
                            validationOption={{
                                name: 'prefectures',
                                check: true,
                                required: true,
                            }}
                        />
                        
                        <label htmlFor="city">市区町村 <span className="required">必須</span></label>
                        <Textbox
                            attributesInput={{
                                id: 'city',
                                name: 'city',
                                type: 'text',
                            }}
                            value={ item.city }
                            onBlur={(e) => {}}
                            validationOption={{
                                name: 'city',
                                check: true,
                                required: true,
                            }}
                        />
                        
                        <label htmlFor="other">以降の住所 <span className="required">必須</span></label>
                        <Textbox
                            attributesInput={{
                                id: 'other',
                                name: 'other',
                                type: 'text',
                            }}
                            value={ item.other }
                            onBlur={(e) => {}}
                            validationOption={{
                                name: 'other',
                                check: true,
                                required: true,
                            }}
                        />
                        
                        <label htmlFor="apartment">マンション名等</label>
                        <Textbox
                            attributesInput={{
                                id: 'apartment',
                                name: 'apartment',
                                type: 'text',
                            }}
                            value={ item.apartment }
                            validationOption={{
                                name: 'apartment',
                                check: false,
                                required: false,
                            }}
                        />
                    </div>
                )
            }) }
            
            <input type="submit" value="確認" onClick={ props.goToConfirm }/>
        </form>
    )
}

export default FormMain