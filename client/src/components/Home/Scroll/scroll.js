import { Component } from 'react';
import { withRouter } from 'react-router'

class ScrollToTop extends Component {
    componentWillUpdate(prevProps) {
      if (this.props.location.pathname !== prevProps.location.pathname) {
        window.scrollTo(0, 0)
      }
    }
  
    render() {
      return this.props.children
    }
  }
  
  export default withRouter(ScrollToTop)