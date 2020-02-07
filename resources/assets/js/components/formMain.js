import React, { Component, useState } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import { Textbox, Radiobox, Checkbox, Select, Textarea } from 'react-inputs-validation';

//FormMain
const FormMain = (props) =>{
    //バリデーション項目のバリデーション結果
    const [hasNameError, setNanmeHasError] = useState(true)
    const [hasEmailError, setEmailHasError] = useState(true)
    const [hasZipError, setZipHasError] = useState(true)
    const [hasPrefecturesError, setPrefecturesHasError] = useState(true)
    const [hasCityError, setCityHasError] = useState(true)
    const [hasOtherError, setOtherHasError] = useState(true)
    const [hasGenderError, setGenderHasError] = useState(true)
    
    //バリデーション結果を反転させて論理 AND
    props.setHasError(!hasNameError && !hasEmailError && !hasZipError && !hasPrefecturesError && !hasCityError && !hasOtherError && !hasGenderError)
    
    return(
        <form id="form" onSubmit={ props.goToConfirm } noValidate>
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
                            validate={props.validate /* バリデーションチェックの有無 */}
                            validationOption={{
                                name: 'name',
                                check: true,
                                required: true,
                            }}
                            validationCallback={res =>{
                                setNanmeHasError(res)
                                props.setValidate(false)
                            }} 
                        />
                    
                        <label htmlFor="email">メールアドレス <span className="required">必須</span></label>
                        <Textbox
                            attributesInput={{
                                id: 'email',
                                name: 'email',
                                type: 'email',
                            }}
                            value={ item.email }
                            onBlur={(e) => {}}
                            onKeyUp={(e) => {}}
                            validate={props.validate /* バリデーションチェックの有無 */}
                            validationOption={{
                                name: 'email',
                                check: true,
                                required: true,
                                customFunc: email => {
                                    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                    if (reg.test(String(email).toLowerCase())) {
                                        return true;
                                    } else {
                                        return 'メールアドレスの形式が正しくありません。';
                                    }
                                }
                            }}
                            validationCallback={res =>{
                                setEmailHasError(res)
                                props.setValidate(false)
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
                            validate={props.validate /* バリデーションチェックの有無 */}
                            validationOption={{
                                name: 'zip',
                                check: true,
                                required: true,
                                min: 7,
                                max: 8,
                                customFunc: zip => {
                                    const reg = /^\d{3}[-]?\d{4}$/;
                                    if (reg.test(String(zip))) {
                                        return true;
                                    } else {
                                        return '数字と-のみ使えます。';
                                    }
                                }
                            }}
                            validationCallback={res =>{
                                setZipHasError(res)
                                props.setValidate(false)
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
                            validate={props.validate /* バリデーションチェックの有無 */}
                            validationOption={{
                                name: 'prefectures',
                                check: true,
                                required: true,
                            }}
                            validationCallback={res =>{
                                setPrefecturesHasError(res)
                                props.setValidate(false)
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
                            validate={props.validate /* バリデーションチェックの有無 */}
                            validationOption={{
                                name: 'city',
                                check: true,
                                required: true,
                            }}
                            validationCallback={res =>{
                                setCityHasError(res)
                                props.setValidate(false)
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
                            validate={props.validate /* バリデーションチェックの有無 */}
                            validationOption={{
                                name: 'other',
                                check: true,
                                required: true,
                            }}
                            validationCallback={res =>{
                                setOtherHasError(res)
                                props.setValidate(false)
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
                        
                        <label htmlFor="gender">性別</label>
                        <Radiobox
                            attributesInput={{
                                id: 'gender',
                                name: 'gender',
                            }}
                            optionList={[
                                { id: 'men', name: '男' },
                                { id: 'women', name: '女' },
                                { id: 'other', name: 'その他' },
                            ]}
                            customStyleContainer={{
                                display: 'flex',
                                justifyContent: 'flex-start'
                            }}
                            value={ item.gender }
                            customStyleOptionListItem={{ marginRight: '20px' }}
                            onChange={() =>{}}
                            onBlur={() => {}}
                            validate={props.validate /* バリデーションチェックの有無 */}
                            validationCallback={res =>{
                                setGenderHasError(res)
                                props.setValidate(false)
                            }} 
                            validationOption={{
                                name: 'gender',
                                check: true,
                                required: true
                            }}
                        />
                        
                        <label htmlFor="remarks">備考</label>
                        <Textarea
                            attributesInput={{
                                id: 'remarks',
                                name: 'remarks',
                                type: 'text',
                            }}
                            value={ item.remarks }
                            validationOption={{
                                name: 'remarks',
                                check: false,
                                required: false,
                            }}
                        />
                    </div>
                )
            }) }
            
            <input type="submit" value="確認" onClick={props.submitFormData}/>
        </form>
    )
}

export default FormMain