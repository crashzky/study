const initialState = {
    activeState: 4
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_ACTIVE_STATE':
            return {
                ...state,
                activeState: action.payload
            };
        default:
            return state;
    }
};

export default reducer;