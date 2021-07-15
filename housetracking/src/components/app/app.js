import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

import IndexPage from '../pages/indexPage';
import HousePage from '../pages/housePage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/houses/:id' exact component={HousePage}/>
                <Route path='/' exact component={IndexPage}/>
            </Switch>
        </Router>
    );
};

export default App;