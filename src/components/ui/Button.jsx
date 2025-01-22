
// src/components/ui/Button.jsx
import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';
import styles from './Button.module.css'

const Button = ({ children, variant= "primary", ...props }) => {
  return <BootstrapButton variant={variant} {...props} className={styles.button}>{children}</BootstrapButton>;
};

export default Button;
