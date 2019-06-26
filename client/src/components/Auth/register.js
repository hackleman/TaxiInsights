import React from 'react';
import logo from '../../logo.svg';
import NavBar from '../Navbar/navbar';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import './auth.css';

function Register() {
  return (
    <div>
      <NavBar />
      <Container className="Login">
        <h2 className = "Login-header">Sign Up</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Button className = "Login-button">Submit</Button>
        </Form>
      </Container>
    </div>
  );
}

export default Register;
