// src/components/ui/Text.jsx
import React from 'react';
import { FormText } from 'react-bootstrap';

const Text = ({ children, variant = null, ...props }) => {
 return <FormText  muted = {variant === "muted"} {...props}>{children}</FormText>;
};

export default Text;