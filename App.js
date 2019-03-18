
import React, {Component} from 'react';

import { combineReducers, createStore } from 'redux'
import { Provider, connect } from 'react-redux'


import configureStore from './src/store'

 import Root from './src'
const store = configureStore();

//type Props = {};
export default class App extends Component  {
  render() {
    return (
      <Provider store={store}>
     
        <Root/>
       
      </Provider>
      
    );
  }
}
 