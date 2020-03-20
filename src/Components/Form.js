import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments:'',
             topic: 'react'
        }
    }
    
    handlerUserChange =(event) => {
        this.setState({username : event.target.value})
    }

    handlerCommentChange =(event) => {
        this.setState({comments : event.target.value})
    }

    handlerTopicChange = (event) => {
        this.setState({topic : event.target.value})
    }

    handlerSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        //prevent refreshing so the value remain on the page
        //default behaviour is submission prevent it
        event.preventDefault()
    }
    render() {
        // do not need to add this.state in the following
          //  const {username, comments, topic} = this.state
        return (
            <form onSubmit = {this.handlerSubmit}>
                <div>
                   <label>Username</label>
                   <input type ="text" 
                   value = {this.state.username} 
                   onChange = {this.handlerUserChange}></input>
                </div>
                <div>
                    <label>comments</label>
                    <textarea type ="text" 
                    value = {this.state.comments}
                    onChange = {this.handlerCommentChange}></textarea>
                </div>
                <div>
                    <label>topic</label>
                    <select value = {this.state.topic}
                    onChange = {this.handlerTopicChange}>
                        <option value="react">react</option>
                        <option value="angular">angular</option>
                        <option value="vue">vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
