const initialState = {
    notes: [
        {
            title: 'My first note',
            text: 'Woooh! It is my first note!'
        }
    ],
    openPage: 0
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_TITLE':
            state.notes[action.payload.id].title = action.payload.title;
            return state;
        case 'SET_TEXT':
            state.notes[action.payload.id].text = action.payload.text;
            return state;
        case 'ADD':
            state.notes.push({
                title: '',
                text: ''
            });
            return state;
        case 'REMOVE':
            state.notes.splice(action.payload, 1);
            return state;

            //router functions

        case 'OPEN_NOTES':
            return {
                ...state,
                openPage: 0
            };
        case 'OPEN_ARCHIVE':
            return {
                ...state,
                openPage: 1
            };
        default:
            return state;
    }
};

export default reducer;