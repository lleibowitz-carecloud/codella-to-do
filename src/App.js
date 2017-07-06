import React, { Component } from 'react';
import './App.css';

// Create a Form so we can get started to creating our list
// Teach about Creating a Form and the associated props for an input tag


class ShowPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: this.props.posts
    }
  this.handleDelete = this.handleDelete.bind(this)
  this.addLike = this.addLike.bind(this)
    }
  
  handleDelete(event) {
  event.preventDefault()
  let array= this.state.postList
  let id = event.target.id  // get the id of the post
  array.splice(id,1) // uses the method 'splice' to remove the item at index, and remove 1 item
  this.setState({postList: array});
}

// <button className="likeButton" type="button" id={post.index} onClick={this.addLike}>Like</button> 
// addLike(event) {
//   event.preventDefault()
//   let array= this.state.postList // get the current list of posts
//   let id= event.target.id // get the id of the post
//   let post= array[id] //get the post at the index
//   console.log(post)
//   post.like++ //increment the like for the post
//   let newArray= this.state.postList // get the new Array with the increment
//   this.setState({postList: newArray}) // save the new array to the state so DOM re-renders
// }

addLike(event) {
  event.preventDefault()
  let array= this.state.postList 
  let id= event.target.id
  let post= array[id]
  if (post.like === 0) {
    console.log(post.like)
    post.like++
  } else {
    post.like--
  }
  let newArray= this.state.postList
  this.setState({postList: newArray})
}
  
  render() { 
    
    const allPosts = (post,index) =>  {
      let date = (new Date()).toDateString()
      post.index= index
      let like = post.like
      let likeImage
      let buttonName
      if (like === 0) {
        buttonName= "Like"
      } else {
        likeImage= "❤️"
        buttonName= "Unlike"
      }
      return <div className="post" id={index} key={index} ><div id="date">📌{' '}{date} <span id="like">{likeImage}</span></div>{' '}{post.message}
      <button className="deleteButton" type="button" id={post.index} onClick={this.handleDelete}>Delete</button>
      <button className="likeButton" type="button" id={post.index} onClick={this.addLike}>{buttonName}</button>
      </div>
}

  let posts = this.state.postList.map(allPosts);

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
        posts: []
      }
    this.handleSubmit = this.handleSubmit.bind(this)
      }
    
    handleSubmit(event) {
      event.preventDefault() 
      let message = event.target.message.value // gets message
      this.setState({message: message})
      let index = Date.now() 
      this.state.posts.push({message: message, key: index, like: 0}) // push the newly created post into the list of posts
      event.target.message.value = ""
    }
    
  render() { 
    
    return (
    <div className="Form">
      <h1> Wall </h1>
        <form id="addPost" onSubmit={this.handleSubmit}>
          <label> Add a message 💬{' '}
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
            defaultValue="submit" />
            </div>
        </form>
        <ShowPosts posts={this.state.posts} />
      </div>
    );
  }
}

export default AddPost;