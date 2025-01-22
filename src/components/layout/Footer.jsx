
// src/components/layout/Footer.jsx
import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <Container>
        <Card className="border-1 shadow-sm">
          <Card.Body>
            <Row className="align-items-center">
              <Col md={6} className="mb-3 mb-md-0">
                <h6 className="mb-1">Contact Information</h6>
                <p className="mb-0">
                  <i className="bi bi-telephone-fill me-2"></i>
                  <a href="tel:+919723956583" className="text-decoration-none">+91 9723956583</a>
                </p>
                <p className="mb-0">
                  <i className="bi bi-envelope-fill me-2"></i>
                  <a href="mailto:vishalbaraiya583@gmail.com" className="text-decoration-none">
                    vishalbaraiya583@gmail.com
                  </a>
                </p>
              </Col>
              <Col md={6} className="text-md-end">
              <p>© 2025 Designed & Developed by <span className={styles.name}>Vishal Paliwal</span></p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        </Container>
    </footer>
  );
};

export default Footer;