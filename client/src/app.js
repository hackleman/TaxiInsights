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
import Home from './components/Home/home';
import ScrollToTop from './components/Home/Scroll/scroll';
import NavBar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

const Chart1 = React.lazy(() => import('./components/Charts/Chart1/chart1'));
const Maps = React.lazy(() => import('./components/Maps/mapindex'));
const CostMap = React.lazy(() => import('./components/Maps/CostMap/costmap'));
const TimeMap = React.lazy(() => import('./components/Maps/TimeMap/timemap'));
const CostNorm = React.lazy(() => import('./components/Maps/CostNorm/costnorm'));
const TimeNorm = React.lazy(() => import('./components/Maps/TimeNorm/timenorm'));
const Auth = React.lazy(() => import('./components/Auth/login'));
const Register = React.lazy(() => import('./components/Auth/register'));
const Contact = React.lazy(() => import('./components/Contact/contact'));
const Charts = React.lazy(() => import('./components/Charts/charts'));


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
                    <Route exact path="/charts/1" 
                      render = {(routeProps) => (
                        <Chart1 legendPosition="top"/>
                      )} /> 
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