// src/components/ui/LoadingSpinner.jsx
import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingSpinner = ({
  animation = "border",
  variant = "primary",
  ...props
}) => {
  return <Spinner animation={animation} variant={variant} {...props} />;
};

export default LoadingSpinner;
