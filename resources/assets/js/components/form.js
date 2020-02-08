import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

//components
import FormMain from "./formMain";
import Confirm from "./confirm";

//Form
const Form = props => {
  function gotop(e) {
    e.preventDefault();
    rsScroller.scrollToTop();
  }

  const { title, rendering } = props.confirmVisible ? {
    title: 'Confirm',
    rendering: <Confirm {...props.confirm} />,
  } : {
    title: 'Form',
    rendering: <FormMain {...props.formMain} />,
  };

  return (
    <div>
      <h2>{title}</h2>
      {rendering}
    </div>
  );
};

export default Form;
