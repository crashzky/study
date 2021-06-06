const setColumnName = (id, name) => ({type: 'SET_COLUMN_NAME', payload: {id, name}});
const setCardTitle = (parent, id, title) => ({type: 'SET_CARD_TITLE', payload: {parent, id, title}});
const createCard = parent => ({type: 'CREATE_CARD', payload: {parent}});
const createColumn = () => ({type: 'CREATE_COLUMN', payload: {}});
const removeColumn = id => ({type: 'REMOVE_COLUMN', payload: {id}});
const setActive = (column, card) => ({type: 'SET_ACTIVE', payload: {column, card}});
const setActiveNull = () => ({type: 'SET_ACTIVE_NULL'});

export {setColumnName, setCardTitle, createCard, createColumn, removeColumn, setActive, setActiveNull};