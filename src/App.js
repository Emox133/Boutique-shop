import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Bag from './components/Bag';
import NotFound from './components/NotFound';
import ClothesList from './components/ClothesList';
import Details from './components/Details';
import Title from './Title'
import './App.css';

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Switch>
          <Route path={'/'} exact component={ClothesList}/>
          <Route path={'/details'} component={Details}/>
          <Route path={'/bag'} component={Bag}/>
          <Route component={NotFound}/>
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;
