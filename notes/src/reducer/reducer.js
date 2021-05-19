/*eslint-disable*/
const initialState = {
    notes: [
        {
            title: 'My first note',
            text: 'Woooh! It is my first note!'
        }
    ],
    openPage: 0,
    openNote: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_TITLE':
            let delta = Array.from(state.notes);
            delta[action.payload.id].title = action.payload.title;
            return {
                ...state,
                notes: delta
            };
        case 'SET_TEXT':
            let delta1 = Array.from(state.notes);
            delta1[action.payload.id].text = action.payload.text;
            return {
                ...state,
                notes: delta1
            };
        case 'ADD':
            let delta2 = Array.from(state.notes);
            delta2.push({
                title: '',
                text: ''
            });
            return {
                ...state,
                notes: delta2
            };
        case 'REMOVE':
            let delta3 = Array.from(state.notes);
            delta3.splice(action.payload, 1);
            return {
                ...state,
                notes: delta3
            };

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
            
            //open note
        case 'SET_OPEN':
            console.log(action.payload);
            return {
                ...state,
                openNote: action.payload
            };
        default:
            return state;
    }
};

export default reducer;