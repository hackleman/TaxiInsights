import React, { Component } from 'react';
import Section from './Sections/section';
import ScrollBar from '../Scrollbar/scrollbar';
import placeholder from './Sections/placeholder';
import './home.scss'

class Home extends Component {

  state = {
      placeholder: placeholder
  }
  
  
  componentDidMount() {
  }
  
  render() {

    return (
        <div className="landingpage">
 
             <ScrollBar />
             <Section 
                 title="Taxi Companion App."
                 dark={false}
                 header={true}
                 id="main"
                 extra = {true}
                 nobody = {true}
                 page = "/"
                 img = ' taxis '
             /> 

            <Section 
                title="charts"
                subtitle={this.state.placeholder.section2}
                dark={true}
                header={false}
                id="charts"
                page = "/charts"
                img = ' chartimg '
            />

            
            <Section 
                title="Maps"
                subtitle={this.state.placeholder.section4}
                dark={false}
                header={false}
                id="graphs"
                page = "/maps"
                img = ' mapimg '
            />

            <Section 
                title="Login / Register"
                dark={false}
                header={false}
                id="about"
                nobody = {true}
                page = "/login"
            />

        </div>

    )
  }
}

export default Home;