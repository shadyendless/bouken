import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import '../css/fonts.css';

ReactDOM.render((
    <Router>
        <App />
    </Router>
), document.getElementById('app'));