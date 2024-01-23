import { useState } from 'react';
import Modal from './components/Modal/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);

  const cancel = () => {
    setShowModal(false);
  };

  return (
    <div className='container'>
      <button
        type='button'
        className='btn btn-success'
        onClick={() => setShowModal(true)}
      >
        Show Modal
      </button>
      <Modal show={showModal} onClose={cancel} title='Modal title'>
        <div className='modal-body'>
          <p>This is modal content</p>
        </div>
      </Modal>
    </div>
  );
}

export default App;
