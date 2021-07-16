import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from '../../reducers/reducer';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

import IndexPage from '../pages/indexPage';
import HousePage from '../pages/housePage';

const App = () => {
    const store = createStore(reducer);

    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path='/houses/:id' exact component={HousePage}/>
                    <Route path='/' exact component={IndexPage}/>
                </Switch>
            </Router>
        </Provider>
    );
};

export default App;