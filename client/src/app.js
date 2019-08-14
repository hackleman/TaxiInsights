import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

// Redux imports
import { Provider } from 'react-redux';
import store from './store';
import PropTypes from 'prop-types';

// Styling
import { CSSTransition,TransitionGroup } from 'react-transition-group';
import './app.scss';

// Component imports
import Home from './components/Home/Home';
import ScrollToTop from './components/Scroll/scroll';
import NavBar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

const Maps = React.lazy(() => import('./components/Maps/mapindex'));
const CostMap = React.lazy(() => import('./components/Maps/CostMap/costmap'));
const TimeMap = React.lazy(() => import('./components/Maps/TimeMap/timemap'));
const CostNorm = React.lazy(() => import('./components/Maps/CostNorm/costnorm'));
const TimeNorm = React.lazy(() => import('./components/Maps/TimeNorm/timenorm'));
const Auth = React.lazy(() => import('./components/Auth/login'));
const Register = React.lazy(() => import('./components/Auth/register'));
const Contact = React.lazy(() => import('./components/Contact/contact'));
const Charts = React.lazy(() => import('./components/Charts/ChartIndex'));
const Chart1 = React.lazy(() => import('./components/Charts/Chart1/Chart1'));
const Chart2 = React.lazy(() => import('./components/Charts/Chart2/Chart2'));
const Chart3 = React.lazy(() => import('./components/Charts/Chart3/Chart3'));
const Chart4 = React.lazy(() => import('./components/Charts/Chart4/Chart4'));

class App extends Component {

  static propTypes = {
    isAuthenticated: PropTypes.bool
  }

  componentDidUpdate() {
    
  }

  render() {
    
    return (
      <Provider store = {store}>
        <BrowserRouter>
        <ScrollToTop>
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key = {location.key}
              timeout={600}
              classNames="fade"
              >
                <div className = "App">
                <NavBar />
                <div className = "mainBody">
                  <Switch location = {location}>
                  <React.Suspense fallback={<p className = "loadingScreen">Loading</p>}>
                    <Route exact path="/" component={Home} /> 
                    <Route exact path="/charts" component={Charts} />
                    <Route exact path="/charts/1" component = {Chart1}
                      // render = {(routeProps) => (
                      //   <Chart1 legendPosition="top"/>
                      // )} 
                      /> 
                      <Route exact path="/charts/2" component = {Chart2}
                      // render = {(routeProps) => (
                      //   <Chart1 legendPosition="top"/>
                      // )} 
                      /> 
                      <Route exact path="/charts/3" component = {Chart3}
                      // render = {(routeProps) => (
                      //   <Chart1 legendPosition="top"/>
                      // )} 
                      /> 
                      <Route exact path="/charts/4" component = {Chart4}
                      // render = {(routeProps) => (
                      //   <Chart1 legendPosition="top"/>
                      // )} 
                      /> 
                    <Route exact path="/maps" component={Maps} />
                    <Route exact path="/maps/costmap"  component={CostMap} />
                    <Route exact path="/maps/timemap"  component={TimeMap} />
                    <Route exact path="/maps/costnorm"  component={CostNorm} />
                    <Route exact path="/maps/timenorm"  component={TimeNorm} />
                    <Route exact path="/login" component={Auth} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/contact" component={Contact} />
                  </React.Suspense>
                  </Switch>   
                </div>
                <Footer />
                </div>
            </CSSTransition>
          </TransitionGroup>
            )} />
         </ScrollToTop>   
        </BrowserRouter>
      </Provider>

    )
  }
}

export default App;