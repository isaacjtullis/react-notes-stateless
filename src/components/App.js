import React from 'react';
import FolderList from './FolderList.js';
import NoteSection from './NoteSection.js';
import NoteListControls from './NoteListControls.js';

const data = {
  folders: [ {
      id: 1,
      name: 'Useful Regular Expressions',
      notes: []
    },
    {
      id: 2,
      name: 'App Ideas',
      notes: [1, 2, 3]
    }
  ],
  notes: [
    {
      id: 1,
      body: 'InstaWoof - Instagram for dogs',
      updatedAt: '2/1/16',
    },
    {
      id: 2,
      body: "Whiskr - it's like Tinder but for cats",
      updatedAt: '12/25/15',
    },
    {
      id: 3,
      body: 'Ka-Yak - travel site for yaks',
      updatedAt: '6/22/15',
    }

  ],
  selectedFolderId: 2,
  selectedNoteId: 2
};

const App = props => {
  return (
    <div className="small-12 small-centered columns">
      <div className="small-2 large-4 columns">
        <FolderList key={data.selectedFolderId} folders={data.folders} selectedFolderId={data.selectedFolderId}></FolderList>
      </div>
      <div className="small-4 large-4 columns">
        <NoteSection key={data.selectedNoteId} notes={data.notes} selectedNoteId={data.selectedNoteId}></NoteSection>
      </div>
      <div class="small-4 large-4 columns">
        <NoteListControls key={data.selectedNoteId} notes={data.notes} selectedNoteId={data.selectedNoteId}></NoteListControls>
      </div>
    </div>
  );
};

export default App;
