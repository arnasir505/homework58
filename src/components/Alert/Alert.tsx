import React from 'react';
import { motion } from 'framer-motion';

interface AlertProps extends React.PropsWithChildren {
  id: number;
  type: string;
  onDismiss?: (id: number) => void;
  clickDismissable?: boolean;
}

const Alert: React.FC<AlertProps> = ({
  id,
  type,
  onDismiss,
  children,
  clickDismissable,
}) => {
  return (
    <motion.div
      key={id}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.2 }}
      className={`alert alert-${type} w-50 d-flex align-items-center justify-content-between`}
      onClick={clickDismissable && onDismiss ? () => onDismiss(id) : undefined}
    >
      {children}
      {onDismiss ? (
        clickDismissable ? null : (
          <button
            type='button'
            className='btn-close'
            onClick={() => onDismiss(id)}
          ></button>
        )
      ) : null}
    </motion.div>
  );
};

export default Alert;
