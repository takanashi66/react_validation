import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

//Confirm
const Confirm = (props) =>{
    return(
        <div>
            <table className="confirm_table">
                
                { props.formData && props.formData.map((item, i) => {
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
            
            <div className="link_btn">
                <a href="#" onClick={ props.submitFormData }>入力開始</a>
            </div>
        </div>
    )
}

export default Confirm