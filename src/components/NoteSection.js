import React from 'react';
import NoteContent from './NoteContent.js';
import NoteListControls from './NoteListControls.js'
import NoteForm from './Noteform.js'

const NoteSection = props => {
  let data = props.notes.map(notes => {
    return (
      <div>
        <NoteContent
          id = {notes.id}
          body = {notes.body}
          timeDate = {notes.updatedAt}
          selectedId = {props.selectedNoteId}
        />
      </div>
    );
  });

  return(
    <div>
      <NoteForm></NoteForm>
      {data}
    </div>
  );
};

export default NoteSection;

/*
import NoteListControls from './NoteListControls.js';
<NoteListControls body = {notes.body}></NoteListControls>
let data = props.notes.map(notes => {
  return (
    <Notes
      id = {notes.id}
      body = {notes.body}
    />
  );
});

<NoteContent
  id = {notes.id}
  body = {notes.body}
  timeDate = {notes.updatedAt}
/>
*/
