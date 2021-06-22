import React from 'react';
import { Switch,Route} from 'react-router-dom';

import Section from '../components/Section';
import Home,{ Futebol } from '../Screens/Home';
import Login from '../Screens/Login';

export default function Routes(){
    return (
        <Switch>
          <Route exact path="/" component={Home}>
            <Section children={<Home/>}/>
          </Route>

          <Route path="/futebol" component={Futebol}>
            <Section children={<Futebol/>} />
          </Route>

          <Route path="/Login" component={Login}>
            <Login/>
          </Route>

          <Route path="/aposta" component={Login}>
            <Login/>
          </Route>
      </Switch>
    );
}