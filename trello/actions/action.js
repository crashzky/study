const setColumnName = (id, name) => ({type: 'SET_COLUMN_NAME', payload: {id, name}});
const setCardTitle = (parent, id, title) => ({type: 'SET_CARD_TITLE', payload: {parent, id, title}});
const createCard = parent => ({type: 'CREATE_CARD', payload: {parent}});
const removeCard = (column, card) => ({type: 'REMOVE_CARD', payload: {column, card}});
const createColumn = () => ({type: 'CREATE_COLUMN', payload: {}});
const removeColumn = id => ({type: 'REMOVE_COLUMN', payload: {id}});
const setActive = (column, card) => ({type: 'SET_ACTIVE', payload: {column, card}});
const setActiveNull = () => ({type: 'SET_ACTIVE_NULL'});
const setActiveTags = (column, card, tags) => ({type: 'SET_TAGS', payload: {column, card, tags}});
const updateRequest = request => ({type: 'UPDATE_REQUEST', payload: request});

export {setColumnName, setCardTitle, createCard, removeCard, createColumn, removeColumn, setActive, setActiveNull, setActiveTags, updateRequest};