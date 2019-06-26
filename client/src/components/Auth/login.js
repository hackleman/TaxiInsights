import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import {
  Container, 
  Col, 
  Form,
  FormGroup, 
  Label, 
  Input,
  Button,
} from 'reactstrap';
import NavBar from '../Navbar/navbar';
import {connect} from 'react-redux';
import { login } from '../../actions/auth';
import {clearErrors} from '../../actions/error';
import PropTypes from 'prop-types';
import './auth.css';

class Auth extends Component {

  state = {
    username: '',
    password: '',
    msg: null
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  }

  componentDidMount() {
    
  }

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;

  }
  
  onChange = e => {
    this.setState({ [e.target.name] : e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.clearErrors();

    const { username, password } = this.state;

    const newUser = {
      username,
      password
    }
    console.log(newUser)
    this.props.login(newUser);
  }

  render() {

    return (
      <div>
        <NavBar />
        <Container className="Login">
          <h2 className = "Login-header">Login</h2>
          <Form className="form" onSubmit = {this.onSubmit}>
            <Col>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input
                  type="username"
                  name="username"
                  id="username"
                  placeholder="hordeslayer666"
                  onChange={this.onChange}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="********"
                  onChange={this.onChange}
                />
              </FormGroup>
            </Col>
            <Button className = "Login-button">Submit</Button>
          </Form>
        </Container>
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
  { login, clearErrors }
)(Auth);
