import React from 'react';
import Styled from 'styled-components';
import reducer from '../../reducer/reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Sidebar from '../sidebar';
import List from '../list';

const App = () => {
    const store = createStore(reducer);
    
    const Wrapper = Styled.div`
        width: 100%;
        height: 100vh;
        display: grid;
        grid-template-columns: 187px 300px auto;
    `;

    return (
        <Provider store={store}>
            <Wrapper>
                <Sidebar/>
                <List/>
            </Wrapper>
        </Provider>
    );
};

export default App;