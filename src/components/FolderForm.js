import React from 'react';

const FolderForm = props => {
  return (
    <div>
      <form
        onSubmit={
          event => {
            event.preventDefault();
            alert('Folder Created');
          }
        }
      >

        <button type="fa fa-plus-circle">
          <i className="fa fa-plus-circle" aria-hidden="true"></i>
        </button>

        <input type="text" placeholder="New Folder" />
      </form>
    </div>
  );
};

export default FolderForm;
