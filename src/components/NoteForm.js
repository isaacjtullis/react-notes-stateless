import React from 'react';

const NoteForm = props => {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <div className="small-12 columns">
        <div className="small-1 columns">
          <button type="fa fa-plus-circle">
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
          </button>
        </div>
        <div className="small-11 columns">
          <input type="text" placeholder="New Note" />
        </div>
      </div>
    </form>
  );
};

export default NoteForm;
