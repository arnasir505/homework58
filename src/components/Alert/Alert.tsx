import React from 'react';

interface AlertProps extends React.PropsWithChildren {
  type: string;
  onDismiss?: React.MouseEventHandler;
}

const Alert: React.FC<AlertProps> = ({ type, onDismiss, children }) => {
  return (
    <div
      className={`alert alert-${type} w-50 d-flex align-items-center justify-content-between`}
    >
      {children}
      {onDismiss ? (
        <button
          type='button'
          className='btn-close'
          onClick={onDismiss}
        ></button>
      ) : null}
    </div>
  );
};

export default Alert;
