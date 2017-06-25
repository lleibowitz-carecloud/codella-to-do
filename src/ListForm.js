import React, { Component } from 'react';

// Create a Form so we can get started to creating our list
// Teach about Creating a Form and the associated props for an input tag

class ListForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: ""
      }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    }
    
  onSubmit(event) {
    event.preventDefault()
    alert(this.state.name + "List has been created") 
  }
  
  onChange(event) {
    this.setState({name: event.target.value})
  }
    
  render() {
    return (
    <div>
      <h1> Create a new List </h1>
        <form onSubmit={this.onSubmit}>
          <label> Form Name
          <input
            name='name'
            type='text'
            onChange={this.onChange}
            value={this.state.name} />
            </label>
          <input
            type='submit'
            defaultValue="Submit" />
        </form>
      </div>
    );
  }
}

export default ListForm;
