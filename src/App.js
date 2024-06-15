import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListApi from "./ListApi";
import UserDetail from "./UserDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListApi />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
