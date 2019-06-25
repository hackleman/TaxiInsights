import React, { Component } from 'react';
import Section from './Sections/section';
import ScrollBar from '../Scrollbar/scrollbar';
import placeholder from './Sections/placeholder';
import './home.css'

class Home extends Component {

  constructor() {
      super();
      this.state = {
          placeholder: placeholder
      }
  }

  componentDidMount() {
      console.log(this.state);
  }
  render() {
    return (
        <div>
            <ScrollBar />
            <Section 
                title="Taxi Companion App."
                dark={false}
                id="main"
                extra = {true}
                nobody = {true}
                style = {1}
                page = "/"
            />
            <Section 
                title="charts"
                subtitle={this.state.placeholder.section2}
                dark={true}
                id="charts"
                style = {2}
                page = "/charts"
            />
            <Section 
                title="graphs"
                subtitle={this.state.placeholder.section2}
                dark={false}
                id="graphs"
                style = {5}
                page = "/graphs"
            />
            <Section 
                title="Contact me"
                dark={true}
                id="about"
                style={4}
                nobody = {true}
                page = "/"
                
            />

        </div>

    )
  }
}

export default Home;