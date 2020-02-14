import React, { Component } from 'react';
import PersonDataService from './service/PersonDataService';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PersonComponent from './PersonComponent';
class ListPersonsComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            persons: [],
            message: null
        }
        this.refreshPersons = this.refreshPersons.bind(this)
        this.deletePersonClicked = this.deletePersonClicked.bind(this)
        this.updatePersonClicked = this.updatePersonClicked.bind(this)
        this.addPersonClicked = this.addPersonClicked.bind(this)
    }
    componentDidMount() {
        this.refreshPersons();
    }
    refreshPersons() {
        PersonDataService.retrieveAllPersons()
            .then(
                response => {
                    console.log(response);
                    this.setState({ persons: response.data.content })
                }
            )
    }

    deletePersonClicked(id) {
        PersonDataService.deletePerson(id)
            .then(
                response => {
                    this.setState({ message: `Delete of person ${id} Successful` })
                    this.refreshPersons()
                }
            )
    }
    
    updatePersonClicked(id) {  
        console.log('update ' + id)
        this.props.history.push(`/persons/${id}`)
    }

    addPersonClicked() {
        this.props.history.push(`/persons/-1`)
    }

    render() {
        return (
            <div className="container">
                <h3>All Persons</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>                            
                            <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>Favourite Color</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.persons.map(
                                    person =>
                                        <tr key={person.id}>
                                            <td>{person.id}</td>
                                            <td>{person.firstName}</td>
                                            <td>{person.lastName}</td>
                                            <td>{person.age}</td>
                                            <td>{person.favouriteColor}</td>
                                            <td><button className="btn btn-warning" onClick={() => this.deletePersonClicked(person.id)}>Delete</button></td>
                                            <td><button className="btn btn-success" onClick={() => this.updatePersonClicked(person.id)}>Update</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>                
                <div className="row">
                    <button className="btn btn-success" onClick={this.addPersonClicked}>Add</button>
                </div>
            </div>
        )
    }
}
export default ListPersonsComponent