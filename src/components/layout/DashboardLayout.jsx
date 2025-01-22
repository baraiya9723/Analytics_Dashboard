// src/components/layout/DashboardLayout.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import styles from "./Dashboard.module.css";
import Footer from "./Footer";
const DashboardLayout = ({ children }) => {
  return (
    <Container fluid className={styles.dashboardContainer}>
      <Row>
        <Col md={12}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col md={10}>{children}</Col>
      </Row>
    </Container>
  );
};

export default DashboardLayout;
