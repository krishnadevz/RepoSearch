import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/App" exact component={App} />
    </Switch>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
