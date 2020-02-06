import React, { Component, useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import rsScroller from 'react-smooth-scroller'

//components
import Main from './components/main'

const App = () => {
    //確認画面の表示フラグ
    const [confirmVisible, setConfirmVisible] = useState(false)
    //入力値
    const [formData, setFormData] = useState([{}])
    //エラーメッセージ
    const [formMsg, setFormMsg] = useState([{}])
    
    //確認画面へ
    const goToConfirm = (e) => {
        e.preventDefault()
        //rsScroller.scrollToTarget('test');
        
        //フォームの入力データを取得
        const name = document.querySelector('#form input[name=name]').value
        const zip = document.querySelector('#form input[name=zip]').value
        const prefectures = document.querySelector('#form input[name=prefectures]').value
        const city = document.querySelector('#form input[name=city]').value
        const other = document.querySelector('#form input[name=other]').value
        const apartment = document.querySelector('#form input[name=apartment]').value
        
        //取得した入力データをstateに保存
        setFormData([{
            name: name,
            zip: zip,
            prefectures: prefectures,
            city: city,
            other: other,
            apartment: apartment
        }])
        
        //確認画面を表示
        setConfirmVisible(true)
    }
    
    //入力画面に戻る
    const returnForm = (e) => {
        e.preventDefault()
        
        //確認画面を非表示
        setConfirmVisible(false)
    }
    
    //データ送信
    const submitFormData = (e) => {
        e.preventDefault()
        
        //確認画面を非表示
        setConfirmVisible(false)
        
        //取得した入力データをstateから削除
        setFormData([{}])
    }
    
    return(
        <BrowserRouter>
            <div className="wrap">
                <header>
                    <h1>React Router実験</h1>
                </header>
                
                <Main 
                    goToConfirm={ goToConfirm } 
                    returnForm={ returnForm } 
                    submitFormData={ submitFormData } 
                    formData={ formData } 
                    confirmVisible={ confirmVisible }
                />
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
