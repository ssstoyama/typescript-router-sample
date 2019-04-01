import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'

import './App.css';

const App: React.SFC = () => (
  <BrowserRouter>
  <div className="App">
    <Route exact path="/" component={ComponentA} />
    <Route path="/a" component={ComponentA} />
    <Route path="/b" render={props => <ComponentB text={'Bのコンポーネント'} {...props} />} />
  </div>
  </BrowserRouter>
)

export default App;
