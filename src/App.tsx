import { useState } from 'react';
import Modal from './components/Modal/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);

  const modalButtons = [
    {
      type: 'primary',
      label: 'Continue',
      onClick: () => console.log('clicked continue'),
    },
    {
      type: 'danger',
      label: 'Close',
      onClick: () => cancel(),
    },
  ];

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
        <div className='modal-footer'>
          {modalButtons.map((btn) => (
            <button
              type='button'
              className={`btn btn-${btn.type}`}
              onClick={btn.onClick}
              key={Math.random()}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </Modal>
    </div>
  );
}

export default App;
