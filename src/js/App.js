import React from 'react';
import { Link, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

const App = () => (
    <div>
        <div>
            <Route exact path="/" component={Homepage} />
        </div>
    </div>
);

export default App;