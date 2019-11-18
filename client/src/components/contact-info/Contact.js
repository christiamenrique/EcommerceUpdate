import React from "react";
import "./contact.scss";
import Jumbal from "./Jumbotron";

//form validation
function Contact(props) {
  const formValidation = () => {
    const errorFields = [];
    const fullName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phone").value;
    const comments = document.getElementById("comments").value;
    //if is not field it will alert that it needs a name, email, phone, comments
    if (fullName === '') {
      errorFields.push('name');
    }

    if (email === '') {
      errorFields.push('email');
    }

    if (phoneNumber === '') {
      errorFields.push('phone');
    }

    if (comments === '') {
      errorFields.push('comments')
    }
    if (errorFields.length) {
      alert(`Please fill out the following fields: ${errorFields.join(', ')}`);
    } else {
      alert(`Thank you ${fullName} we have recieve your message`);
    }
  }
//form
  return (
    <React.Fragment>
      <Jumbal />
      <form className="cmxform form-dislpay" id="contactForm" method="post" action="/contacts/add">
        <h2>Provide your personal info (won't be published) and add a comment with your feedback</h2>
        <fieldset>
          <div className="form-spacing">
            <label htmlFor="name">Full Name <mark className="requiredInput">*</mark></label>
            <input id="name" minLength="2" name="fullName" type="text" required />
          </div>
          <div className="form-spacing">
            <label htmlFor="email">Email <mark className="requiredInput">*</mark></label>
            <input id="email" type="email" name="email" required />
          </div>
          <div className="form-spacing">
            <label htmlFor="phone">Phone Number <mark className="requiredInput">*</mark></label>
            <input type="number" id="phone" name="phoneNumber" required />
          </div>
          <div className="form-spacing">
            <label htmlFor="comment">Your comment <mark className="requiredInput">*</mark></label>
            <textarea className="form-comment" id="comments" name="comments" required></textarea>
          </div>
          <div className="form-spacing">
            <button onClick={formValidation} type="submit" className="btn btn-primary mb-2">submit</button>
          </div>
        </fieldset>
      </form>
    </React.Fragment>
  )
}


export default Contact;
