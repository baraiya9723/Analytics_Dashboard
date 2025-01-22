// src/components/layout/Header.jsx
import React from "react";
import { Navbar, Container, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, setTheme } from "../../store/slices/themeSlice";
import Button from "../ui/Button";
import styles from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };
  const handleThemeChange = (themeName) => {
    dispatch(
      setTheme(
        themeName === "light"
          ? {
              name: "light",
              colors: {
                primary: "#007bff",
                secondary: "#6c757d",
                background: "#ffffff",
                text: "#333333",
              },
            }
          : {
              name: "dark",
              colors: {
                primary: "#007bff",
                secondary: "#6c757d",
                background: "#333333",
                text: "#ffffff",
              },
            }
      )
    );
  };
  return (
    <Navbar
      className={styles.header}
      variant={theme.name === "light" ? "light" : "dark"}
    >
      <Container>
        <Navbar.Brand className={styles.headerBrand}>
          Analytics Dashboard
        </Navbar.Brand>
        <div className={styles.headerDropdown}>
          <Button
            onClick={handleToggleTheme}
            variant={ "secondary" }
            colors={theme.colors}
          >
            Toggle Theme
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
