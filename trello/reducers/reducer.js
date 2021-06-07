const initialState = {
    request: '',
    openCard: null,
    columns: []
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'SET_COLUMN_NAME':
            let cols = Array.from(state.columns);
            cols[action.payload.id].name = action.payload.name;

            return {
                ...state,
                columns: cols
            };
        case 'SET_CARD_TITLE':
            let cols2 = Array.from(state.columns);
            (cols2[action.payload.parent].childrens)[action.payload.id].title = action.payload.title;

            return {
                ...state,
                columns: cols2
            };
        case 'CREATE_CARD':
            let cols3 = Array.from(state.columns);
            cols3[action.payload.parent].childrens.push({
                title: 'Write smth...',
                tags: []
            });

            return {
                ...state,
                columns: cols3
            };
        case 'REMOVE_CARD':
            let cols6 = Array.from(state.columns);
            cols6[action.payload.column].childrens.splice(action.payload.card, 1)

            return {
                ...state,
                columns: cols6
            }
        case 'CREATE_COLUMN':
            let cols4 = Array.from(state.columns);
            cols4.push({
                name: 'New column',
                childrens: []
            });

            return {
                ...state,
                columns: cols4
            };
        case 'REMOVE_COLUMN':
            let cols5 = Array.from(state.columns);
            cols5.splice(action.payload.id, 1);

            return {
                ...state,
                columns: cols5
            }
        case 'SET_ACTIVE':
            return {
                ...state,
                openCard: {
                    column: action.payload.column,
                    card: action.payload.card
                }
            }
        case 'SET_ACTIVE_NULL':
            return {
                ...state,
                openCard: null
            }
        case 'SET_TAGS':
            let cols7 = Array.from(state.columns);
            cols7[action.payload.column].childrens[action.payload.card].tags = action.payload.tags;
            return {
                ...state,
                columns: cols7
            }
        case 'UPDATE_REQUEST':
            return {
                ...state,
                request: action.payload
            }
        default:
            return state;
    }
}