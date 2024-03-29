import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps extends React.PropsWithChildren {
  title: string;
  show: boolean;
  onClose: React.MouseEventHandler;
}

const backdropVariants = {
  open: { opacity: 0.5 },
  closed: { opacity: 0 },
};

const modalVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: '-100%' },
};

const Modal: React.FC<ModalProps> = ({ title, show, onClose, children }) => {
  return (
    <>
      <motion.div
        key={'backdrop'}
        animate={show ? 'open' : 'closed'}
        variants={backdropVariants}
        transition={{ duration: 0.5 }}
        className='modal-backdrop show'
        style={{ display: show ? 'block' : 'none' }}
      />
      <motion.div
        key={'modal'}
        animate={show ? 'open' : 'closed'}
        variants={modalVariants}
        transition={{ duration: 0.5 }}
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
      </motion.div>
    </>
  );
};

export default Modal;
