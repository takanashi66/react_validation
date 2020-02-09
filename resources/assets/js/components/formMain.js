import React, { useState, useEffect } from "react";

import { Textbox, Radiobox, Textarea } from "react-inputs-validation";

const NameTextBox = ({ value, onChange, validationCallback }) => (
  <Textbox
    attributesInput={{
      id: "name",
      name: "name",
      type: "text"
    }}
    value={value}
    onChange={onChange}
    onBlur={e => {}}
    validationOption={{
      name: "name",
      check: true,
      required: true
    }}
    validationCallback={validationCallback}
  />
);

const validationEmail = email => {
  const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (reg.test(String(email).toLowerCase())) {
    return true;
  } else {
    return "メールアドレスの形式が正しくありません。";
  }
};

const EmailTextBox = ({ value, onChange, validationCallback }) => (
  <Textbox
    attributesInput={{
      id: "email",
      name: "email",
      type: "email"
    }}
    value={value}
    onChange={onChange}
    onBlur={e => {}}
    onKeyUp={e => {}}
    validationOption={{
      name: "email",
      check: true,
      required: true,
      customFunc: validationEmail
    }}
    validationCallback={validationCallback}
  />
);

const validationZip = zip => {
  const reg = /^\d{3}[-]?\d{4}$/;
  if (reg.test(String(zip))) {
    return true;
  } else {
    return "数字と-のみ使えます。";
  }
};

const ZipTextBox = ({ value, onChange, validationCallback }) => (
  <Textbox
    attributesInput={{
      id: "zip",
      name: "zip",
      type: "text"
    }}
    value={value}
    onChange={onChange}
    onBlur={e => {}}
    onKeyUp={e => {}}
    validationOption={{
      name: "zip",
      check: true,
      required: true,
      min: 7,
      max: 8,
      customFunc: validationZip
    }}
    validationCallback={validationCallback}
  />
);

const PrefectureTextBox = ({ value, onChange, validationCallback }) => (
  <Textbox
    attributesInput={{
      id: "prefectures",
      name: "prefectures",
      type: "text"
    }}
    value={value}
    onChange={onChange}
    onBlur={e => {}}
    validationOption={{
      name: "prefectures",
      check: true,
      required: true
    }}
    validationCallback={validationCallback}
  />
);

const CityTextBox = ({ value, onChange, validationCallback }) => (
  <Textbox
    attributesInput={{
      id: "city",
      name: "city",
      type: "text"
    }}
    value={value}
    onChange={onChange}
    onBlur={e => {}}
    validationOption={{
      name: "city",
      check: true,
      required: true
    }}
    validationCallback={validationCallback}
  />
);

const OtherTextBox = ({ value, onChange, validationCallback }) => (
  <Textbox
    attributesInput={{
      id: "other",
      name: "other",
      type: "text"
    }}
    value={value}
    onChange={onChange}
    onBlur={e => {}}
    validationOption={{
      name: "other",
      check: true,
      required: true
    }}
    validationCallback={validationCallback}
  />
);

const ApartmentTextBox = ({ value, onChange }) => (
  <Textbox
    attributesInput={{
      id: "apartment",
      name: "apartment",
      type: "text"
    }}
    value={value}
    onChange={onChange}
    validationOption={{
      name: "apartment",
      check: false,
      required: false
    }}
  />
);

const GenderRadioButton = ({
  value,
  validate,
  onChange,
  validationCallback
}) => (
  <Radiobox
    attributesInput={{
      id: "gender",
      name: "gender"
    }}
    optionList={[
      { id: "men", name: "男" },
      { id: "women", name: "女" },
      { id: "other", name: "その他" }
    ]}
    customStyleContainer={{
      display: "flex",
      justifyContent: "flex-start"
    }}
    value={value}
    customStyleOptionListItem={{ marginRight: "20px" }}
    onChange={onChange}
    onBlur={() => {}}
    validationOption={{
      name: "gender",
      check: true,
      required: true
    }}
    validationCallback={validationCallback}
  />
);

const RemarksTextArea = ({ value, onChange }) => (
  <Textarea
    attributesInput={{
      id: "remarks",
      name: "remarks",
      type: "text"
    }}
    onChange={onChange}
    value={value}
    validationOption={{
      name: "remarks",
      check: false,
      required: false
    }}
  />
);

//FormMain
const FormMain = props => {
  const { formData, onSubmitForm, invalid } = props;
  const [validate, setValidate] = useState(false);
  useEffect(() => {
    setValidate(isValid());
  }, []);
  const isValid = () => !Object.values(invalid).some(n => n);
  return (
    <form
      id="form"
      onSubmit={e => {
        e.preventDefault();

        if (validate) {
          onSubmitForm(formData);
        }
      }}
      noValidate
    >
      <div>
        <label htmlFor="name">
          お名前 <span className="required">必須</span>
        </label>
        <NameTextBox
          value={formData.name}
          onChange={value => {
            formData.name = value;
          }}
          validationCallback={res => {
            invalid.name = res;
            setValidate(isValid());
          }}
        />

        <label htmlFor="email">
          メールアドレス <span className="required">必須</span>
        </label>
        <EmailTextBox
          value={formData.email}
          onChange={value => {
            formData.email = value;
          }}
          validationCallback={res => {
            invalid.email = res;
            setValidate(isValid());
          }}
        />

        <label htmlFor="zip">
          郵便番号 <span className="required">必須</span>
        </label>
        <ZipTextBox
          value={formData.zip}
          onChange={value => {
            formData.zip = value;
          }}
          validationCallback={res => {
            invalid.zip = res;
            setValidate(isValid());
          }}
        />

        <label htmlFor="prefectures">
          都道府県 <span className="required">必須</span>
        </label>
        <PrefectureTextBox
          value={formData.prefecture}
          onChange={value => {
            formData.prefecture = value;
          }}
          validationCallback={res => {
            invalid.prefecture = res;
            setValidate(isValid());
          }}
        />

        <label htmlFor="city">
          市区町村 <span className="required">必須</span>
        </label>
        <CityTextBox
          value={formData.city}
          onChange={value => {
            formData.city = value;
          }}
          validationCallback={res => {
            invalid.city = res;
            setValidate(isValid());
          }}
        />

        <label htmlFor="other">
          以降の住所 <span className="required">必須</span>
        </label>
        <OtherTextBox
          value={formData.other}
          onChange={value => {
            setValidate(isValid());
            formData.other = value;
          }}
          validationCallback={res => {
            setValidate(isValid());
            invalid.other = res;
          }}
        />

        <label htmlFor="apartment">マンション名等</label>
        <ApartmentTextBox
          value={formData.apartment}
          onChange={value => {
            formData.apartment = value;
            setValidate(isValid());
          }}
        />

        <label htmlFor="gender">
          性別 <span className="required">必須</span>
        </label>
        <GenderRadioButton
          value={formData.gender}
          onChange={value => {
            formData.gender = value;
            setValidate(isValid());
          }}
        />

        <label htmlFor="remarks">備考</label>
        <RemarksTextArea
          value={formData.remarks}
          onChange={value => {
            formData.remarks = value;
            setValidate(isValid());
          }}
        />
      </div>
      <input type="submit" disabled={!validate} />
    </form>
  );
};

export default FormMain;
