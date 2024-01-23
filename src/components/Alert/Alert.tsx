import React from 'react';

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
    <div
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
    </div>
  );
};

export default Alert;
