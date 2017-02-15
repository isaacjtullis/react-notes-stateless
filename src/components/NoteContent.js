import React from 'react'

const NoteContent = props => {
  let unhighlighted = 'unhighlighted'
  if (props.id === props.selectedId) {
    unhighlighted = 'highlight-note'
  }

  return (
    <div className={unhighlighted}>
      <div className="note-content">
        <li id={props.id}>
          <button onClick={event=> alert('Note Clicked') }>
            {props.body}
            {props.timeDate}
          </button>
        </li>
      </div>
    </div>
  )
};

export default NoteContent;
