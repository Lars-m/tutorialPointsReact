import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route,  hashHistory, IndexRoute } from 'react-router';
import Home from "./Home";
import JSX_App from "./tasks/jsx/JSX_App"
import ComponentsApp from "./tasks/components/ComponentsApp";
import StateApp from "./tasks/state/StateApp";
import PropsOverview from "./tasks/props/PropsOverview";
import PropsValidation from "./tasks/props/PropsValidation";
import ComponentAPI_App from "./tasks/component/ComponentAPI_App";
import ComponentLifecycleAPP from "./tasks/component/ComponentLifecycleAPP";
import FormsApp from "./tasks/forms/FormsApp";
import EventApp from "./tasks/events/EventApp";
import RefsApp from "./tasks/refs/RefsApp";
import KeysApp from "./tasks/keys/KeysApp";
import App from "./App";

ReactDOM.render(
  (
    <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="jsx" component={JSX_App} />
            <Route path="components" component={ComponentsApp} />
            <Route path="state" component={StateApp} />
            <Route path="propsoverview" component={PropsOverview} />
            <Route path="propsvalidation" component={PropsValidation} />
            <Route path="componentapi" component={ComponentAPI_App} />
            <Route path="componentlifecycle" component={ComponentLifecycleAPP} />
            <Route path="forms" component={FormsApp} />
            <Route path="events" component={EventApp} />
            <Route path="refs" component={RefsApp} />
            <Route path="keys" component={KeysApp} />       
          </Route>
        </Router>),
  document.getElementById('root')
);

