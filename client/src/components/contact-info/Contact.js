import "./contact.scss";
import Jumbal from "./Jumbotron";
import React, { Component } from 'react';
import axios from 'axios';

//form validation
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.onChangeFullName = this.onChangeFullName.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeComments = this.onChangeComments.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      fullName : "",
      phoneNumber: "",
      email: "",
      comments: "",
    }
  }

  onChangeFullName(e) {
    this.setState({
      fullName: e.target.value
    })
  }
  onChangePhoneNumber(e) {
    this.setState({
      phoneNumber: e.target.value
    })
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangeComments(e) {
    this.setState({
      comments: e.target.value
    })
  }

    onSubmit(e) {
    e.preventDefault();

    const contacts = {
      fullName: this.state.fullName,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      comments: this.state.comments,
    }

    console.log(contacts)

    axios.post('/contacts/add', contacts)
      .then(res => console.log(res.data));

    this.setState({
      fullName : "",
      phoneNumber:"",
      email:"",
      comments: "",
    })
}
  
//form
render() {
  return (
    <React.Fragment>
      <Jumbal />
      <form onSubmit={this.onSubmit} className="cmxform form-dislpay">
        <h2>Provide your personal info (won't be published) and add a comment with your feedback</h2>
        <fieldset>
          <div className="form-spacing">
            <label htmlFor="name">Full Name <mark className="requiredInput">*</mark></label>
            <input 
            id="name" 
            minLength="2" 
            name="fullName" 
            type="text" required
            value={this.state.fullName}
            onChange={this.onChangeFullName} 
            />
          </div>
          
          <div className="form-spacing">
            <label htmlFor="email">Email <mark className="requiredInput">*</mark></label>
            <input 
            id="email" 
            type="text" 
            name="email" 
            required
            value={this.state.email}
            onChange={this.onChangeEmail}
             />
          </div>
          <div className="form-spacing">
            <label htmlFor="phone">Phone Number <mark className="requiredInput">*</mark></label>
            <input 
            type="number" 
            id="phone" 
            name="phoneNumber" 
            required 
            value={this.state.phoneNumber}
            onChange={this.onChangePhoneNumber}/>
          </div>
          <div className="form-spacing">
            <label htmlFor="comment">Your comment <mark className="requiredInput">*</mark></label>
            <textarea 
            className="form-comment" 
            id="comments" 
            name="comments" 
            required
            value={this.state.comments}
            onChange={this.onChangeComments}>
            </textarea>
          </div>
          <div className="form-spacing">
            <button type="submit" value="Create contact" className="btn btn-primary mb-2">submit</button>
          </div>
        </fieldset>
      </form>
    </React.Fragment>
  )
}
    }