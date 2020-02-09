import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

//components
import Main from "./components/main";

const App = () => {
  //確認画面の表示フラグ
  const [confirmVisible, setConfirmVisible] = useState(false);
  //バリデーションのフラグ
  const formDataRef = useRef({
    remarks: ""
  });
  //バリデーション項目のバリデーション結果
  const invalidRef = useRef({
    name: true,
    email: true,
    zip: true,
    prefecture: true,
    city: true,
    other: true
  });

  //確認画面へ
  const goToConfirm = () => {
    //確認画面を表示
    setConfirmVisible(true);
  };

  //入力画面に戻る
  const returnForm = e => {
    e.preventDefault();

    //確認画面を非表示
    setConfirmVisible(false);
  };

  //データ送信
  const submitFormData = e => {
    e.preventDefault();
    //確認画面を非表示
    setConfirmVisible(false);

    //取得した入力データをstateから削除
    formDataRef.current = {};
    invalidRef.current = {};
  };

  const form = {
    confirm: {
      formData: formDataRef.current,
      onClickReturn: returnForm,
      onClickSubmit: submitFormData
    },
    formMain: {
      goToConfirm,
      invalid: invalidRef.current,
      formData: formDataRef.current,
      onSubmitForm: goToConfirm
    },
    confirmVisible
  };

  return (
    <BrowserRouter>
      <div className="wrap">
        <header>
          <h1>React Router実験</h1>
        </header>
        <Main form={form} />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
