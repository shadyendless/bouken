import React from 'react';
import { Link, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Navigation from './components/navigation';

const App = () => (
    <div>
        <Navigation />
        <div>
            <Route exact path="/" component={Homepage} />
        </div>
    </div>
);

export default App;