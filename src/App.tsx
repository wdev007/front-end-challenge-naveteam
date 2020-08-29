import React, { useState } from 'react';

import Modal from './components/Modal';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (): void => {
    setOpen(false);
  };

  return (
    <div className="App">
      <h1>ola mundo</h1>
      <button type="button" onClick={() => setOpen(!open)}>
        open
      </button>
      <Modal open={open} onCloseModal={handleClick}>
        <h1>Ola meu mundo</h1>
      </Modal>
    </div>
  );
};

export default App;
