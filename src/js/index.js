import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import 'normalize.css';

import App from './App';

ReactDOM.render((
    <Router>
        <App />
    </Router>
), document.getElementById('app'));