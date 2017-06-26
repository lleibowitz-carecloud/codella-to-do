import React, { Component } from 'react';

// Create a Form so we can get started to creating our list
// Teach about Creating a Form and the associated props for an input tag

class ShowList extends Component {
  
  render() {
    let todoEntries = this.props.entries;
    
    const createTasks = (item) =>  {
      return <li key={item.key}>{item.name}</li>
}

let listItems = todoEntries.map(createTasks);
console.log(listItems.length)
//Bug if no items are empty there is no indicator - add Condition
// if (listItems.length === 0) {
//   listItems = "Add A Item. You have am empty list."
// } else {
//   listItems = todoEntries.map(createTasks);
// }

  return(
    <div>
    Items:
    <ol className="theList">
     {listItems}
   </ol>
   </div>
  )
  }
}

class ListForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        lists: []
      }
    this.handleSubmit = this.handleSubmit.bind(this)
      }
    
    handleSubmit(event) {
      event.preventDefault() 
      let item = event.target.name.value 
      this.setState({name: item})
      this.state.lists.push({name: item, key: Date.now()})
    //bug:  form list does not reset when submitted event.target.reset()   - event.target.name.value.reset()
    }
    
  render() { 
    
    return (
    <div>
      <h1> Create a List </h1>
        <form onSubmit={this.handleSubmit}>
          <label> Add Item:
          <input
            name='name'
            type='text'
            defaultValue={this.state.name} />
            </label>
          <input
            type='submit'
            defaultValue="Submit" />
        </form>
        <ShowList entries={this.state.lists}/>
      </div>
    );
  }
}

export default ListForm;