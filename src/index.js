import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DataLayer } from './DataLayer/DataLayer' 
import reducer, { initialState } from './DataLayer/reducer' 

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={ initialState } reducer = {reducer}>
      <App/>
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);

