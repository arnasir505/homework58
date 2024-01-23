import React from 'react';

interface AlertProps {
  type: string;
  onDismiss: () => void;
}

const Alert: React.FC<AlertProps> = () => {
  return <div>Alert</div>;
};

export default Alert;
