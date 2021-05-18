const initialState = {
    notes: [
        {
            title: 'My first note',
            text: 'Woooh! It is my first note!'
        }
    ]
};

const reducer = (state = initialState, action) => {
    let delta;
    switch(action.type) {
        case 'SET_TITLE':
            delta = state.notes;
            delta[action.payload.id].title = action.payload.title;
            return {delta};
        case 'SET_TEXT':
            delta = state.notes;
            delta[action.payload.id].text = action.payload.text;
            return {delta};
        case 'ADD':
            delta = state.notes;
            delta.push({
                title: '',
                text: ''
            });
            return {delta};
        case 'REMOVE':
            delta = state.notes;
            delta.splice(action.payload, 1);
            return {delta};
    }
};

export default reducer;