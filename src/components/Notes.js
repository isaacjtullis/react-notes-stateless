import React from 'react';
import NoteForm from './NoteForm.js';

const Notes = props => {
  return (
    <div className="small-5 controls columns">
     <div className="small-5 columns">
       <button><i className="fa fa-sticky-note-o" aria-hidden="true">New Note</i></button>
     </div>
     <div className="small-7 columns">
       <input type="text" placeholder="search"></input>
     </div>
     {props.body}
   </div>
  );
};

export default Notes;
