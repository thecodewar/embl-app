import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PersonComponent from './PersonComponent';
import ListPersonsComponent from './ListPersonsComponent';
class PersonApp extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={ListPersonsComponent} />
                    <Route path="/persons" exact component={ListPersonsComponent} />
                    <Route path="/persons/:id" component={PersonComponent} />
                </Switch>
            </Router>
        )
    }
}
export default PersonApp