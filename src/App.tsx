import { useState } from 'react';
import Modal from './components/Modal/Modal';
import Alert from './components/Alert/Alert';

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

  const closeAlert = (e: React.MouseEvent) => {
    e.currentTarget.parentElement?.remove();
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
      <Alert type='warning' onDismiss={closeAlert}>
        <span>This is a warning type alert</span>
      </Alert>
      <Alert type='success'>
        <span>This is a success type alert</span>
      </Alert>
      <Alert type='danger' onDismiss={closeAlert}>
        <span>This is a danger type alert</span>
      </Alert>
      <Alert type='primary'>
        <span>This is a primary type alert</span>
      </Alert>
    </div>
  );
}

export default App;
