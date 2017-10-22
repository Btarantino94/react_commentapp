import React, { Component } from 'react'; //import React from 'react' is the above is a default import. 
//brings in the main React library so we can start work.
//component is composed of layout code and behavoral code.
import Commentbox from './Commentbox';
import './App.css';
//class is a reusable chunk of code. In this particular code Im pulling the functionality from other classes by calling extends.
class App extends Component {
    constructor(){
      //When used in a constructor, the super keyword appears alone and must be used before the this keyword is used.
      // The super keyword can also be used to call functions on a parent object.
      //basically super gives you access to state.
      super();
      //.bind changes what "this" is referencing.
      this.getComment = this.getComment.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.state = {
        currentComment: '',
        comments: ['first comment', 'second comment', 'third comment']
      }
    }

    getComment(event){
      var comment = event.target.value;
      this.setState({
        //triggering a setState on a component will not only cause cascaded rendering but will also cause repeated rendering in components.
        currentComment: comment
      })
    }
    //Handle a click event on a button
    handleClick(event) {
      //.slice method is used to extract a section of an array
      var commentArray = this.state.comments.slice();
      commentArray.push(this.state.currentComment);
      this.setState({
        currentComment: '',
        comments: commentArray
      });
    }
    //putting everything to the page.
  render() {
    var commentList = this.state.comments.map(function(comment, i){
      return(<Commentbox key={i} comment={comment}/>);
    });

    return (
      <div class="appRoot">
      <h1>comment App</h1>
      <section id="getcomments">
      <label htmlFor="comment">Post Your Comment:</label>
      <input type="text" id="comment" name="comment" onchange={this.getComment} value={this.state.currentComment}/>
      <button id="addBtn" onClick={this.handleClick} >Add</button>
      </section>
      <section id="showcomments">
      <h2>There is {commentList.length} comment(s)</h2>
      {commentList}
      </section>
      </div>
    );
  }
}
//putting app out publically. 
export default App;
