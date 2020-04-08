import React from 'react';

const useConfirm = (message = "", callback, rejection) => {
  if(typeof callback !== 'function') {
    return;
  }

  const confirmAction = () => {
    if(window.confirm(message)) {
      callback();
    } else {
      rejection();
    }
  }
  return confirmAction;
}

function App() {
  const deleteWord = () => console.log('Deleting ..');
  const abort = () => console.log('Aborted ..');
  const confirmDelete = useConfirm('Are you sure?', deleteWord, abort);
  return (
    <div>
      <button onClick={confirmDelete}>Delete</button>
    </div>
  );
}


export default App;
