// src/components/layout/Card.jsx
import React from "react";
import { Card as BootstrapCard } from "react-bootstrap";
import styles from "./Card.module.css";
const Card = ({ children, ...props }) => {
  return (
    <BootstrapCard className={styles.card} {...props}>
      <BootstrapCard.Body className={styles.cardBody}>
        {children}
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};
export default Card;
