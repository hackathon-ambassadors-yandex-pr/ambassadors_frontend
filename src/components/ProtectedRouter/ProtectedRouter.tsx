import React, { FC, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteElementProps {
  element: ReactElement;
  isLoggedIn?: boolean;
}

const ProtectedRouteElement: FC<ProtectedRouteElementProps> = ({
  element,
  isLoggedIn,
  ...props
}) => {
  return isLoggedIn ? (
    React.cloneElement(element, props)
  ) : (
    <Navigate to="/" replace={true} />
  );
};

export default ProtectedRouteElement;
