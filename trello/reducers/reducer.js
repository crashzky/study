const initialState = {
    columns: [
        {
            name: 'Design',
            childrens: [
                {
                    title: 'Old fashioned recipe for preventing allergies and chemical sensitivities',
                    tags: ['yellow']
                },
                {
                    title: 'Home business advertising ideas',
                    tags: ['blue', 'red', 'purple', 'green']
                },
                {
                    title: 'Cosmetic surgery abroad making the right choice',
                    tags: ['blue']
                }
            ]
        },
        {
            name: 'Prototip',
            childrens: [
                {
                    title: 'Home business advertising ideas',
                    tags: ['blue', 'red', 'purple']
                },
                {
                    title: 'Unmatched toner cartridge quality 20 less than oem price',
                    tags: ['blue', 'yellow']
                },
                {
                    title: 'How to look up',
                    tags: ['green']
                }
            ]
        }
    ]
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
        default:
            return state;
    }
}