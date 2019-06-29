import React, { Component } from 'react';
import axios from 'axios';
import Zoom from 'react-reveal/Zoom';

import './contact.css';

class Contact extends Component {

  state = {
    name: '',
    email: '',
    message: '',
    sent: false,
    
  }

  onChange = e => {
    this.setState({ [e.target.name] : e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();

    const { name, email, message } = this.state;

    let data = {
      name,
      email,
      message
    }

    axios.post('API_URI', data)
      .then( res => {
        this.setState({ sent: true }, this.resetForm())
      })
      .catch( () => {
        console.log('Message nost sent');
      })

    console.log(data);
  }
  
  resetForm = () => {
    this.setState({
      name: '',
      message: '',
      email: ''
    })
  }


  render() {
    return (
      <div className = "mainlogin messages">
          <div className = "container">
          <Zoom>
            <div className="login-container messages">
              <div className = "loginheader">Send Me A Message!</div>
              <div className = "logincontent">
                <div className = "loginimage">
                  <img  />
                </div>
                <div className = "loginform">
                  <div className = "loginformgroup">
                    <label htmlFor="name">Name</label>
                    <input type="text" onChange={this.onChange} name="name" placeholder="John Doe"/>     
                  </div>
                  <div className = "loginformgroup">
                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={this.onChange} name="email" placeholder="john.doe@gmail.com"/>     
                  </div>
                  <div className = "loginformgroup ">
                    <label htmlFor="message">Message</label>
                    <textarea rows = '4' cols = '50' className = "messagetext" onChange={this.onChange} />     
                  </div>
                </div>
                <div className = "loginfooter">
                  <button type= "button" className="loginbtn" onClick = {this.onSubmit}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
            </Zoom>
            </div>
            </div>
     
    );
  } 
}

export default Contact;
