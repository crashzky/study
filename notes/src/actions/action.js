const SetTitle = (id, title) => ({type: 'SET_TITLE', payload: {id, title}});
const SetText = (id, text) => ({type: 'SET_TEXT', payload: {id, text}});
const Add = () => ({type: 'ADD'});
const Remove = (id) => ({type: 'REMOVE', payload: id});

export {SetTitle, SetText, Add, Remove};