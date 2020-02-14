import React, { Component } from 'react';
import ListPersonsComponent from './ListPersonsComponent';
class EMBLAPP extends Component {
    render() {
        return (
            <div>
              <h1>EMBL Application</h1>
              <ListPersonsComponent/>
              </div>
        )
    }
}
export default EMBLAPP