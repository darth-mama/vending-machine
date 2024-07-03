import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import BdayCakePretz from "./components/BdayCakePretz";
import Reeses from "./components/Reeses";
import Twix from "./components/Twix";
import VendingMachine from "./components/VendingMachine";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/twix" element={<Twix />} />
          <Route path="/reeses" element={<Reeses />} />
          <Route path="/bdaycakepretz" element={<BdayCakePretz />} />
          <Route path="/" element={<VendingMachine />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
