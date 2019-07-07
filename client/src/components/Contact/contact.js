import React, { Component } from 'react';
import axios from 'axios';
import Fade from 'react-reveal/Fade';

//Redux imports
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { closeMenu } from '../../actions/route';
import '../Auth/auth.scss';

class Contact extends Component {

  state = {
    name: '',
    email: '',
    message: '',
    sent: false,
    
  }
  
  static propTypes = {
    closeMenu: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.closeMenu();
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
        console.log('Message not sent');
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
      <div className = "mainlogin">
      <div className = "container">
        <Fade>
        <div className="login-container">
         
          <div className = "logincontent">
            <div className = "loginform">
              <div className = "loginformgroup">
                <label htmlFor="username">Username</label>
                <input type="text" onChange={this.onChange} name="username" placeholder="username"/>     
              </div>
              <div className = "loginformgroup">
                <label htmlFor="password">Password</label>
                <input type="text" onChange={this.onChange} name="password" placeholder="********"/>     
              </div>
            </div>
            <div className = "loginfooter">
              <button type= "button" className="loginbtn" onClick = {this.onSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
        </Fade>
        </div>
        </div>
     
    );
  } 
}

const mapStateToProps = state => ({
})

export default connect(
  mapStateToProps,
  { closeMenu }
)(Contact);

