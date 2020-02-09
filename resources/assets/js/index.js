import React, { Component, useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import rsScroller from 'react-smooth-scroller'

// 純粋関数は外で定義していいんじゃないかな
//改行を表示
const nl2br = (text) => {
    const regex = /(\n)/g;
    return text.split(regex).map((line, i) =>{
        if(line.match(regex)) {
            return <br key={i} />
        }else{
            return line;
        }
    });
};

//components
import Main from './components/main'
import Confirm from "./components/confirm";
import FormMain from "./components/formMain";

const App = () => {
    //確認画面の表示フラグ
    const [confirmVisible, setConfirmVisible] = useState(false)
    //入力値
    const [formData, setFormData] = useState([{}])
    //バリデーションのフラグ
    const [validate, setValidate] = useState(false)
    const [hasError, setHasError] = useState(false)

    //確認画面へ
    const goToConfirm = (e) => {
        e.preventDefault()
        //rsScroller.scrollToTarget('test');

        //再度バリデーション
        setValidate(true)

        //バリデーションエラーがなければ入力データを取得して確認画面へ遷移
        if(hasError){
            //フォームの入力データを取得
            const name = document.querySelector('#form input[name=name]').value
            const email = document.querySelector('#form input[name=email]').value
            const zip = document.querySelector('#form input[name=zip]').value
            const prefectures = document.querySelector('#form input[name=prefectures]').value
            const city = document.querySelector('#form input[name=city]').value
            const other = document.querySelector('#form input[name=other]').value
            const apartment = document.querySelector('#form input[name=apartment]').value
            const gender = document.querySelector('#form #react-inputs-validation__radiobox_option-men').value
            const remarks = document.querySelector('#form textarea[name=remarks]').value

            //取得した入力データをstateに保存
            setFormData([{
                name: name,
                email: email,
                zip: zip,
                prefectures: prefectures,
                city: city,
                other: other,
                apartment: apartment,
                gender: gender,
                remarks: remarks
            }])

            //確認画面を表示
            setConfirmVisible(true)
        }
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

        //再度バリデーションが走らないように
        setValidate(false)

        //取得した入力データをstateから削除
        setFormData([{}])
    }

    const form = {
        conform: {
            formData,
            nl2br,
            returnForm,
            submitFormData,
        },
        formMain: {
            goToConfirm,
            formData,
            validate,
            setValidate,
            hasError,
            setHasError,
        },
        confirmVisible,
    };

    return(
        <BrowserRouter>
            <div className="wrap">
                <header>
                    <h1>React Router実験</h1>
                </header>
                <Main form={form} />
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
