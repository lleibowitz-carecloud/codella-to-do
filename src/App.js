import React, { Component } from 'react';
import './App.css';

// Create a Form so we can get started to creating our list
// Teach about Creating a Form and the associated props for an input tag


class ShowPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: this.props.list,
      likes: 0
    }
  this.handleDelete = this.handleDelete.bind(this)
  this.addLike = this.addLike.bind(this)
    }
  
  handleDelete(event) {
  event.preventDefault()
  let array= this.state.postList
  let id = event.target.id
  array.splice(id,1)
  this.setState({postList: array });
}

addLike(event) {
  event.preventDefault()
  let array= this.state.postList
  let id= event.target.id
  let post= array[id]
  post.like++
  let newArray= this.state.postList
  this.setState({postList: newArray})
  
}
  
  render() { 
    
    const allPosts = (post,index) =>  {
      let date = (new Date()).toDateString()
      post.index= index
      let like = post.like
      return <li className="post" id={index} key={index} ><span id="date">{date}</span>:{' '}{post.message}{' '}<span id="like">{like}</span>
      <button className="deleteButton" type="button" id={post.index} onClick={this.handleDelete}>Delete</button>
      <button className="likeButton" type="button" id={post.index} onClick={this.addLike}>Like</button>
      </li>
}

  let posts = this.state.postList.map(allPosts);
  //Bug if no items are empty there is no indicator - add Condition
if (posts.length === 0) {
  posts = "Add A Item. You have am empty list."
} else {
  posts = this.state.postList.map(allPosts);
}

  return(
    <div className="Wall">
    <ol className="theList">
     {posts}
   </ol>
   </div>
  )
  }
}

// export default ShowList;

class AddPost extends Component {
    constructor(props) {
      super(props);
      this.state = {
        message: "",
        list: []
      }
    this.handleSubmit = this.handleSubmit.bind(this)
      }
    
    handleSubmit(event) {
      event.preventDefault() 
      let message = event.target.message.value // gets message
      this.setState({message: message})
      let index = Date.now() 
      this.state.list.push({message: message, key: index, like: 0}) // push the newly created post into the list of posts
    //bug:  form list does not reset when submitted event.target.reset()   - event.target.name.value.reset()
    }
    
  render() { 
    
    return (
    <div className="Form">
      <h1> Wall </h1>
        <form id="addPost" onSubmit={this.handleSubmit}>
          <label> Add New Post
          <input
            id="message"
            name='message'
            type='textarea'
            defaultValue={this.state.message} />
            </label>
            <div>
          <input
            id="submit"
            type='submit'
            defaultValue="Submit" />
            </div>
        </form>
        <ShowPosts message={this.state.message} list={this.state.list} />
      </div>
    );
  }
}

export default AddPost;




