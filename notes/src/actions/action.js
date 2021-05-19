const setTitle = (id, title) => ({type: 'SET_TITLE', payload: {id, title}});
const setText = (id, text) => ({type: 'SET_TEXT', payload: {id, text}});
const add = () => ({type: 'ADD'});
const remove = (id) => ({type: 'REMOVE', payload: id});

const openNotes = () => ({type: 'OPEN_NOTES'});
const openArchive = () => ({type: 'OPEN_ARCHIVE'});

const setOpenNote = (id) => ({type: 'SET_OPEN', payload: id});

export {setTitle, setText, add, remove, openNotes, openArchive, setOpenNote};