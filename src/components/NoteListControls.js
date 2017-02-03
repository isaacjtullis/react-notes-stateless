import React from 'react';


const NoteListControls = props => {
  let notes = props.notes.map(note => {
    if (note.id === props.selectedNoteId) {
      return (<div className="highlightNote"> {note.body} </div>);
    }
  });
  return(
    <div>
      {notes}
    </div>
  );
}
/*
if (props.notes.id === props.selectedNoteId) {
  let data = <div> {props.notes.body} </div>
  return (
    <div>
      {data}
    </div>
  );
} else {
  let data = <div> {"No Content"} </div>
  return (
    <div>
      {data}
    </div>
  );
}
  return(
    <div>
      {data}
    </div>
  )
*/

export default NoteListControls;
