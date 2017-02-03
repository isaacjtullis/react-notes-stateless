import React from 'react'

const NoteContent = props => {
  if (props.id === props.selectedId) {
    let highlightNote =
    <div className="highlight-note">
      <div className="note-content">
        <li id={props.id}>
          <button onClick={event=> alert('Note Clicked') }>
            {props.body}
            {props.timeDate}
          </button>
        </li>
      </div>
    </div>
    return (
      <div>
        {highlightNote}
      </div>
    )
  } else {
    let unHighLightNote  = <div className="note-content"><div className="unhighlight-note">
    <li id={props.id}>
      <button onClick={event=> alert('Note Clicked') }>
        {props.body}
        {props.timeDate}
      </button>
    </li>
    </div>
    </div>
    return (
      <div>
        {unHighLightNote}
      </div>
    )
  }
};

export default NoteContent;
/*
<div className="note-content">
  <li id={props.id}>
    <button onClick={event=> alert('Note Clicked') }>
      {props.body}
      {props.timeDate}
    </button>
  </li>
</div>
<div className="note-content">
  <li id={props.id}>
    <button onClick={event=> alert('Note Clicked') }>
      {props.body}
      {props.timeDate}
    </button>
  </li>
</div>
*/
