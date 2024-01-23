import { useState } from 'react';
import Modal from './components/Modal/Modal';
import Alert from './components/Alert/Alert';
import { AlertType } from './types';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [alerts, setAlerts] = useState<AlertType[]>([
    {
      id: 1,
      type: 'warning',
      content: 'This alert can be closed on button click',
      canClose: true,
    },
    {
      id: 2,
      type: 'success',
      content: 'This alert cannot be closed',
      canClose: false,
    },
    {
      id: 3,
      type: 'danger',
      content: 'This alert can be closed on click',
      canClose: true,
      clickDismissable: true,
    },
  ]);

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

  const closeAlert = (id: number) => {
    setAlerts((prevState) => prevState.filter((alert) => alert.id !== id));
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
      {alerts.map((alert) => (
        <Alert
          key={alert.id}
          type={alert.type}
          id={alert.id}
          onDismiss={alert.canClose ? closeAlert : undefined}
          clickDismissable={alert.clickDismissable}
        >
          <span>{alert.content}</span>
        </Alert>
      ))}
    </div>
  );
}

export default App;
