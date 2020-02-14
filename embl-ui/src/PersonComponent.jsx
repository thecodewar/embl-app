import React, { Component } from 'react';
import PersonDataService from './service/PersonDataService';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class PersonComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
        id: this.props.match.params.id,
        firstName: '',
        lastName: '',
        age: '',
        favouriteColor: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.validate = this.validate.bind(this)
}
componentDidMount() {
    console.log(this.state.id)
    if (this.state.id == -1) {
        return
    }
    PersonDataService.retrievePerson(this.state.id)
        .then(response => this.setState({
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            age: response.data.age,
            favouriteColor:  response.data.favouriteColor
        }))
}

onSubmit(values) {
  console.log(values);
}

validate(values) {
  let errors = {}
  if (!values.firstName) {
      errors.firstName = 'Enter First Name'
  } else if (!values.lastName) {
      errors.lastName = 'Enter Last Name'
  }else if (!values.age) {
    errors.age = 'Enter Age'
  } else if (!values.favouriteColor) {
    errors.favouriteColor = 'Enter Favourite Color' 
  }
  return errors
}

onSubmit(values) {
  let person = {
      id: parseInt(this.state.id),
      firstName: values.firstName,
      lastName: values.lastName,
      age: values.age,
      favouriteColor: values.favouriteColor,     
  }
  if (this.state.id == -1) {
      PersonDataService.createPerson(person)
          .then(() => this.props.history.push('/persons'))
  } else {
      PersonDataService.updatePerson(this.state.id, person)
          .then(() => this.props.history.push('/persons'))
  }
  console.log(values);
}

render() {
    let { id, firstName, lastName, age, favouriteColor } = this.state
     return (
            <Formik
              initialValues={this.state}
              enableReinitialize= "true"
              onSubmit={this.onSubmit}
              validateOnChange={false} 
              validateOnBlur={false} 
              validate={this.validate} 
              render={
                ({
                  values,
                  errors,
                  touched,
                  status,
                  dirty,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  isValid,
                  handleReset,
                  setTouched
                }) => (
                 <Form>
                 <fieldset className="form-group">
                     <label>Id</label>
                     <Field className="form-control" type="text" name="id" disabled />
                 </fieldset>
                 <fieldset className="form-group">
                     <label>First Name</label>
                     <Field className="form-control" type="text" name="firstName" />
                     <ErrorMessage name="firstName" component="div" className="alert alert-warning" />
                 </fieldset>
                 <fieldset className="form-group">
                     <label>Last Name</label>
                     <Field className="form-control" type="text" name="lastName" />
                     <ErrorMessage name="lastName" component="div" className="alert alert-warning" />
                 </fieldset>
                 <fieldset className="form-group">
                     <label>Age</label>
                     <Field className="form-control" type="text" name="age" />
                     <ErrorMessage name="age" component="div" className="alert alert-warning" />
                 </fieldset>
                 <fieldset className="form-group">
                     <label>Favourite Color</label>
                     <Field className="form-control" type="text" name="favouriteColor" />
                     <ErrorMessage name="favouriteColor" component="div" className="alert alert-warning" />
                 </fieldset>
                 <button className="btn btn-success" type="submit">Save</button>
             </Form>
              )} />
              )
}
}
export default PersonComponent