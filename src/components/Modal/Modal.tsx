import React from 'react';

interface ModalProps extends React.PropsWithChildren {
  title: string;
  show: boolean;
  onClose: React.MouseEventHandler;
}

const Modal: React.FC<ModalProps> = ({ title, show, onClose, children }) => {
  return (
    <>
      <div
        className='modal-backdrop show'
        style={{ display: show ? 'block' : 'none' }}
      />
      <div
        className='modal show'
        style={{ display: show ? 'block' : 'none' }}
        onClick={onClose}
      >
        <div className='modal-dialog' onClick={(e) => e.stopPropagation()}>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title fs-3'>{title}</h5>
              <button
                type='button'
                className='btn-close'
                onClick={onClose}
              ></button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
