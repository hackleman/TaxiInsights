import React, {Component} from 'react';
import { Redirect, Link } from "react-router-dom";

import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import { setRegister, clearRoute } from '../../actions/route';
import { clearErrors } from '../../actions/error';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import './auth.scss';



class Register extends Component {

  state = {
    username: '',
    email: '',
    password: '',
    name: '',
    msg: null
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    setRegister: PropTypes.func.isRequired,
    clearRoute: PropTypes.func.isRequired
  }

  onChange = e => {
    this.setState({ [e.target.name] : e.target.value });
  }

  
  onSubmit = e => {
    e.preventDefault();
    this.props.clearErrors();

    const { username, email, password } = this.state;

    const newUser = {
      username,
      email,
      password
    }

    this.props.register(newUser);
  }

  componentDidMount() {
    this.props.setRegister();
  }

  componentWillUnmount() {
    this.props.clearRoute();
  }

  render() {
    
    if (this.props.isAuthenticated) {
      return <Redirect to='/Charts' />
    }

    return (
      <div className = "mainlogin">
      <div className = "container">
        <Fade>
          <div className="login-container registration">
          
            <div className = "logincontent">
              <div className = "loginform">
                <div className = "loginformgroup">
                  <label htmlFor="name">Name</label>
                  <input type="text" onChange={this.onChange} name="name" placeholder="username"/>     
                </div>
                <div className = "loginformgroup">
                  <label htmlFor="email">Email</label>
                  <input type="email" onChange={this.onChange} name="email" placeholder="username"/>     
                </div>
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
                  <button type= "button" className="loginbtn register">
                    <Link to='/login'>Login</Link> 
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
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
})

export default connect(
  mapStateToProps,
  { register, clearErrors, setRegister, clearRoute }
)(Register);
