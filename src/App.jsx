import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import MenuPage from "./MenuComponents/MenuPage";
import MenuPageLayout from "./MenuComponents/MenuPagelayout";

import Food from "./MenuComponents/Food";
import ScrollToTop from "./MenuComponents/ScrollToTop";

function App() {
  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPageLayout />}>
          <Route index element={<Navigate to="breakfast" replace />} />
          <Route path=":category" element={<Food />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
