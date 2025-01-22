// src/components/layout/Sidebar.jsx
import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
const Sidebar = () => {
  return (
    <Nav className={`${styles.sidebar} flex-column`}>
      <NavLink
        to="/geography"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Geography
      </NavLink>
      <NavLink
        to="/driver"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Drivers
      </NavLink>
      <NavLink
        to="/condition"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Conditions
      </NavLink>
      <NavLink
        to="/claim-type"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Claim Type
      </NavLink>
    </Nav>
  );
};

export default Sidebar;
