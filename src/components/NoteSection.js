import React from 'react';
import NoteListControls from './NoteListControls';
import Notes from './Notes.js';

const NoteSection = props => {
  return(
    <div>
      <NoteListControls></NoteListControls>
    </div>
  );
};

export default NoteSection;

/*
let data = props.notes.map(notes => {
  return (
    <Notes
      id = {notes.id}
      body = {notes.body}
    />
  );
});
*/
