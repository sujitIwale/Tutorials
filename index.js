import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Front from './front';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(
  
    <App />
  ,
  document.getElementById('root')
);


serviceWorker.unregister();
