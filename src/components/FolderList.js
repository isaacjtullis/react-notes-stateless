import React from 'react';
import Folder from './Folder.js';
import FolderForm from './FolderForm.js';
/*
import Notes from './Notes.js';
import FolderForm from './FolderForm.js'
import NoteForm from './NoteForm.js'
<Folder
  key = {folder.id}
  name = {folder.name}
  notes = {folder.notes}
/>
*/
const FolderList = props => {
  let folders = props.folders.map(folder => {
    if (folder.id === props.selectedFolderId) {
       return(<div className="folder-highlight"> {folder.name} </div>);
    } else {
       return(<div className=""> {folder.name} </div>);
    }
  });

  return(
    <div className="folderlists">
      <ul>
        <div className="small-12 columns">
          {<ul>
            {folders}
          </ul>}
          <div className="small-12 columns">
            <FolderForm></FolderForm>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default FolderList;

/*
const FolderList = props => {
  let folders = props.folders.map(folder => {
    if (folder.id === props.selectedFolderId) {
      let folderData = <div className="folder-highlight"> {folder.name} </div>
      return (
        <li id={props.id}>
          <button onClick={event=> alert('Folder Clicked') }>
            {folderData}
          </button>
        </li>
      );
    } else {
      return (
        <li id={props.id}>
          <button onClick={event=> alert('Folder Clicked') }>
          <div className="test">
            {folder.name}
          </div>
          </button>
        </li>
      );
    }
  });

  return(
    <div className="folderlists">
      <ul>
        <div className="small-12 columns">
          {<ul>
            {folders}
          </ul>}
          <div className="small-12 columns">
            <FolderForm></FolderForm>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default FolderList;
*/
