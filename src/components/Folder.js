import React from 'react'

const Folder = props => {
  let unhighlight = "unhighlighted"
  if (props.id === props.selectedId) {
    unhighlight = "folder-highlight"
  }

  return (
    <div className={unhighlight}>
      {props.name}
    </div>
  );
};

export default Folder;
