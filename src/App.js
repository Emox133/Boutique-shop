import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import Bag from './components/Bag/Bag'
import NotFound from './components/NotFound'
import ClothesList from './components/ClothesList'
import Details from './components/Details'
import Discount from './components/Discount/Discount'
import Navigation from './UI/Navigation/Navigation'
import Cockpit from './UI/Cockpit/Cockpit'
import './App.css';

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Navigation />
        <Switch>
          <Route path={'/'} exact component={Cockpit}/>
          <Route path={'/clothes'} component={ClothesList}/>
          <Route path={'/discount'} component={Discount}/>
          <Route path={'/details'} component={Details}/>
          <Route path={'/bag'} component={Bag}/>
          <Route component={NotFound}/>
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;
