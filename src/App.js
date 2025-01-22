// src/App.js
import React from "react";
import DashboardLayout from "./components/layout/DashboardLayout";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContent from "./components/layout/MainContent";

function App() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
      }}
    >
      <Router>
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/geography" element={<MainContent />} />
            <Route path="/driver" element={<MainContent />} />
            <Route path="/condition" element={<MainContent />} />
            <Route path="/claim-type" element={<MainContent />} />
          </Routes>
        </DashboardLayout>
      </Router>
    </div>
  );
}

export default App;
