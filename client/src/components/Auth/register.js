import React, {Component} from 'react';
import { Redirect } from "react-router-dom";

// Import redux components
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import { setRegister, clearRoute } from '../../actions/route';
import { clearErrors } from '../../actions/error';
import PropTypes from 'prop-types';

// Import styling
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, Card, Badge, InputGroup, 
  InputGroupAddon
} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { faKey, faEnvelope, faSignature, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

  componentWillUnmount() {
    this.props.clearRoute();
  }

  render() {
    
    if (this.props.isAuthenticated) {
      return <Redirect to='/Charts' />
    }

    return (

      <Container className="Login-container">
        <div className = "Register">
          <Fade>
        <Card className="Card">
        <div className = "Header-container">
          <Badge className = "Header" color="secondary">Register</Badge>
          </div>
          <Form className="Form">
          <Col>
              <FormGroup className = "Formgroup">
                <Label className = "label">Name</Label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend"> 
                    <Button color="bg-light" className = "Button-prepend">
                        <span>
                          <FontAwesomeIcon icon={faSignature} />
                        </span>
                      </Button>
                  </InputGroupAddon>
                  <Input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    onChange={this.onChange}
                  />
                </InputGroup>

              </FormGroup>
            </Col>
            <Col>
              <FormGroup className = "Formgroup">
                <Label className = "label">Username</Label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <Button className = "Button-prepend" color="bg-light" >
                      <span>
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                    </Button>
                  </InputGroupAddon>
                  <Input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="cleverusername"
                    onChange={this.onChange}
                  />
                </InputGroup>

              </FormGroup>
            </Col>
            <Col>
              <FormGroup className = "Formgroup">
                <Label className = "label">Email</Label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <Button className = "Button-prepend" color="bg-light" >
                        <span>
                          <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                      </Button>
                  </InputGroupAddon>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="busystudent@email.com"
                    onChange={this.onChange}
                  />
                </InputGroup>

              </FormGroup>
            </Col>
            <Col >
              <FormGroup className = "Formgroup">
                <Label className = "label" for="examplePassword">Password</Label>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">    
                      <Button className = "Button-prepend" color="bg-light" >
                        <span>
                          <FontAwesomeIcon icon={faKey} />
                        </span>
                      </Button>
                    </InputGroupAddon>
                    <Input 
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="********"
                      onChange={this.onChange}
                    />
                  
                </InputGroup>
              </FormGroup>
            </Col>
            <Button onClick = {this.onSubmit} outline color="primary" size = "md" className = "Submit-mobile">Submit</Button>
            <Button onClick = {this.onSubmit} outline color="primary" size = "lg" className = "Submit-desktop">Submit</Button>
          </Form>
        </Card>
        </Fade>
        </div>
      </Container>
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
